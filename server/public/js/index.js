var get_tmpl = (function() {
  var tmpls = {};
  return function(url) {
    return new Promise(function(fulfill, reject) {
      if (tmpls[url]) {
        fulfill(tmpls[url]);
      } else {
        $.get(url, tmpl => {
          tmpls[url] = new t(tmpl);
          fulfill(tmpls[url]);
        });
      }
    });
  };
})();

var load_tmpl = (function() {
  var tmpls = {};
  return function(selector, url, data) {
    var load = function() {
      var template = new t(tmpls[url]);
      $(selector).html(template.render(data));
    };

    if (tmpls[url]) {
      load();
    } else {
      $.get(url, tmpl => {
        tmpls[url] = tmpl;
        load();
      });
    }
  };
})()(
  (function(jQuery) {
    jQuery.eventEmitter = {
      _JQInit: function() {
        this._JQ = jQuery(this);
      },
      emit: function(evt, data) {
        !this._JQ && this._JQInit();
        this._JQ.trigger(evt, data);
      },
      once: function(evt, handler) {
        !this._JQ && this._JQInit();
        this._JQ.one(evt, handler);
      },
      on: function(evt, handler) {
        !this._JQ && this._JQInit();
        this._JQ.bind(evt, handler);
      },
      off: function(evt, handler) {
        !this._JQ && this._JQInit();
        this._JQ.unbind(evt, handler);
      }
    };
  })(jQuery)
);

$(document).ready(function() {
  $(".menu .item").tab();

  var widget_id = "muzu-chatbot";

  var botui = new BotUI(widget_id);

  // load_tmpl('#toolbox-container', 'tmpls/toolbox.html', {
  //   bug: `My character isn't moving when I press the arrow key`
  // })

  // $("#toolbox-container").load("tmpls/toolbox.html");
  // $.ajax({
  //   url: url,
  //   data: data,
  //   success: success,
  //   dataType: dataType
  // });

  var md = markdownit();
  // md.render()
  var chat_context = {};

  Promise.all([
    get_tmpl("tmpls/toolbox.html"),
    get_tmpl("tmpls/toolkit.html")
  ]).then(tmpls => {
    var [toolbox_tmpl, toolkit_tmpl] = tmpls;

    var bug = "";
    var reasons = [];

    var render_bug;
    var render_reason;

    render_bug = function(reasons) {
      $("#toolbox-container").html(
        toolbox_tmpl.render({
          page0: true,
          bug: bug,
          reasons: reasons.map((r, i) => {
            r.nu = i + 1;
            if (r.culprit === true) {
              r.color = "green";
            } else if (r.culprit === false) {
              r.color = "red";
            } else {
              r.color = "grey";
            }
            return r;
          })
        })
      );

      $(".muzu-reason").click(function(el) {
        var reason_index = $(this).attr("data-reason");

        render_reason(reason_index);
      });

      $("#add-reason").click(function(el) {
        var new_reason = $(this)
          .prev()
          .val()
          .trim();
        if (new_reason.length) {
          reasons.push({
            text: new_reason
          });
          render_bug(reasons);
        }
      });


      if(reasons.length) {
        // XXX almost exactly repeating code below
        var reason_index = reasons.length - 1;
        $("#muzu-toolkit").html(
          toolkit_tmpl.render({
            page1: true,
            reason_index: reason_index,
            reason: reasons[reason_index],
            toolkit: toolkit
          })
        );

        $(".muzu-tool").click(function(el) {
          var tool_index = $(this).attr("data-tool");

          $("#muzu-toolkit").html(
            toolkit_tmpl.render({
              page1: true,
              page2: true,
              reason_index: reason_index,
              reason: reasons[reason_index],
              tool: toolkit[tool_index],
              no_back: true
            })
          );
          $(".menu .item").tab();
          $("#muzu-toolkit .menu .item")
            .first()
            .click();
        });
      }
      else {
        $("#muzu-toolkit").parent().hide()
      }

    };

    render_reason = function(reason_index) {
      $("#toolbox-container").html(
        toolbox_tmpl.render({
          page1: true,
          reason_index: reason_index,
          reason: reasons[reason_index],
          toolkit: toolkit
        })
      );

      $("#triage-reason .close")
        .parent()
        .click(function() {
          reasons[reason_index].culprit = false;
          render_bug(reasons);
        });

      $("#triage-reason .check")
        .parent()
        .click(function() {
          reasons[reason_index].culprit = true;
          render_bug(reasons);
          setTimeout(function() {
            $('[data-tab="muzu"]').click();
            run_dialogue(
              botui,
              dialogues,
              "solution",
              Object.assign(chat_context, {
                reason: reasons[reason_index].text
              })
            );
          }, 700);
        });

      $("#muzu-toolkit").html(
        toolkit_tmpl.render({
          page1: true,
          reason_index: reason_index,
          reason: reasons[reason_index],
          toolkit: toolkit
        })
      );

      $(".muzu-tool").click(function(el) {
        var tool_index = $(this).attr("data-tool");

        $("#muzu-toolkit").html(
          toolkit_tmpl.render({
            page1: true,
            page2: true,
            reason_index: reason_index,
            reason: reasons[reason_index],
            tool: toolkit[tool_index]
          })
        );
        $(".menu .item").tab();
        $("#muzu-toolkit .menu .item")
          .first()
          .click();
        $("#muzu-toolkit .back").click(function() {
          render_reason(reason_index);
        });
      });
    };

    render_bug(reasons);

    $.eventEmitter.on("chatbot", function(ev, data) {
      console.log("data", data);
      if (data.NEXT === "toolbox") {
        bug = data.bug_description;
        render_bug(reasons);
        setTimeout(function() {
          $('[data-tab="toolbox"]').click();
        }, 700);
      }
      if (data.NEXT === "toolbox2") {
        bug = data.bug_description;
        // render_bug(reasons);
        console.log('TODO: do new toolbox')
        setTimeout(function() {
          $('[data-tab="toolbox"]').click();
        }, 700);
      }
    });
  });

  run_dialogue(botui, dialogues, "intro", chat_context);
});

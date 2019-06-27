var get_tmpl = (function() {
  var tmpls = {};
  return function(url) {
    return new Promise(function(fulfill, reject) {
      if (tmpls[url]) {
        fulfill(tmpls[url])
      } else {
        $.get(url, (tmpl) => {
          tmpls[url] = new t(tmpl);
          fulfill(tmpls[url])
        });
      }
    })
  }
})()

var load_tmpl = (function() {
  var tmpls = {};
  return function(selector, url, data) {
    var load = function() {
      var template = new t(tmpls[url]);
      $(selector).html(template.render(data));
    }

    if (tmpls[url]) {
      load()
    } else {
      $.get(url, (tmpl) => {
        tmpls[url] = tmpl;
        load()
      });
    }
  }
})()

$(document).ready(function() {

  $('.menu .item').tab();

  var widget_id = 'muzu-chatbot';

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
  var result = md.render('Make your project talk to you! Add extra "say" blocks in-between the blocks you\'re testing, to see if all of your blocks are being run in your project, or to check a particular variable.');

  var toolkit = [
    {
      title: 'A block at a time',
      tabs: [
        {
          title: 'description',
          markdown: result
        },
        {
          title: 'tutorial',
          markdown: result
        },
        {
          title: 'workspace',
          markdown: result
        }
      ]
    },
    {
      title: 'Project talk',
      tabs: [
        {
          title: 'description',
          markdown: result
        },
        {
          title: 'tutorial',
          markdown: result
        },
        {
          title: 'workspace',
          markdown: result
        }
      ]
    },
    {
      title: 'Search Online',
      tabs: [
        {
          title: 'description',
          markdown: result
        },
        {
          title: 'tutorial',
          markdown: result
        },
        {
          title: 'workspace',
          markdown: result
        }
      ]
    },
    {
      title: 'Take a break',
      tabs: [
        {
          title: 'description',
          markdown: result
        },
        {
          title: 'tutorial',
          markdown: result
        },
        {
          title: 'workspace',
          markdown: result
        }
      ]
    }
  ]



  Promise.all([
    get_tmpl('tmpls/toolbox.html'),
    get_tmpl('tmpls/toolkit.html'),
  ]).then(tmpls => {
    var [
      toolbox_tmpl,
      toolkit_tmpl
    ] = tmpls;

    var reasons = [];
    [
      {
        text: 'The character is moving, but it\'s so small you cannot see it',
      },
      {
        text: 'The code isn\'t going to my if block'
      }
    ]


    var render_bug;
    var render_reason;

    render_bug = function(reasons) {
      $('#toolbox-container').html(toolbox_tmpl.render({
        page0: true,
        bug: `My character isn't moving when I press the arrow key`,
        reasons: reasons.map((r, i) => {
          r.nu = i + 1;
          if (r.culprit === true) {
            r.color = 'green'
          } else if (r.culprit === false) {
            r.color = 'red'
          } else {
            r.color = 'grey'
          }
          return r
        })
      }));

      $('.muzu-reason').click(function(el) {
        var reason_index = $(this).attr('data-reason');

        render_reason(reason_index);
      });

      $('#add-reason').click(function(el) {
        var new_reason = $(this).prev().val().trim()
        if (new_reason.length) {
          reasons.push({
            text: new_reason
          })
          render_bug(reasons);
        }
      });
    }

    render_reason = function(reason_index) {

      $('#toolbox-container').html(toolbox_tmpl.render({
        page1: true,
        reason_index: reason_index,
        reason: reasons[reason_index],
        toolkit: toolkit
      }));

      $('#triage-reason .close').parent().click(function() {
        reasons[reason_index].culprit = false;
        render_bug(reasons)
      })

      $('#triage-reason .check').parent().click(function() {
        reasons[reason_index].culprit = true;
        render_bug(reasons)
      })


      $('#muzu-toolkit').html(toolkit_tmpl.render({
        page1: true,
        reason_index: reason_index,
        reason: reasons[reason_index],
        toolkit: toolkit
      }));

      $('.muzu-tool').click(function(el) {
        var tool_index = $(this).attr('data-tool');

        $('#muzu-toolkit').html(toolkit_tmpl.render({
          page1: true,
          page2: true,
          reason_index: reason_index,
          reason: reasons[reason_index],
          tool: toolkit[tool_index]
        }));
        $('.menu .item').tab();
        $('#muzu-toolkit .menu .item').first().click();
        $('#muzu-toolkit .back').click(function() {
          render_reason(reason_index)
        });
      });
    }

    render_bug(reasons);
  })

  run_dialogue(botui, dialogues);
});

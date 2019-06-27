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

  load_tmpl('#toolbox-container', 'tmpls/toolbox.html', {
    value: 'hi'
  })

  // $("#toolbox-container").load("tmpls/toolbox.html");
  // $.ajax({
  //   url: url,
  //   data: data,
  //   success: success,
  //   dataType: dataType
  // });

  run_dialogue(botui, dialogues);
});

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

  Promise.all([
    get_tmpl('tmpls/toolbox.html'),
  ]).then(tmpls => {
    var [
      toolbox
    ] = tmpls;

    var reasons = [
      'The character is moving, but it\'s so small you cannot see it',
      'The code isn\'t going to my if block'
    ]

    var md = markdownit();
    var result = md.render('# markdown-it rulezz!');

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
      }
    ]

    $('#toolbox-container').html(toolbox.render({
      page0: true,
      bug: `My character isn't moving when I press the arrow key`,
      reasons: reasons
    }));

    $('.muzu-reason').click(function(el) {
      var index = $(this).attr('data-reason');
      console.log(index);

      $('#toolbox-container').html(toolbox.render({
        page1: true,
        index: index,
        bug: reasons[index],
        toolkit: toolkit
      }));
    });
  })

  run_dialogue(botui, dialogues);
});

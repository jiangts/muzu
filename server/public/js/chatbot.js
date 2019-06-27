$(function() {
  const widget_id = 'muzu-chatbot';

  $('body').append(`<div class="botui-app-container" id="${widget_id}"> </div>`)
  document.getElementById(widget_id).innerHTML = '<bot-ui></bot-ui>';

  var botui = new BotUI(widget_id);


  const compute_delay = string => {
    return string.length * 10
  }

  const do_dialogue = (botui, dialogue, context) => {
    let next_botui;
    if(dialogue.input) {
      let input = dialogue.input;
      next_botui = botui.action.text({
        action: {
          placeholder: input.placeholder
        }
      }).then(res => {
        context[input.variable] = res.value;
      })
    } else if (dialogue.buttons) {
      let buttons = dialogue.buttons;
      next_botui = botui.action.button({
        action: buttons
      }).then(res => {
        if(res.value && buttons.find(o => o.value === res.value && o.type === 'input')) {
          return botui.action.text({
            action: {}
          })
        }
        return res;
      }).then(res => {
        context[dialogue.variable] = res.value;
      })
    } else {
      var template = new t(dialogue.content);
      var content = template.render(context); // dialogue.content
      var delay = compute_delay(dialogue.content);

      next_botui = botui.message.add({
        [dialogue.speaker]: true,
        loading: true
      }).then(index => new Promise((fulfill, reject) => {
        setTimeout(() => {
          return botui.message.update(index, {
            loading: false,
            content,
            delay
          }).then(fulfill, reject);
        }, delay);
      }));
    }
    return next_botui.then(() => botui);
  }

  const run_dialogue = (botui, dialogues, context={}) => {
    let conversation = dialogues[0].dialogue;
    let inst = Promise.resolve(botui);
    for(let i = 0; i < conversation.length; i++) {
      inst = inst.then(botui => do_dialogue(botui, conversation[i], context))
    }
  }

  run_dialogue(botui, dialogues);
})




// botui.message.add({
//   content: 'Hello World from bot!'
// }).then(function () { // wait till previous message has been shown.

//   botui.message.add({
//     delay: 1000,
//     human: true,
//     content: 'Hello World from human!'
//   });
// });

// botui.message.add

/*
  botui.message.bot({ // show first message
    delay: 200,
    content: 'hello'
  }).then(() => {
    return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'how are you?'
    })
  }).then(() => {
    return botui.action.button({ // let user do something
      delay: 1000,
      action: [
        {
          text: 'Good',
          value: 'good'
        },
        {
          text: 'Really Good',
          value: 'really_good'
        }
      ]
    })
  }).then(res => {
    return botui.message.bot({
      delay: 1000,
      content: `You are feeling ${res.text}!`
    })
  }).then(() => {
    return botui.action.text({ // show 'text' action
      action: {
        placeholder: 'Your name'
      }
    });
  });
  */


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


const compute_delay = string => {
  return string.length * 10
}

const do_dialogue = (botui, dialogue, context) => {
  // store botui promise instances
  let next_botui;

  // handle dialogue input
  let { input, buttons } = dialogue;

  if (input) {
    next_botui = botui.action.text({
      action: {
        placeholder: input.placeholder
      }
    }).then(res => {
      context[input.variable] = res.value;
    })
  }
  else if (buttons) {
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
  }
  else {
    let template = new t(dialogue.content);
    let content = template.render(context);
    let delay = compute_delay(content);

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
  if (dialogue.NEXT) {
    context.NEXT = dialogue.NEXT;
  }
  return next_botui.then(() => botui);
}

const run_dialogue = (botui, dialogues, name, context={}) => {
  let conversation = dialogues.find(d => d.type === name).dialogue;
  let inst = Promise.resolve(botui);
  // basically compiling the network...
  // could also access the network in realtime...
  // then it can dynamicaally change when the underlying map changes...
  for(let i = 0; i < conversation.length; i++) {
    inst = inst.then(botui => {
      return do_dialogue(botui, conversation[i], context)
    }).then(botui => {
      $.eventEmitter.emit('chatbot', context);
      let { NEXT } = context;
      if (NEXT) {
        delete context.NEXT;
        return run_dialogue(botui, dialogues, NEXT, context);
      }
      return botui;
    })
  }

  return botui;
}


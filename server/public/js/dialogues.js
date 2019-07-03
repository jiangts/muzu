const start_state = 'intro';

const states = [
  {
    name: 'intro'
  },
  {
    name: 'stuck'
  },
  {
    name: 'challenged'
  },
  {
    name: 'bored'
  },
  {
    name: 'unstuck'
  }
];

const transitions = [
  {
    name: 'figured_out'
  },
  {
    name: 'got_confused'
  }
]

let result = '<p>Make your project talk to you! Add extra "say" blocks in-between the blocks you\'re testing, to see if all of your blocks are being run in your project, or to check a particular variable.</p>';



const toolkit = [
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


const dialogues = [
  {
    type: 'intro',
    dialogue: [
      {
        speaker: 'bot',
        content: `Hi! My name is Muzu, and I am here to support you as you program amazing things! What is your name?`
      },
      {
        speaker: 'human',
        input: {
          variable: 'name',
          placeholder: 'Your name'
        }
      },
      {
        speaker: 'bot',
        content: `Nice to meet you {{=name}}! I'm here to help you if you get stuck.`,
        NEXT: 'main_loop'
      }
    ]
  },
  {
    type: 'main_loop',
    dialogue: [
      {
        speaker: 'bot',
        variable: 'NEXT',
        buttons: [
          {
            text: `I got stuck :(`,
            value: 'stuck'
          },
          {
            text: `This is fun!`,
            value: 'intro2'
          }
        ]
      }
    ]
  },
  {
    type: 'stuck',
    dialogue: [
      {
        speaker: 'bot',
        content: `Hi {{=name}}, let's get unstuck together!`
      },
      {
        speaker: 'bot',
        content: `Can you explain your problem to me in words?`
      },
      {
        speaker: 'human',
        input: {
          variable: 'bug_description',
          placeholder: 'Describe your bug'
        }
      },
      {
        speaker: 'bot',
        content: `Let's go to the debugging toolbox!`,
        NEXT: 'toolbox'
      }
    ]
  },
  {
    type: 'solution',
    dialogue: [
      {
        speaker: 'bot',
        content: `Great work debugging, {{=name}}! It looks like the problem was that, "{{=reason}}".`
      },
      {
        speaker: 'bot',
        content: `Now can you use words to state what a solution might be?`
      },
      {
        speaker: 'human',
        input: {
          variable: 'soln_description',
          placeholder: 'Describe a solution'
        },
      },
      {
        speaker: 'bot',
        content: 'Great work debugging, {{=name}}!',
        NEXT: 'main_loop'
      }
    ]
  },
  {
    type: 'toolbox',
    dialogue: [

    ]
  },
  {
    type: 'intro2',
    dialogue: [
      {
        speaker: 'bot',
        content: `Hi! My name is Muzu, and I am here to support you as you program amazing things! What is your name?`
      },
      {
        speaker: 'human',
        input: {
          variable: 'name',
          placeholder: 'Your name'
        }
      },
      {
        speaker: 'bot',
        content: `Nice to meet you {{=name}}! What are you hoping to create in Scratch today?`
      },
      {
        speaker: 'bot',
        variable: 'project',
        buttons: [
          {
            text: `Story`,
            value: 'story'
          },
          {
            text: `Game`,
            value: 'game'
          },
          {
            text: `Animation`,
            value: 'animation'
          },
          {
            text: `Other`,
            value: 'other',
            type: 'input'
          }
        ]
      },
      {
        speaker: 'bot',
        content: `I don't know how to program myself, but am here to support you as you create your {{=project}}! Feel free to click on me whenever you want to chat. I will also check in on you from time to time. Happy programming!`
      },
      {
        speaker: 'bot',
        variable: 'feeling',
        buttons: [
          {
            text: 'Excited!',
            value: 'excited'
          },
          {
            text: 'Confused',
            value: 'confused'
          },
          {
            text: 'Stuck',
            value: 'stuck'
          },
          {
            text: 'Unstuck',
            value: 'unstuck'
          }
        ]
      }
    ]
  },
  {
    type: 'confused',
    dialogue: [
      {
        speaker: 'bot',
        content: `Sorry to hear that you're confused. But when you're confused, that's when you can learn the most! What are you confused about?`
      },
      {
        speaker: 'human',
        input: {
          variable: 'current_project'
        }
      },
      {
        speaker: 'bot',
        content: `Yes, that does sound challenging. Hm... maybe you can try some of these tips!`
      },
      {
        speaker: 'bot',
        variable: 'topic',
        buttons: [
          {
            text: `Ask for help (maybe from a teacher or friend)`,
            value: 'ask_help'
          },
          {
            text: `Look up examples of other {{=current_project}}`,
            value: 'view_example'
          },
          {
            text: `Click through some tutorials on {{=current_project}}`,
            value: 'watch_tutorial'
          },
        ]
      }
    ]
  }
]

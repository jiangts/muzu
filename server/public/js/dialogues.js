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

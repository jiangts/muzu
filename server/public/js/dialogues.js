const start_state = "intro";

const states = [
  {
    name: "intro"
  },
  {
    name: "stuck"
  },
  {
    name: "challenged"
  },
  {
    name: "bored"
  },
  {
    name: "unstuck"
  }
];

const transitions = [
  {
    name: "figured_out"
  },
  {
    name: "got_confused"
  }
];

let result0 = `<p>
  <img src="images/say_block.gif" class="some-img" />
  Pull apart your blocks and click on each one.
  Does each block do what you expect?
  Now try attaching some blocks back together and clicking on the chunk.
  Does it do what you expect?
  </p><p>
<img src="images/1block_description.gif" class="some-img" /></p>
  `;
let oneBlock_description = `<p>
    Pull apart your blocks and click on each one.
    Does each block do what you expect?
    Now try attaching some blocks back together and clicking on the chunk.
    Does it do what you expect?
    </p><p>
  <img src="images/1block_description.gif" class="some-img" /></p>
    `;
let projectTalk_description = `<p>
Make your project talk to you!
Add extra "say" blocks in-between the blocks you\'re testing,
to see if all of your blocks are being run in your project,
or to check a particular variable.</p>
<p>
<img src="images/say_blocks.png" class="some-img" />
</p>
<p>Example 1: Check to see which blocks of code are running</p>
<p>
<img src="images/say_block_description1.gif" class="some-img" />
</p>
<p>Example 2: Check to see the value of certain variables (like x position) and if certain blocks are running (like block inside an "if" block)</p>
<p>
<img src="images/say_block_description2.gif" class="some-img" />
</p>
`;
let projectTalk_tutorial = `
<p>
1) Click on the "Looks" category of code blocks on the left side of your window (hint: it's purple!)
</p><p>
<img src="images/say_block_tutorial1.gif" class="some-img" />
</p><p>
2) Add a "say [Hello!] for [2] seconds" block into areas in your code where you want to check if your character has done something, or to check if your code has gotten to a particular block. For example, let's say you want to check if your character has moved 10 steps. In this case, put your "say" block after the "move 10 steps" block.
</p><p>
<img src="images/say_block_tutorial2.gif" class="some-img" />
</p><p>
3) Change the "Hello!" part of the say block to something that is informative of what your character is doing. For example, this could be "I've moved 10 steps!"
</p><p>
<img src="images/say_block_tutorial3.gif" class="some-img" />
</p>
<p>
4) Now, run your code with the extra say blocks! Use the "say" blocks to check what your character is doing, or to check if it has gotten to a particular part of your code (like an "if" block)
</p><p>
<img src="images/say_block_tutorial4.gif" class="some-img" />
</p>
`;
let projectTalk_workspace = `<p>Use this section to write any notes while you debug! </p><textarea rows="4" cols="75" style="outline: none;">

</textarea>`;

let searchOnline_description = `<p>Try searching online to see if you can find the answer! In the search bar, type: "scratch code" and whatever question you have.</p>
<p><img src="images/search_online_description1.gif" class="some-img" /></p>`;

const toolkit = [
  {
    title: "A block at a time",
    tabs: [
      {
        title: "description",
        markdown: oneBlock_description
      },
      {
        title: "tutorial",
        markdown: result0
      },
      {
        title: "workspace",
        markdown: result0
      }
    ]
  },
  {
    title: "Project talk",
    tabs: [
      {
        title: "description",
        markdown: projectTalk_description
      },
      {
        title: "tutorial",
        markdown: projectTalk_tutorial
      },
      {
        title: "workspace",
        markdown: projectTalk_workspace
      }
    ]
  },
  {
    title: "Search Online",
    tabs: [
      {
        title: "description",
        markdown: searchOnline_description
      },
      {
        title: "tutorial",
        markdown: result0
      },
      {
        title: "workspace",
        markdown: result0
      }
    ]
  },
  {
    title: "Take a break",
    tabs: [
      {
        title: "description",
        markdown: result0
      },
      {
        title: "tutorial",
        markdown: result0
      },
      {
        title: "workspace",
        markdown: result0
      }
    ]
  }
];

const dialogues = [
  {
    type: "intro",
    dialogue: [
      {
        speaker: "bot",
        content: `![muzu gif](images/muzu128.png)`
      },
      {
        speaker: "bot",
        content: `Hi! My name is Muzu, and I am here to support you as you program amazing things! What is your name?`
      },
      {
        speaker: "human",
        input: {
          variable: "name",
          placeholder: "Your name"
        }
      },
      {
        speaker: "bot",
        content: `Nice to meet you {{=name}}! I'm here to help you if you get stuck.`,
        NEXT: "main_loop"
      }
    ]
  },
  {
    type: "main_loop",
    dialogue: [
      {
        speaker: "bot",
        variable: "NEXT",
        buttons: [
          {
            text: `I got stuck :(`,
            value: "stuck"
          },
          {
            text: `This is fun!`,
            value: "fun"
          }
        ]
      }
    ]
  },
  {
    type: "stuck",
    dialogue: [
      {
        speaker: "bot",
        content: `I'm sorry to hear that {{=name}}...`
      },
      {
        speaker: "bot",
        content: `But no worries! When you work hard to get unstuck, your brain is growing!`
      },
      {
        speaker: "bot",
        content: ` ![muzu brain](images/brain_muzu.png)`
      },
      {
        speaker: "bot",
        content: `Let's get unstuck together!`
      },
      {
        speaker: "bot",
        content: `Can you explain your problem to me in words?`
      },
      {
        speaker: "human",
        input: {
          variable: "bug_description",
          placeholder: "Describe your bug"
        }
      },
      {
        speaker: "bot",
        content: `Let's go to the debugging toolbox!`,
        NEXT: "toolbox"
      },
      {
        speaker: "bot",
        variable: "NEXT",
        buttons: [
          {
            text: `I'm still' stuck :(`,
            value: "stuck"
          },
          {
            text: `I figured out my bug!`,
            value: "solution"
          }
        ]
      }
    ]
  },
  {
    type: "solution",
    dialogue: [
      {
        speaker: "bot",
        content: `![muzu brain](images/cheerful_muzu.png)`
      },
      {
        speaker: "bot",
        content: `Great work debugging, {{=name}}! It looks like the problem was that, "{{=reason}}".`
      },
      {
        speaker: "bot",
        content: `Now can you use words to state what a solution might be?`
      },
      {
        speaker: "human",
        input: {
          variable: "soln_description",
          placeholder: "Describe a solution"
        }
      },
      {
        speaker: "bot",
        content: `Ok! Do you need help figuring out how to implement this solution?`
      },
      {
        speaker: "bot",
        variable: "NEXT",
        buttons: [
          {
            text: `Yes, please!`,
            value: "stuck"
          },
          {
            text: `Nope I got it!`,
            value: "no help solution"
          }
        ]
      }
    ]
  },
  {
    type: "no help solution",
    dialogue: [
      {
        speaker: "bot",
        content: "Great work debugging, {{=name}}!",
        NEXT: "main_loop"
      }
    ]
  },
  {
    type: "toolbox",
    dialogue: []
  },
  {
    type: "fun",
    dialogue: [
      {
        speaker: "bot",
        content:
          "glad to hear it {{=name}}! As you work hard, your brain is growing strong!"
      },
      {
        speaker: "bot",
        content: "I'll be here if you need any help :)",
        NEXT: "main_loop"
      }
    ]
  },
  {
    type: "intro2",
    dialogue: [
      {
        speaker: "bot",
        content: `Hi! My name is Muzu, and I am here to support you as you program amazing things! What is your name?`
      },
      {
        speaker: "human",
        input: {
          variable: "name",
          placeholder: "Your name"
        }
      },
      {
        speaker: "bot",
        content: `Nice to meet you {{=name}}! What are you hoping to create in Scratch today?`
      },
      {
        speaker: "bot",
        variable: "project",
        buttons: [
          {
            text: `Story`,
            value: "story"
          },
          {
            text: `Game`,
            value: "game"
          },
          {
            text: `Animation`,
            value: "animation"
          },
          {
            text: `Other`,
            value: "other",
            type: "input"
          }
        ]
      },
      {
        speaker: "bot",
        content: `I don't know how to program myself, but am here to support you as you create your {{=project}}! Feel free to click on me whenever you want to chat. I will also check in on you from time to time. Happy programming!`
      },
      {
        speaker: "bot",
        variable: "feeling",
        buttons: [
          {
            text: "Excited!",
            value: "excited"
          },
          {
            text: "Confused",
            value: "confused"
          },
          {
            text: "Stuck",
            value: "stuck"
          },
          {
            text: "Unstuck",
            value: "unstuck"
          }
        ]
      }
    ]
  },
  {
    type: "confused",
    dialogue: [
      {
        speaker: "bot",
        content: `Sorry to hear that you're confused. But when you're confused, that's when you can learn the most! What are you confused about?`
      },
      {
        speaker: "human",
        input: {
          variable: "current_project"
        }
      },
      {
        speaker: "bot",
        content: `Yes, that does sound challenging. Hm... maybe you can try some of these tips!`
      },
      {
        speaker: "bot",
        variable: "topic",
        buttons: [
          {
            text: `Ask for help (maybe from a teacher or friend)`,
            value: "ask_help"
          },
          {
            text: `Look up examples of other {{=current_project}}`,
            value: "view_example"
          },
          {
            text: `Click through some tutorials on {{=current_project}}`,
            value: "watch_tutorial"
          }
        ]
      }
    ]
  }
];

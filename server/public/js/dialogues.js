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

let break_description = `<p>
  Sometimes, we just need a little time to take a break from coding! Coming back might help us notice our bug. Take a 5 minute break! Walk around, do some push-ups or go to the bathroom :)
  </p><p>
<iframe src="https://giphy.com/embed/muCo9BLS7vjErTON27" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></p>
  `;

let break_tutorial = `<p>
1) create a new tab in your browser by clicking the "+" button at the top of your window, or pressing "command" + "t". In the search bar, type in "5 minute timer"
    </p>
    <p><img src="images/break_tutorial1.gif" class="some-img" style="padding-top:20px; padding-bottom:20px"/></p>
    <p>
2) Press enter, and the timer should start counting down
        </p>
        <p><img src="images/break_tutorial2.gif" class="some-img" style="padding-top:20px; padding-bottom:20px"/></p>
        <p>3) Now, step away from your computer, and take a 5 minute stretch break! </p>
<p>4) After the timer goes off, come back to your code and take another look at it. Stepping away for a while can help you see things from a different perspective!</p>




    `;
let oneBlock_description = `<p>
    Pull apart your blocks and click on each one.
    Does each block do what you expect?
    Now try attaching some blocks back together and clicking on the chunk.
    Does it do what you expect?
    </p><p>
  <img src="images/1block_description.gif" class="some-img" /></p>
    `;
let oneBlock_tutorial = `<p>
        1) Click on the stop button to make sure that none of your other code is running
        </p>
        <p><img src="images/1block_tutorial1.gif" class="some-img" /></p>
        <p>2) Now, if there's a part in your code where you are confused about, drag it out of the overall code, and seperate all the blocks. For example, in the example below, the if block doesn't seem to be running. So we took apart all the pieces in the block</p>
        <p><img src="images/1block_tutorial2.gif" class="some-img" /></p>
        <p>
        3) Now, click each block to see what each block does!
        </p>
        <p><img src="images/1block_tutorial3.gif" class="some-img" /></p>
        <p>
        4) Now, put some blocks back together and click the chunk to see what it does
        </p>
        <p><img src="images/1block_tutorial4.gif" class="some-img" /></p>
        5) Now, put all the code back together to see what happens. Here, we found that even though all the blocks worked individually, they didn't work when we put it back into the "if" block. That's because the x position is not greater than 50, so the code inside that block never get's run!
        </p>
        <p><img src="images/1block_tutorial5.gif" class="some-img" /></p>
        `;

let projectTalk_description = `<p>
Make your project talk to you!
Add extra "say" blocks in-between the blocks you\'re testing,
to see if all of your blocks are being run in your project,
or to check a particular variable.</p>
<p>
<img src="images/say_blocks.png" class="some-img" />
</p>
<p><b>Example 1:</b> Check to see which blocks of code are running</p>
<p>
<img src="images/say_block_description1.gif" class="some-img" />
</p>
<p><b>Example 2:</b> Check to see the value of certain variables (like x position) and if certain blocks are running (like block inside an "if" block)</p>
<p>
<img src="images/say_block_description2.gif" class="some-img" />
</p>
<p>
<b>Tip:</b> If your code is in a "forever" block or "if" block, then you should use a "say [Hello]" block, otherwise, you should use a "say [Hello] for [2] seconds" block.
</p>
`;
let projectTalk_tutorial = `
<p>
1) Click on the "Looks" category of code blocks on the left side of your window (hint: it's purple!)
</p><p>
<img src="images/say_block_tutorial1.gif" class="some-img" />
</p><p>
2) Add a "say [Hello!] for [2] seconds" or "say [Hello!]" block into areas in your code where you want to check if your character has done something, or to check if your code has gotten to a particular part. For example, let's say you want to check when your character has moved 10 steps. In this case, put your "say" block after the "move 10 steps" block.
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
let workspace = `<p>Use this section to write any notes while you debug! </p><textarea rows="4" cols="75" style="outline: none;">

</textarea>`;

let searchOnline_description = `<p>Try searching online to see if you can find the answer! In the search bar, type: "scratch " followed by whatever question you have.</p>
<p><img src="images/search_online_description1.gif" class="some-img" /></p>`;

let searchOnline_tutorial = `<p>
1) Create a new tab in your browser window, by either clicking the "+" button at the top of your window or pressing "command" + "t"
</p>
<p><img src="images/search_online_tutorial0.gif" class="some-img" style="padding-top:20px; padding-bottom:20px"/></p>
<p>
2) In the search bar (or URL bar) type in "scratch" followed by whatever question you have.
</p>
<p><img src="images/search_online_tutorial1.gif" class="some-img" style="padding-top:20px; padding-bottom:20px" /></p>
<p>
3) Make sure you <b>don't</b> use terms that are specific to your code (like cat or dinosaur) instead use more general terms (like sprite or character)
</p>
<p><img src="images/search_online_tutorial2.gif" class="some-img" style="padding-top:20px; padding-bottom:20px" /></p>
<p>4) Press enter to search!
</p>
<p>5) When the search results come up, look for links that either say "Scratch Wiki" or "Discuss Scratch". These are usually the most helpful!
</p>
<p><img src="images/search_online_tutorial5b.png" class="some-img" style="max-width:50%;
    height:auto;"/></p>
<p><img src="images/search_online_tutorial5a.png" class="some-img" style="max-width:70%;
    height:auto;" /></p>
<p>6) If the search doesn't come up with anything helpful, try searching a different word that means the same thing.
</p>
<p><img src="images/search_online_tutorial6.gif" class="some-img style="padding-top:20px; padding-bottom:20px" /></p>


`;

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
        markdown: oneBlock_tutorial
      },
      {
        title: "workspace",
        markdown: workspace
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
        markdown: workspace
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
        markdown: searchOnline_tutorial
      },
      {
        title: "workspace",
        markdown: workspace
      }
    ]
  },
  {
    title: "Take a break",
    tabs: [
      {
        title: "description",
        markdown: break_description
      },
      {
        title: "tutorial",
        markdown: break_tutorial
      },
      {
        title: "workspace",
        markdown: workspace
      }
    ]
  }
];

const soln_toolkit = [
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
        markdown: workspace
      }
    ]
  },
  {
    title: "A block at a time",
    tabs: [
      {
        title: "description",
        markdown: oneBlock_description
      },
      {
        title: "tutorial",
        markdown: oneBlock_tutorial
      },
      {
        title: "workspace",
        markdown: workspace
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
        markdown: searchOnline_tutorial
      },
      {
        title: "workspace",
        markdown: workspace
      }
    ]
  },
  {
    title: "Take a break",
    tabs: [
      {
        title: "description",
        markdown: break_description
      },
      {
        title: "tutorial",
        markdown: break_tutorial
      },
      {
        title: "workspace",
        markdown: workspace
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
            value: "growth_mindset_2"
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
    type: "growth_mindset_1",
    dialogue: [
      // {
      //   speaker: "bot",
      //   content: `I'm sorry to hear that {{=name}}...but it's ok to be stuck!`
      // },
      {
        speaker: "bot",
        content: `Not a problem! Remember, when you work hard on your code, your brain is growing and making new connections!`
      },
      {
        speaker: "bot",
        content: ` ![muzu brain](images/brain_muzu.png)`,
        NEXT: "stuck"
      }
    ]
  },
  {
    type: "growth_mindset_2",
    dialogue: [
      {
        speaker: "bot",
        content: `I'm sorry to hear that {{=name}}...but it's ok to be stuck!`
      },
      {
        speaker: "bot",
        content: `Remember, how you felt stuck on your last bug but solved it? This bug is solvable too!`,
        NEXT: "stuck"
      }
    ]
  },
  {
    type: "growth_mindset_3",
    dialogue: [
      {
        speaker: "bot",
        content: `I'm sorry to hear that {{=name}}...but it's ok to be stuck!`
      },
      {
        speaker: "bot",
        content: `Feeling challenged is a great place to be, that's when you can learn the most!`,
        NEXT: "stuck"
      }
    ]
  },
  {
    type: "stuck",
    dialogue: [
      {
        speaker: "bot",
        content: `Let's try to get unstuck together!`
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
        content: `Hm...that does sound challenging. Let's go to the debugging toolbox to work through it!`
      },
      {
        speaker: "bot",
        variable: "NEXT",
        buttons: [
          {
            text: `Let's go!`,
            value: "toolbox"
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
            value: "toolbox2"
          },
          {
            text: `Nope, I got it!`,
            value: "no help solution"
          }
        ]
      }
    ]
  },
  {
    type: "help solution",
    dialogue: [
      {
        speaker: "bot",
        content: `![muzu brain](images/cheerful_muzu.png)`
      },
      {
        speaker: "bot",
        content:
          "Great work debugging, {{=name}}! I know you worked really hard!"
      },
      {
        speaker: "bot",
        content: "Did you learn anything from working through that bug?",
        NEXT: "main_loop"
      },
      {
        speaker: "human",
        input: {
          variable: "reflection",
          placeholder: "I learned..."
        }
      },
      {
        speaker: "bot",
        content:
          "Good to hear, {{=name}}! You can recall how you worked through this bug the next time you encounter another bug",
        NEXT: "main_loop"
      },
      {
        speaker: "bot",
        content:
          "If you need any help again, you can always call on lil' o me!",
        NEXT: "main_loop"
      }
    ]
  },
  {
    type: "no help solution",
    dialogue: [
      {
        speaker: "bot",
        content: `![muzu brain](images/cheerful_muzu.png)`
      },
      {
        speaker: "bot",
        content:
          "Great work debugging, {{=name}}! I know you worked really hard!"
      },
      {
        speaker: "bot",
        content: "Did you learn anything from working through that bug?",
        NEXT: "main_loop"
      },
      {
        speaker: "human",
        input: {
          variable: "reflection",
          placeholder: "I learned..."
        }
      },
      {
        speaker: "bot",
        content:
          "Good to hear, {{=name}}! You can recall how you worked through this bug the next time you encounter another bug",
        NEXT: "main_loop"
      },
      {
        speaker: "bot",
        content:
          "If you need any help again, you can always call on lil' o me!",
        NEXT: "main_loop"
      }
    ]
  },
  {
    type: "toolbox",
    dialogue: []
  },
  {
    type: "toolbox2",
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

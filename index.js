const jokes = {
  sql: {
    setup: "A SQL query walks into a bar, walks up to two tables and asks...",
    punchline: "Can I join you?",
    img1:
      "https://cdn.dribbble.com/users/1463678/screenshots/3212815/tables-dribbble.png",
    img2:
      "https://img.favpng.com/17/4/21/microsoft-sql-server-mysql-database-logo-png-favpng-BDa3wmPWtH33Mta3REga7iKC2.jpg",
    background: "#288fb8",
    font: "VT323",
  },
  java: {
    setup: "Why do Java programmers wear glasses?",
    punchline: "Because they don't C#",
    img1: "https://thumbs.gfycat.com/IdealisticShoddyArmyworm-small.gif",
    img2:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--aASXL3Ny--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/3evy8u2x14wzwe4a6cwk.jpg",
    background: "#c72457",
    font: "Righteous",
  },
  ui: {
    setup: "A user interface is like a joke.",
    punchline: "If you have to explain it then it is not that good.",
    img1: "https://i.gzn.jp/img/2014/04/30/user-is-drunk/00-top.jpg",
    img2: "https://blog.fluidui.com/content/images/2016/02/microsoft-messy.png",
    background: "#4e9666",
    font: "Bangers",
  },
  ifelse: {
    setup:
      "A programmer puts two glasses on his bedside table before going to sleep.",
    punchline:
      "A full one, in case he gets thirsty, and an empty one, in case he doesn’t.",
    img1:
      "https://cdn5.vectorstock.com/i/1000x1000/70/59/realistic-water-glass-empty-and-full-clean-vector-24797059.jpg",
    img2: "https://i.redd.it/dfvbkvoccyn01.jpg",
    background: "#c535db",
    font: "Allan",
  },
  ie: {
    setup: "How do you check if a webpage is HTML5?",
    punchline: "Try it out on Internet Explorer",
    img1: "https://pbs.twimg.com/profile_images/1620822836/avatar_400x400.jpg",
    img2: "https://img.memecdn.com/internet-exploder_fb_739658.jpg",
    background: "#97bbc4",
    font: "Knewave",
  },
};

// import express
const express = require("express");

// create server
const app = express();

// 3000 is common
const port = 3000;

// confirmation function
function onListen() {
  console.log(`Listening on :${port}`);
}

// start listening
app.listen(
  port, // TCP port where the server listens
  onListen // callback runs when server starts
);

app.get("/:age/:programmertype", (request, response) => {
  const { age, programmertype } = request.params;

  let joke;

  if (programmertype === "frontender") {
    joke = age > 25 ? jokes.ie : jokes.ui;
  } else if (programmertype === "backender") {
    joke = age > 30 ? jokes.java : jokes.sql;
  } else {
    joke = jokes.ifelse;
  }

  const page = render(joke);
  response.send(page);
});

function render(joke) {
  const page = `
    <html>
        <head>
            <title>Programming Jokes</title>
            <link href="https://fonts.googleapis.com/css2?family=${
              joke.font
            }&display=swap" rel="stylesheet">
            ${makeStyles(joke.background, joke.font)}
        </head>
        <body>
            ${displayJoke(joke)}
        </body>
    </html>
  `;

  return page;
}

function displayJoke(joke) {
  const { setup, punchline, img1, img2 } = joke;

  return `
        <h1>${setup}</h1>
        <h1><marquee>${punchline}</marquee></h1>
        <div>
            <img src="${img1}" />
            <img src="${img2}" />
        </div>
    `;
}

function makeStyles(background, font) {
  return `
    <style>
        body {
            padding: 10vh 10vw;
            background-color: ${background};
            color: white;
            font-family: '${font}', monospace;
        }
        h1 {
            text-align: center;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        img {
            width: 25vw;
            padding: 5vh; 5vw;
        } 
    </style>
`;
}

const jokes = {
  sql: {
    setup: "A SQL query walks into a bar, walks up to two tables and asks...",
    punchline: "Can I join you?",
  },
  java: {
    setup: "Why do Java programmers wear glasses?",
    punchline: "Because they don't C#",
  },
  ui: {
    setup: "A user interface is like a joke.",
    punchline: "If you have to explain it then it is not that good.",
  },
  ifelse: {
    setup:
      "A programmer puts two glasses on his bedside table before going to sleep.",
    punchline:
      "A full one, in case he gets thirsty, and an empty one, in case he doesn’t.",
  },
  ie: {
    setup: "How do you check if a webpage is HTML5?",
    punchline: "Try it out on Internet Explorer",
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

  const page = `
    <html>
        <head>
            <title>Programming Jokes</title>
        </head>
        <body>
            <h1>${joke.setup}</h1>
            <h1>${joke.punchline}</h1>
        </body>
    </html>
  `;

  response.send(page);
});

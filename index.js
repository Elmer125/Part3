const app = require("./app");
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`server running on port ${config.PORT} `);
});

/* const express = require("express");
const bodyParser = require("body-parser"); */
/* const morgan = require("morgan");
const cors = require("cors"); */
/* const app = express();
const Note = require("./models/note");
const note = require("./models/note"); */
/* const { request, response } = require("express"); */

/* const logger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};
app.use(express.static("build"));
app.use(bodyParser.json());
app.use(logger); */
/* const mongoose = require("mongoose"); */

/* const url =
  "mongodb+srv://mauricio05:TMg6JiZmQXaR6Qy@cluster0.pstm5.mongodb.net/note-app?retryWrites=true&w=majority"; */
/* 
app.use(cors());
app.use(express.json()); */

/* morgan.token("content", (req, res) => {
  return JSON.stringify(req.body);
}); */

/* app.use(morgan(":method :url :status :response-time ms :content")); */
/* 
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint); */
/* 
const errorHandler = (error, request, response, next) => {
  console.error(error.message);
  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
  next(error);
};
app.use(errorHandler); */
/* app.get("/api/notes", (request, response) => {
  Note.find({}).then((notes) => {
    response.json(notes.map((note) => note.toJSON()));
  });
  response.json(notes); 
}); */

/* app.get("/api/notes/:id", (request, response, next) => {
  const id = request.params.id;
    const note = notes.find((note) => note.id === id);
  Note.findById(id)
    .then((note) => {
      if (note) {
        response.json(note.toJSON());
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      next(error);
 console.log(error);
      response.status(400).send({ error: "malfomatted id" }); 
    });

  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
}); */

/* app.post("/api/notes", (request, response, next) => {
  const body = request.body;
   if (body.content === undefined) {
    return response.status(400).json({ error: "content missing" });
  }
  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  });

  note
    .save()
    .then((savedNote) => {
      response.json(savedNote.toJSON());
    })
     .then((savedAndFormattedNote) => {
      response.json(savedAndFormattedNote);
    })
    .catch((error) => next(error));
    notes = notes.concat(note);
  response.json(note);
}); */

/* app.delete("/api/notes/:id", (request, response, next) => {
  const id = request.params.id;
  note
    .findByIdAndRemove(id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));

  notes = notes.filter((note) => note.id !== id);
  response.status(204).end();
}); */
/* 
app.put("api/notes/:id", (request, response, next) => {
  const body = request.body;

  const note = {
    content: body.content,
    important: body.important,
  };

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then((updatedNote) => {
      response.json(updatedNote.toJSON());
    })
    .catch((error) => next(error));
}); */

/* const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError" && error.kind == "ObjectId") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};
 */
/* app.use(errorHandler); */

/* app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); */

/* 
mongoose.connect(url);
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
}); */

/* noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
}); */

/* const Note = mongoose.model("Note", noteSchema); */

/* let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
]; */
/* 
app.get("/", (request, response) => {
  response.send("<h1>Hello world!</h1>");
}); */

/* const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
}; */
/* 
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 */

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Note = require("./models/note");
/* const mongoose = require("mongoose"); */
const app = express();
/* const url =
  "mongodb+srv://mauricio05:TMg6JiZmQXaR6Qy@cluster0.pstm5.mongodb.net/note-app?retryWrites=true&w=majority"; */

app.use(cors());
app.use(express.json());
app.use(express.static("build"));
morgan.token("content", (req, res) => {
  return JSON.stringify(req.body);
});

app.use(morgan(":method :url :status :response-time ms :content"));

/* const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint); */

const errorHandler = (error, request, response, next) => {
  console.error(error.message);
  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
  next(error);
};
app.use(errorHandler);

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

app.get("/", (request, response) => {
  response.send("<h1>Hello world!</h1>");
});
app.get("/api/notes", (request, response) => {
  Note.find({}).then((notes) => {
    response.json(notes);
  });
  /* response.json(notes); */
});
app.get("/api/notes/:id", (request, response, next) => {
  const id = request.params.id;
  /*   const note = notes.find((note) => note.id === id); */
  Note.findById(id)
    .then((note) => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      next(error);
      /* console.log(error);
      response.status(400).send({ error: "malfomatted id" }); */
    });

  /* if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  } */
});

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);
  response.status(204).end();
});

/* const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
}; */

app.post("/api/notes", (request, response) => {
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
    /* id: generateId(), */
  });

  note
    .save()
    .then((savedNote) => {
      return savedNote.toJSON();
    })
    .then((savedAndFormattedNote) => {
      response.json(savedAndFormattedNote);
    })
    .catch((error) => next(error));
  /*   notes = notes.concat(note);
  response.json(note); */
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://mauricio05:${password}@cluster0.pstm5.mongodb.net/note-app?retryWrites=true&w=majority`;

mongoose.connect(url);

//agg new notes
/* const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const note = new Note({
  content: "GET and POST are the most important methods of HTTP protocol",
  date: new Date(),
  important: true,
});

note.save().then((result) => {
  console.log("note saved!");
  mongoose.connection.close();
}); */

//Return data from database
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

Note.find({important: true}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  console.log(process.argv[3])
  
  mongoose.connection.close();
});


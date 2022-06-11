const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema(
  {
    title: { type: "string", required: [true, "title is required"] },
    author: { type: "string", required: [true, "author is required"] },
    content: {
      type: "string",
      required: [true, "content is required"],
      minLength: [10, "the content should have atleast 10 characters"],
    },
  },
  { timetamps: true }
);

module.exports = mongoose.model("Story", storySchema);

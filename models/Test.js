const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  testname: {
    type: String,
  },
  testnumber: {
    type: Number,
    default: 0,
  },
});

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;

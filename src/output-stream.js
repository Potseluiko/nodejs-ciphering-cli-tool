const fs = require("fs")

function createOutputStream(output) {
  if (!output) {
    return process.stdout
  }

  return fs.createWriteStream(output)
}

module.exports = { createOutputStream }

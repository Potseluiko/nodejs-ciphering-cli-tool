const fs = require("fs")

function createInputStream(input) {
  if (!input) {
    return process.stdin
  }

  if (!fs.existsSync(input)) {
    console.error(`File "${input}" is not exist.`)
    process.exit(1)
  }

  return fs.createReadStream(input)
}

module.exports = { createInputStream }

import fs from "fs"

export function createOutputStream(output) {
  if (!output) {
    return process.stdout
  }

  return fs.createWriteStream(output)
}

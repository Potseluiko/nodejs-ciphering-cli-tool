const paramsHelper = require("./src/paramsHelper.js")
const paramsConfig = require("./src/paramsConfig.js")

const { createCipherStream } = require("./src/cipher-stream.js")
const { createInputStream } = require("./src/input-stream.js")
const { createOutputStream } = require("./src/output-stream.js")

// Parameters:
const params = process.argv.slice(2)
const currentParameters = paramsHelper.parseParameters(params)

const paramsErrors = paramsHelper.validateParameters(currentParameters, paramsConfig)

if (paramsErrors.length) {
  console.error(paramsErrors.join(" "))
  process.exit(1)
}

const builtParams = paramsHelper.buildParameters(currentParameters, paramsConfig)

const config = builtParams["--config"]
const input = builtParams["--input"]
const output = builtParams["--output"]

// Streams:
const inputStream = createInputStream(input)

config
  .split("-")
  .reduce((stream, cipherMark) => stream.pipe(createCipherStream(cipherMark)), inputStream)
  .pipe(createOutputStream(output))

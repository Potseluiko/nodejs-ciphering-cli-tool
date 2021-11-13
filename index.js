import paramsHelper from "./src/paramsHelper.js"
import paramsConfig from "./src/paramsConfig.js"

import { createCipherStream } from "./src/cipher-stream.js"
import { createInputStream } from "./src/input-stream.js"
import { createOutputStream } from "./src/output-stream.js"

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

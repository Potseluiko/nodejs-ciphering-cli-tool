import paramsHelper from "./app/paramsHelper.js"
import paramsConfig from "./app/paramsConfig.js"

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

console.log("config = ", config)
console.log("input = ", input)
console.log("output = ", output)

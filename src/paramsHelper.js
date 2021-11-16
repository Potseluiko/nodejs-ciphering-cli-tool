const isFlag = (value) => !!value.match(/^-{1,2}/)

// All parameters are strings
const parseParameters = (params) => {
  const currentParams = []

  for (let index = 0; index < params.length; index++) {
    const name = params[index]
    let value = null

    if (isFlag(name) && index + 1 < params.length) {
      const nextValue = params[index + 1]

      if (!isFlag(nextValue)) {
        value = nextValue
        index += 1
      }
    }

    currentParams.push({ name, value })
  }

  return currentParams
}

const validateParameters = (params, paramsConfig) => {
  for (let index = 0; index < params.length; index += 1) {
    const { name, value } = params[index]

    // Validate: param is supported
    const findParam = paramsConfig.find((param) => param.name === name || param.alias === name)

    if (!findParam) {
      return [`Parameter "${name}" is not supported.`]
    }

    // Validate: param is unique
    const filteredParams = params.filter((param) => findParam.name === param.name || findParam.alias === param.name)

    if (filteredParams.length > 1) {
      const names = filteredParams.map(({ name }) => `"${name}"`)

      return [`Duplicated parameters: ${names.join(", ")}.`]
    }

    // Validate: value is correct
    const errors = findParam.validate(value, name)

    if (errors.length) {
      return errors
    }
  }

  // Validate: required
  const requiredParams = paramsConfig.filter((param) => param.required)
  const missedParams = requiredParams.filter(
    ({ name, alias }) => !params.find((param) => param.name === name || param.name === alias)
  )

  if (missedParams.length === 1) {
    return [`Parameter "${missedParams[0].name}" is required.`]
  }

  if (missedParams.length > 1) {
    const names = missedParams.map(({ name }) => `"${name}"`)

    return [`Parameters ${names.join(", ")} are required.`]
  }

  return []
}

const buildParameters = (params, paramsConfig) => {
  const builtParams = {}

  params.forEach(({ name, value }) => {
    const findParam = paramsConfig.find((param) => param.name === name || param.alias === name)

    builtParams[findParam.name] = value
  })

  return builtParams
}

export default { parseParameters, validateParameters, buildParameters }

export default [
  {
    name: "--config",
    alias: "-c",
    required: true,
    validate: (value, paramName) => {
      if (!value) {
        return [`Parameter "${paramName}" requires the value.`]
      }

      const ciphers = ["C0", "C1", "A", "R0", "R1"]

      const isValid = value.split("-").every((part) => ciphers.includes(part))

      if (!isValid) {
        return [`Parameter's "${paramName}" value is not valid. Example: ${ciphers.join("-")}.`]
      }

      return []
    }
  },
  {
    name: "--input",
    alias: "-i",
    required: false,
    validate: (value, paramName) => {
      if (!value) {
        return [`Parameter "${paramName}" requires the value.`]
      }

      return []
    }
  },
  {
    name: "--output",
    alias: "-o",
    required: false,
    validate: (value, paramName) => {
      if (!value) {
        return [`Parameter "${paramName}" requires the value.`]
      }

      return []
    }
  }
]

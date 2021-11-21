const util = require("util")
const exec = util.promisify(require("child_process").exec)

describe("Run app: success cases", () => {
  test("should read from file successfully: example 1", async () => {
    const { stdout } = await exec(`node index.js -c C1-C1-R0-A  -i ${__dirname}/tests/input-01.txt`)

    expect(stdout).toBe('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!')
  })

  test("should read from file successfully: example 2", async () => {
    const { stdout } = await exec(`node index.js -c C1-C0-A-R1-R0-A-R0-R0-C1-A  -i ${__dirname}/tests/input-01.txt`)

    expect(stdout).toBe('Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!')
  })

  test("should read from file successfully: example 3", async () => {
    const { stdout } = await exec(`node index.js -c A-A-A-R1-R0-R0-R0-C1-C1-A  -i ${__dirname}/tests/input-01.txt`)

    expect(stdout).toBe('Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!')
  })

  test("should read from file successfully: example 4", async () => {
    const { stdout } = await exec(`node index.js -c C1-R1-C0-C0-A-R0-R1-R1-A-C1  -i ${__dirname}/tests/input-01.txt`)

    expect(stdout).toBe('This is secret. Message about "_" symbol!')
  })
})

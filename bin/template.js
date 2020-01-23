const fs = require('fs')
const handlebars = require('handlebars')

function getCode(templatePath, data) {
  const source = fs.readFileSync(
    `${__dirname}/../templates/${templatePath}.ts`,
    'utf8'
  )
  return handlebars.compile(source)(data)
}

function write(writePath, templatePath, data) {
  const code = getCode(templatePath, data)
  writeFile(writePath, code)
}

function writeFile(path, code) {
  fs.writeFileSync(`${__dirname}/../ts/${path}.ts`, code, 'utf8')
}

const uintXClasses = []
const bytesXClasses = []

for (let length = 1; length <= 32; length++) {
  const bits = length * 8
  uintXClasses.push({
    length,
    bits,
    className: `Uint${bits}`,
  })
  bytesXClasses.push({
    length,
    className: `Bytes${length}`
  })
}

write('externals/uintXs', 'uintXs', {
  classes: uintXClasses
})

write('externals/bytesXs', 'bytesXs', {
  classes: bytesXClasses
})

write('index', 'index', {
  uintXClasses,
  bytesXClasses
})

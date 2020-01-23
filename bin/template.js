const fs = require('fs')
const handlebars = require('handlebars')

const uvaursiFroms = [
  {
    func: 'fromArray',
    arg: 'array',
    argClass: 'Array<number>'
  },
  {
    func: 'fromHexish',
    arg: 'hexish',
    argClass: 'string'
  }
]

const staticGens = [
  'genNull'
]

const uintXStaticFroms = [
  {
    func: 'fromNumber',
    arg: 'number',
    argClass: 'number'
  }
]

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
    uvaursiFroms,
    staticGens: staticGens
  })
  bytesXClasses.push({
    length,
    uvaursiFroms,
    className: `Bytes${length}`,
    staticGens: staticGens
  })
}

write('externals/Bytes', 'Bytes', {
  uvaursiFroms,
  staticGens: staticGens
})

write('externals/Address', 'Address', {
  uvaursiFroms,
  staticGens: staticGens
})

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





//
// const ops = ['add', 'sub', 'mul', 'divDn', 'divUp']
//
// function getUintOpCode(className, op) {
//   return `
//   ${op}(value: ${className}): ${className} {
//     return uintMath.${op}(exports.${className}, this, value);
//   }
// `
// }
//
// function getUintCode(length) {
//   const bits = length * 8
//   const className = `Uint${bits}`
//   const nameLc = `uint${bits}`
//
//   const uintXOpsCode = ops.map((op) => {
//     return getUintOpCode(className, op)
//   }).join('')
//
// return `
// export const ${className}: External = class ${className} extends Uint implements Uintish {
//   public static LENGTH: number = ${length};
//   constructor(uint8Array: Uint8Array) {
//     super(${className}.LENGTH, uint8Array)
//   }
//   ${uintXOpsCode}
// }
// `
// }
//
// function getUintsCode() {
//   const uintCodes = []
//   for (let length = 1; length <= 32; length ++) {
//     uintCodes.push(getUintCode(length))
//   }
//   return`import { Uint } from '../internals/Uint'
// import { External, Uintish } from '../interfaces'
// import * as from from '../utils/from'
// import * as uintMath from '../utils/uintMath'
// ${uintCodes.join('')}
// `
// }
//
// function writeFile(path, code) {
//   fs.writeFileSync(`${__dirname}/../ts/${path}.ts`, code, 'utf8')
// }
//
// function getMainCode() {
//   const uintClassNames = []
//   for (let length = 1; length <= 32; length ++) {
//     uintClassNames.push(`Uint${length * 8}`)
//   }
//
//   return `export { Bytes } from './externals/Bytes';
// export {
//   ${uintClassNames.join(',\n  ')}
// } from './externals/uints'
// `
// }
//
// function write() {
//   writeFile('externals/uints', getUintsCode())
//   writeFile('index', getMainCode())
// }
//
// write()

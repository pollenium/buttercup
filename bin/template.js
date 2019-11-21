const fs = require('fs')
const handlebars = require('handlebars')

const staticFroms = [
  {
    func: 'fromUint8Array',
    fromFunc: 'uint8Array',
    arg: 'uint8Array',
    argClass: 'Uint8Array'
  },
  {
    func: 'fromArray',
    fromFunc: 'array',
    arg: 'array',
    argClass: 'Array<number>'
  },
  {
    func: 'fromBuffer',
    fromFunc: 'buffer',
    arg: 'buffer',
    argClass: 'Buffer'
  },
  {
    func: 'fromHexish',
    fromFunc: 'hexish',
    arg: 'hexish',
    argClass: 'string'
  }
]

const uintXStaticFroms = [
  {
    func: 'fromBn',
    fromFunc: 'uintBn',
    arg: 'bn',
    argClass: 'Bn'
  },
  {
    func: 'fromNumber',
    fromFunc: 'uintNumber',
    arg: 'number',
    argClass: 'number'
  }
]

const uintXOps = ['add', 'sub', 'mul', 'divDn', 'divUp', 'divRd', 'mod']

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
  uintXClasses.push({
    length,
    bits: length * 8,
    ops: uintXOps,
    staticFroms: staticFroms.concat(uintXStaticFroms)
  })
  bytesXClasses.push({
    length,
    staticFroms: staticFroms
  })
}

write('externals/Bytes', 'Bytes', {
  staticFroms: staticFroms
})

write('externals/Address', 'Address', {
  staticFroms: staticFroms
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

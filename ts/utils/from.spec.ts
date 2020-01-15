import * as from from './from'
import {
  Bytes,
  Uint8,
  // Uint16,
  // Uint32,
  // Uint88,
  // Uint256
} from '../'
import Bn from 'bn.js'
import Bignumber from 'bignumber.js'

const externals = {
  uintish: [
    Uint8,
    // Uint16,
    // Uint32,
    // Uint88,
    // Uint256
  ],
  bytish: [
    Bytes
  ]
}

const fixtures = [
  {
    uint8Array: new Uint8Array(0),
    inputs: [
      { buffer: Buffer.from([]) },
      { array: [] },
      { hexish: '' },
      { hexish: '0x' },
      { uintNumber: 0 },
      { uintBn: new Bn(0) },
      { uintBignumber: new Bignumber(0) }
    ]
  },
  {
    uint8Array: new Uint8Array([0]),
    inputs: [
      { buffer: Buffer.from([0]) },
      { array: [0] },
      { hexish: '00' },
      { hexish: '0x00' }
    ]
  },
  {
    uint8Array: new Uint8Array([1]),
    inputs: [
      { buffer: Buffer.from([1]) },
      { array: [1] },
      { hexish: '01' },
      { hexish: '0x01' },
      { uintNumber: 1 },
      { uintBn: new Bn(1) },
      { uintBignumber: new Bignumber(1) }
    ]
  },
  {
    uint8Array: new Uint8Array([255]),
    inputs: [
      { buffer: Buffer.from([255]) },
      { array: [255] },
      { hexish: 'ff' },
      { hexish: '0xff' },
      { uintNumber: 255 },
      { uintBn: new Bn(255) },
      { uintBignumber: new Bignumber(255) }
    ]
  },
  {
    uint8Array: new Uint8Array([255, 1]),
    inputs: [
      { hexish: 'FF01' },
      { hexish: '0xff01' },
      { hexish: '0xFF01' },
      { hexish: '0xfF01' }
    ]
  },
  {
    uint8Array: new Uint8Array([1, 0]),
    inputs: [
      { buffer: Buffer.from([1, 0]) },
      { array: [1, 0] },
      { hexish: '0100' },
      { hexish: '0x0100' },
      { uintNumber: 256 },
      { uintBn: new Bn(256) },
      { uintBignumber: new Bignumber(256) }
    ]
  },
  {
    uint8Array: new Uint8Array([255, 255]),
    inputs: [
      { buffer: Buffer.from([255, 255]) },
      { array: [255, 255] },
      { hexish: 'ffff' },
      { hexish: 'fFFf' },
      { hexish: '0xffff' },
      { hexish: '0xFFFF' },
      { uintNumber: 256 * 256 - 1 },
      { uintBn: new Bn(256 * 256 - 1) },
      { uintBignumber: new Bignumber(256 * 256 - 1) }
    ]
  },
  {
    uint8Array: new Uint8Array([1, 0, 0]),
    inputs: [
      { buffer: Buffer.from([1, 0, 0]) },
      { array: [1, 0, 0] },
      { hexish: '010000' },
      { hexish: '0x010000' },
      { uintNumber: 256 * 256 },
      { uintBn: new Bn(256 * 256) },
      { uintBignumber: new Bignumber(256 * 256) }
    ]
  }
]

const lengthFixtures =

fixtures.forEach((fixture, index) => {
  const externalTypes = Object.keys(externals)
  externalTypes.forEach((externalType) => {
    externals[externalType].forEach((External) => {
      const uint8Array = fixture.uint8Array
      if (uint8Array.length > External.LENGTH) {
        return
      }
      const reference = from.uint8Array(External, fixture.uint8Array)
      fixture.inputs.forEach((input) => {
        const fromKey = Object.keys(input)[0]
        const fromFunc = from[fromKey]
        const fromValue = input[fromKey]
        test(`fixture ${External.name} #${index} ${fromKey}: '${fromValue}'`, () => {
          // console.log(`fixture ${External.name} #${index} ${fromKey}: '${fromValue}'`)
          // console.log('External', External)
          const fromInstance = fromFunc(External, fromValue)
          // console.log('fromInstance', fromInstance)
          expect(
            fromInstance.getUint8Array()
          ).toBeInstanceOf(
            Uint8Array
          )
          expect(
            fromInstance.getUint8Array()
          ).toStrictEqual(
            reference.getUint8Array()
          )
        })
      })
    })

  })
})

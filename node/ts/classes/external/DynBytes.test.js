// import { from, DynBytes } from '../../'
//
// const fixtures = [
//   {
//     uint8Array: new Uint8Array(0),
//     buffer: new Buffer,
//     array: [],
//     hex: '',
//     phex: '0x',
//   }
// ]
//
// fixtures.forEach((fixture, index) => {
//   test(`DynBytes fixture #${index}`, () => {
//     const dynBytes = new DynBytes(fixture.from(fixture.value))
//     expect(dynBytes.getArray()).toStrictEqual(fixture.array)
//     expect(dynBytes.getHex()).toBe(fixture.hex)
//   })
// })

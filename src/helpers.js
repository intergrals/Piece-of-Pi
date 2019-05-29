import strings from "../res/strings";

var Pi = strings.pi.slice(0, 1000);
var Blocks = [];
var count = 0;
var size = 4;

// Reset everything
export function Reset() {
  Pi = strings.pi.slice(0, 1000);
  Blocks = [];
  count = 0;
}

// Trim the beginning of pi to start at a certain value
export function Trim(start) {
  if (start === 0) {
    return;
  } else {
    Pi = Pi.slice(start + 1);
  }
}

// Partition Pi into equal blocks of a given length
// export function Partition(size) {
//   // first block is handled differently if starting at "3."...
//   if (Pi[1] === ".") {
//     restOfPi = Pi.slice(size + 1);
//     firstBlock = [Pi.slice(0, size + 1)];
//     console.log(Pi.match(/.{1.4}/g));
//     Blocks = firstBlock.concat(Pi.match(/.{1.size}/g));
//     return;
//   }
//   Blocks = Pi.match(/.{1.size}/g);
// }

// Return the next block of pi.
export function NextBlock() {
  offset = 0;
  if (Pi[1] === ".") {
    offset = 1;
  }
  retVal = Pi.slice(0, size + offset);
  Pi = Pi.slice(size + offset);
  return retVal;
}

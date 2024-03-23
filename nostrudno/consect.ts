const data = new Uint8Array(10);

// Create a new Uint8Array from an array.
const data2 = Uint8Array.from([1, 2, 3, 4, 5]);

// Create a new Uint8Array from a buffer.
const data3 = Uint8Array.from(Buffer.from('Hello'));

// Create a new Uint8Array from an array-like object.
const data4 = Uint8Array.from({ length: 5 });

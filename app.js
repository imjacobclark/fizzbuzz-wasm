async function loadWasm(path) {
  let response = await fetch(path + "?a=" + Math.random());
  let bytes = await response.arrayBuffer();
  let module = await WebAssembly.instantiate(bytes);
  return module.instance.exports;
}

loadWasm('./fizzbuzz.wasm').then(x => {
  console.log(3, x.fizzbuzz(3)); // -1 | fizz
  console.log(6, x.fizzbuzz(6)); // -1 | fizz
  console.log(5, x.fizzbuzz(5)); // -2 | buzz
  console.log(10, x.fizzbuzz(10)); // -2 | buzz
  console.log(15, x.fizzbuzz(15)); // -3 | fizzbuzz
})
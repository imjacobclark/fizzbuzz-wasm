async function loadWasm(path) {
  let response = await fetch(path + "?a=" + Math.random());
  let bytes = await response.arrayBuffer();
  let module = await WebAssembly.instantiate(bytes);
  return module.instance.exports;
}

const formatForDisplay = x => {
  return {  
      "-1": "Fizz",
      "-2": "Buzz",
      "-3": "FizzBuzz"
    }[String(x)]
}

loadWasm('./fizzbuzz.wasm').then(x => {
  document.writeln("3 is " + formatForDisplay(x.fizzbuzz(3)) + "<br/>");
  document.writeln("6 is " + formatForDisplay(x.fizzbuzz(6)) + "<br/>");
  document.writeln("5 is " + formatForDisplay(x.fizzbuzz(5)) + "<br/>"); 
  document.writeln("10 is " + formatForDisplay(x.fizzbuzz(10)) + "<br/>");
  document.writeln("15 is " + formatForDisplay(x.fizzbuzz(15)) + "<br/>");
})
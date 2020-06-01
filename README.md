# Fizz Buzz WASM

FizzBuzz implemented in WASM, for fun.

## OSX

```shell
$ brew install wabt
$ make
$ hexdump fizzbuzz.wasm
$ python -m SimpleHTTPServer
$ open localhost:8080/index.html
```

### Example output:

```text
app.js:9 3 -1
app.js:10 6 -1
app.js:11 5 -2
app.js:12 10 -2
app.js:13 15 -3`
```
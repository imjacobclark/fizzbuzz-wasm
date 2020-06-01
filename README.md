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
3 is Fizz
6 is Fizz
5 is Buzz
10 is Buzz
15 is FizzBuzz
```

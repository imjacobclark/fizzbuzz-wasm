PHONY: clean build

build:
	wat2wasm fizzbuzz.wat 

clean: 
	rm fizzbuzz.wasm || true
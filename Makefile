SRC = $(wildcard src/*.js)
LIB = $(SRC:src/%.js=lib/%.js)

lib: $(LIB)
lib/%.js: src/%.js
	mkdir -p $(@D)
	./node_modules/.bin/babel -L all $< -o $@

test:
	@./node_modules/.bin/mocha

coverage:
	@node --harmony ./node_modules/istanbul-harmony/lib/cli cover --harmony ./node_modules/.bin/_mocha test

include node_modules/make-lint/index.mk

.PHONY: test coverage

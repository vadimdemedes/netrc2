SRC=lib/*.js

default:
	@echo "Default task is not set"

include node_modules/make-lint/index.mk

test:
	@./node_modules/.bin/mocha

.PHONY: test


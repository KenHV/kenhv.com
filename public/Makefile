all: build minify

build:
	jekyll build

minify:
	@files=$$(find public/ -type f -name "*.html"); \
	for file in $$files; do \
		html-minifier-terser \
			--collapse-boolean-attributes \
			--collapse-whitespace \
			--conservative-collapse \
			--decode-entities \
			--keep-closing-slash \
			--minify-css \
			--minify-js \
			--preserve-line-breaks \
			--remove-comments \
			--remove-empty-attributes \
			--remove-redundant-attributes \
			--remove-script-type-attributes \
			--remove-style-link-type-attributes \
			--trim-custom-fragments \
			--use-short-doctype \
			-o $$file $$file; \
	done;

.PHONY: all build minify

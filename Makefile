serve:
	docker run --rm -it -v "$$PWD:/srv/jekyll" -v "$$PWD/vendor/bundle:/usr/local/bundle" -p 4000:4000 jekyll/jekyll:latest jekyll serve

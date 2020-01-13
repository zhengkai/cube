SHELL:=/bin/bash

NG := "./node_modules/@angular/cli/bin/ng"
DOMAIN := "cube-dev.9farm.com"
GITHUB := "https://zhengkai.github.io/cube/"

default:
	$(NG) serve --port 22007 --host 127.0.0.1 --public-host $(DOMAIN)

prod:
	$(NG) build --prod --base-href $(GITHUB)

publish:
	$(NG) build --prod --base-href $(GITHUB)
	./script/publish-github.sh amend

init:
	npm install
	npm audit fix

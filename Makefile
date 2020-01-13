SHELL:=/bin/bash

NG := "./node_modules/@angular/cli/bin/ng"
DOMAIN := "cube-dev.9farm.com"

default:
	$(NG) serve --port 22007 --host 127.0.0.1 --public-host $(DOMAIN)

test:
	echo $(NG) build --prod --base-href 'https://$(DOMAIN)/'

init:
	npm install
	npm audit fix

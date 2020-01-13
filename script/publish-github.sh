#!/bin/bash -e

DIR=`readlink -f "$0"` && DIR=`dirname "$DIR"` && cd "$DIR"
cd ../dist
DIR=`pwd`

echo $DIR

DIST="$DIR/Cube"
if [ ! -d "$DIST" ]; then
	>&2 echo no dist yet
	exit 1
fi

NUM=`ls "$DIST" | wc -l`
if [ "$NUM" -lt 10 ]; then
	>&2 echo $NUM files not enought
	exit 1
fi

GITHUB="$DIR/github"
if [ ! -d "$GITHUB" ]; then
	git clone -b 'gh-pages' git@github.com:zhengkai/cube.git github
fi

find "$GITHUB" -type f -name '*.js' -delete
find "$GITHUB" -type f -name '*.css' -delete
cp -R "$DIST/." "$GITHUB"

cd "$GITHUB"
STATUS=`git status --porcelain`
if [ -z "$STATUS" ]; then
	>&2 echo files no change
	exit
fi

git add .

if [ "$1" != 'amend' ]; then
	exit
fi

git commit --amend -m 'pages'
git push -f

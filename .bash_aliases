#!/usr/bin/env bash

alias slc='docker run -it -p 443:1337 -p 3000:3000 -p 4800:4800 --link mongodb:mongodb --link mailcatcher:mailcatcher -e "PORT=4800" -v `pwd`:/var/www jdr/strongloop slc'
alias npm='docker run -it -v `pwd`:/var/www jdr/strongloop npm'
alias nodeslc='docker run -it -p 443:3000 -p 4800:4800 --link mongodb:mongodb -v `pwd`:/var/www jdr/strongloop node'
alias lb-ng='docker run -it -p 443:3000 -p 4800:4800 --link mongodb:mongodb -v `pwd`:/var/www jdr/strongloop lb-ng'


docker run -d -p 443:3000 -p 4800:4800 --link mongodb:mongodb -v `/root/jdr/jdr-strongloop:/var/www jdr/strongloop node .

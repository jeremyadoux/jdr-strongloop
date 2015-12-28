#!/bin/bash
sudo apt-get update
sudo curl -sSL https://get.docker.com | sudo sh

sudo mkdir /home/vagrant/mongodb

sudo docker build -t jdr/strongloop /vagrant/Docker/strongloop
sudo docker build -t jdr/mailcatcher /vagrant/Docker/mailcatcher
sudo docker pull mongo

sudo docker rm $(docker ps -a -q)

sudo cp /vagrant/.bash_aliases ~/.bash_aliases
sudo chmod 777 ~/.bash_aliases

sudo docker run -d -p 27017:27017 -v /home/vagrant/mongodb:/data/db --name mongodb mongo
sudo docker run -d -p 1080:1080 --name mailcatcher jdr/mailcatcher


#docker run --name mysql -e MYSQL_ROOT_PASSWORD=R0@g25dnC -d mysql
#docker run -p 80:80 --name wordpress --link mysql:mysql -d wordpress

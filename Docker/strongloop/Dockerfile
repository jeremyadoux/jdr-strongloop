FROM node
MAINTAINER Adoux Jeremy

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get install -y supervisor

RUN npm install -g npm
RUN npm install -g express-generator bower mocha sinon should assert grunt-cli gulp

RUN npm install -g strongloop

ADD ./config/supervisord.conf /etc/supervisor/conf.d/supervisord-nodejs.conf
RUN mkdir -p /var/www
RUN mkdir -p /var/log/supervisor

RUN apt-get update
RUN apt-get install -y imagemagick graphicsmagick

EXPOSE 80
EXPOSE 1337
EXPOSE 3000
EXPOSE 4800

WORKDIR /var/www

CMD ["/usr/bin/supervisord", "-n"]

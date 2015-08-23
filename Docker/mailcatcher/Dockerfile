FROM ruby:latest
MAINTAINER Adoux Jeremy

RUN gem install mailcatcher -v 0.5.12

# smtp port
EXPOSE 1025

# webserver port
EXPOSE 1080

CMD ["mailcatcher", "-f", "--ip=0.0.0.0"]

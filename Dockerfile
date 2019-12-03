FROM ruby:2.6.1
RUN gem install rails
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install nodejs
RUN apt-get install npm
RUN npm i -g create-react-app
RUN npm install
WORKDIR /project

#RUN create-react-app client
#RUN rails new . --api

#Docker basic commands:

#Create a container and start the container. Docker run is a combination of docker create and docker start: docker run -v `pwd`:/project -it -p 3001:3001 -p 3000:3000 bookshelf bash

#Build: docker build -t bookshelf . //Every time I change my dockerfile.

#Come out of the container: exit
#Disconnect from container: ctrl + d
#start container: docker start <name of the container>
#List my containers: docker ps -a
#Get into my container: docker attach <name of the container>

#Start servers:

#Start rails server: rails server -p 3001 -b 0.0.0.0
#Start react server: cd client & npm start

#Start both serves with Foreman. Done with a rake task: rake start





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

#Start rails server: rails server -p 3001 -b 0.0.0.0
#Start react server: cd client & npm start

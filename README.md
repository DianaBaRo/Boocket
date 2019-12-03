# Boocket

App made for book lovers that want to keep track of the books they want to read.
Users can search for books in the Google Book database and add them to their personal wishlist. Users can create a new book and add it to their personal list and delete it when wished aswell. All books are persisted in the Boocket database, so users will have always their list with them!

* [Link to my blog post](http://carolinabadas.com/boocket/)

## Requirements

* Docker installed in your computer.

## Local development
* Fork and clone this repo
* Inside Boocket repository. Create and start your docker container:
<code>docker run -v `pwd`:/project -it -p 3001:3001 -p 3000:3000 bookshelf bash</code>

* Inside docker container. Bundle app, create and seed database:
<code>rake db:create && bundle install && rake db:migrate && rake db:seed</code>

* Install dependencies in the react app:
<code>cd client && npm install</code>

* Come back inside your app main folder:
<code>cd ..</code>

* Inside Boocket repository. Start servers:
<code>rake start</code>

Now you can go to http://localhost:3000/ to check the front end app and to http://localhost:3001/api/books to check the end point of the API. A proxy is setup in client/package.json to proxy our API calls to the Rails server.

There are some basic commands to use docker easily in the dockerfile. 

* For debugging with a binding.pry in a Rails controller you can start the servers independently like this:
    * Start rails server: rails server -p 3001 -b 0.0.0.0
    * Start react server: cd client & npm start

## Built with

* React to create the frontend 
* Redux to keep the state of the app in the same store
* react-bootstrap framework and CSS for styling
* react-router-dom to draw the routes
* Ruby on Rails to create the API and handle the data persistence. I used fetch withing my actions to GET and POST data from my API
* Docker
* Google Books API

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DianaBaRo/boocket. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## Author

* **Diana Badas** - *Initial work* - [DianaBaRo](https://github.com/DianaBaRo)

## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

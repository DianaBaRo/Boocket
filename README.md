# Boocket

App made for book lovers that want to keep track of the books they want to read.
Users can search for books in the Google Book database and add them to their personal wishlist. Users can create a new book and add it to their personal list and delete it when wished aswell. All books are persisted in the Boocket database, so users will have always their list with them!

## Local development
* Fork and clone this repo
* To get into docker image run docker attach <name of the container>, in this case the name of the container is adoring_brattain. I have included some basic commands to use docker easily in the dockerfile. 
* Inside the docker container, run rake db:create && bundle install && rake db:migrate && rake db:seed
* To start the servers: rake start. Then you can go to http://localhost:3000/ to check the front end app and to http://localhost:3001/api/books to check the end point of the API. A proxy is setup in client/package.json to proxy our API calls to the Rails server.

* For debugging with a binding.pry in a Rails controller: You can start the servers independently like this:
    * Start rails server: rails server -p 3001 -b 0.0.0.0
    * Start react server: cd client & npm start

## Built with

* React to create the frontend 
* Redux to keep the state of the app in the same store
* react-bootstrap framework and CSS for styling
* react-router-dom to draw the routes
* Ruby on Rails to create the API and handle the data persistence. I used fetch withing my actions to GET and POST data from my API
* Docker. I wrapped up the project as a docker image in the Dockerfile.
* Google Books API

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DianaBaRo/boocket. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## Author

* **Diana Badas** - *Initial work* - [DianaBaRo](https://github.com/DianaBaRo)

## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

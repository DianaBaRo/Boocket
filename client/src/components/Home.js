import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const Home = () => (

    <Container className="custom-container">
        <Col xs={6}>
            <h1>Welcome to Boocket </h1>
            
            <p> App made for book lovers that want to keep track of the books they want to read.</p>
            <p>
                You can search for books in the Google Book database and add them to your personal wishlist. If you can find anything you like you can create a new book and add it to your personal list and delete it when wished. All books are persisted in the Boocket database, so you will have always your list with you! </p>
            <p>
                This App was created as my last project with Flatiron School. I used ES6 syntax, <code>create-react-app</code> generator to initialize the app and all these technologies:
                <ul>
                    <li>React to create the frontend of the app, </li>
                    <li>Redux to keep the state of the app tidy in the same store</li>
                    <li>react-bootstrap framework and CSS for styling,</li>
                    <li>react-router-dom to draw the routes</li>
                    <li>Ruby on Rails to create the API and handle the data persistence. I used fetch withing my actions to GET and POST data from my API</li>
                    <li>Docker. I wrapped up the project as a docker image in the Dockerfile.</li>
                    <li>Google Books API</li>
                </ul>
            </p>
            <p>
                Considering web accessibility in my app
            </p>
            <p>
                <ul>
                    <li>WAI-ARIA ( Web Accessibility Initiative - Accessible Rich Internet Applications). I am using Aria HTML attributes.</li>
                    <li>Using as possible fragments <> </>to group together multiple elements and don't break the HTML semantic.</li>
                    <li>Create react app has the eslint-plugin-jsx-a11y plugin with a subset of rules activated that checks your code as you develop.</li>
                </ul>
            </p>
        </Col>  
    </Container>
);

export default Home;
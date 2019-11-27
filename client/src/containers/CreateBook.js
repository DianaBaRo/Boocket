import React, { PureComponent } from 'react';
import '../css/Form.css';
import { connect } from 'react-redux';
import { addBook } from '../actions/wishList';

class CreateBook extends PureComponent {

    state = {
        title: '',
        author: '',
        image: '',
        info: ''
    };

    //instead of writing handleChange() as a class method, I declare it as a class property and assign an arrow function to it.
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        //update the Redux store's state when the user hits the submit button
        this.props.addBook(this.state);
        this.setState({
            title: '',
            author: '',
            info: ''
        })
    }
    
    render () {
        
        return (
            
            <div className='Form'> 
                <h1>Create a book to add to your wishlist</h1>
                <form onSubmit={ this.handleSubmit }>
                    <p>
                        <label>Title</label>
                        <input type='text' name='title' onChange={ this.handleChange } value={this.state.title} />
                    </p>
                    <p>
                        <label>Author</label>
                        <input type='text' name='author' onChange={ this.handleChange } value={this.state.author} />
                    </p>
                    <p>
                        <label>More Info</label>
                        <textarea type='text' name='info' onChange={ this.handleChange } value={this.state.info} />
                    </p>
                    <input type='submit' value='Add to wishlist'/>
                </form>

            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return { addBook: book => dispatch(addBook(book)) }
};

export default connect(null, mapDispatchToProps)(CreateBook);
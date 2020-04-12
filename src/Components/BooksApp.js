import React, { Component } from 'react';
import Books from './Books/books'

class BooksApp extends Component {
    state = {
        books:[
            {
                id:1,
                name:'React',
                price: 70
            },
            {  id:2,
                name:'React Native',
                price: 40
            },
            {   id:3,
                name:'Redux',
                price: 60
            },
            {   id:4,
                name:'JavaScript',
                price: 20
            }
        ]
    }

    deleteHandler = id =>{
        let newBooks = this.state.books.filter(book => book.id != id);
        this.setState ({
            books:newBooks
        })
    }

    changeHandler = (name,id) =>{
        let newBooks = this.state.books.map(book =>{
            if (book.id === id) {
                return {
                    ...book,
                    name
                }
            }
            return book;
        })
        this.setState({
            books:newBooks
        })
        
        
    }

    render() { 
        return ( 
            <div className="container py-5">
                <Books 
                    books={this.state.books} 
                    deleteHandler={this.deleteHandler}
                    changeHandler = {this.changeHandler}
                /> 
            </div>
        );
    }
}
 
export default BooksApp;
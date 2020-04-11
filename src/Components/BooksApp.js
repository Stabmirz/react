import React, { Component } from 'react';
import Books from './Books/books'

class App extends Component {
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

    render() { 
        return ( 
            <div className="container py-5">
                <Books books={this.state.books} deleteHandler={this.deleteHandler}/> 
            </div>
        );
    }
}
 
export default App;
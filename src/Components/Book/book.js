import React, { Component } from 'react';


class Book extends Component {

    render() { 
        return ( 
            <li className="list-group-item d-flex">
                <p>
                    {this.props.book.name}
                </p>
                <span className="ml-auto">{this.props.book.price}</span>
                <div className="ml-4" onClick={()=>this.props.deleteHandler(this.props.book.id)} >
                    <span className="mx-4" style={{cursor:'pointer', color:'red'}} >
                        <i className="fa fa-trash"></i>
                    </span>
                </div>
            </li>
        );
    }
}
 
export default Book;
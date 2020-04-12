import React, { Component } from 'react';


class Book extends Component {

    state ={
        isEditable : false
    }

    keyPress=(e)=>{
        if(e.key==='Enter')
            this.setState({
                isEditable : false
            })
    }

    render() { 

        let {book} = this.props;

        let object = this.state.isEditable ? <input onChange={e =>this.props.changeHandler(e.target.value, book.id)} onKeyPress={e => this.keyPress(e)} type="text" value={book.name} placeholder="Enter Name"/> : book.name;

        return ( 
            <li className="list-group-item d-flex">
                <p>
                    {object}
                </p>
                <span className="ml-auto">{book.price}</span>

                <div className="ml-4" onClick={()=>this.setState({isEditable:true})} >
                    <span style={{cursor:'pointer', color:'blue'}} >
                        <i className="fa fa-edit"></i>
                    </span>
                </div>
                <div className="ml-4" onClick={()=>this.props.deleteHandler(book.id)} >
                    <span style={{cursor:'pointer', color:'red'}} >
                        <i className="fa fa-trash"></i>
                    </span>
                </div>
            </li>
        );
    }
}
 
export default Book;
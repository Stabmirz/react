import React, { Component } from 'react';
import Axios from 'axios';

const BASEURL = 'https://jsonplaceholder.typicode.com';

const initialState = { 
    title:'',
    body:'',
    userId:'234',
    isSubmitted: false,
    error:false
}

class Form extends Component {
    state = { 
        ...initialState
    }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler =(e) =>{
        e.preventDefault();
        console.log(this.state);
        Axios.post(`${BASEURL}/posts`, {
            title : this.state.title,
            body: this.state.body,
            userId: this.state.userId
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({
                isSubmitted:true,
                error:false
            })
            console.log(this.state);
        })
        .catch(error => {
            this.setState({
                isSubmitted:false,
                error:true
            })
            console.log(this.state);
        })
        
        this.formRef.reset();
        this.setState({
            ...initialState
        })  
    }

    render() { 
        return ( 
            <div className="container py-20" style={{marginTop:50}} >

                <h1 style={{marginBottom:'20px', color:" blue"}}>Submit Data To "https://jsonplaceholder.typicode.com" Using Axios</h1>
                
                <form onSubmit={this.submitHandler} ref={(ref) => this.formRef = ref} >

                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input onChange={this.changeHandler} type="text" className="form-control" id="title" name="title" placeholder="Enter the Title of your Post" value={this.state.title} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Body</label>
                        <div className="col-sm-10">
                            <textarea onChange={this.changeHandler} className="form-control" id="body" name="body" rows="4" placeholder="Please Enter the body of your Post" value={this.state.body} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <div className="col-sm-10">
                        </div>
                    </div>
                    {this.state.isSubmitted && <p style={{color:"green"}}> Form Submitted Successfully</p>}
                    {this.state.error && <p style={{color:"red"}}> Error Occured</p>}
                </form>
            </div>

        );
    }
}
 
export default Form;
import React, { Component } from 'react';



const initialState={
    name:"",
    email:"",
    password:"",
    bio:"",
    country:"",
    gender:"",
    skills:[]
    
}

class FormApp extends Component {
    constructor(){
        super();
        this.state={
            ...initialState
        }
    }
    
    

    
    changeHandler = (event) =>{
        if(event.target.type=="checkbox"){
            if(event.target.checked){
                this.setState({
                    ...this.state,
                    skills:this.state.skills.concat(event.target.value) // creating an array of skills with all checked 
                })
            }else{
                this.setState({
                    ...this.state,
                    skills:this.state.skills.filter(skill=> skill !== (event.target.value))
                })
            }
        }else{
            this.setState({
                [event.target.name] : event.target.value
            })
        }
    }
    
    submitHandler= (event) =>{

        event.preventDefault();
        // recent submited data
        console.log(this.state);

        //empty form input 
        this.rref.reset();
        this.setState({
            ...initialState
        })
    }

    render() { 
        return ( 
            <div className="container py-20" style={{marginTop:50}} >
                <form onSubmit={this.submitHandler} ref={(ref) => this.rref = ref} >

                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Full Name</label>
                        <div className="col-sm-10">
                            <input onChange={this.changeHandler} type="text" className="form-control" id="name" name="name" placeholder="Enter Your Fullname" value={this.state.name} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onChange={this.changeHandler} type="email" className="form-control" id="email" name="email" placeholder="Enter Valid Email" value={this.state.email}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                         <input onChange={this.changeHandler} type="password" className="form-control" id="password" name="password" placeholder="Enter your Password" value={this.state.password}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="bio" className="col-sm-2 col-form-label">Bio</label>
                        <div className="col-sm-10">
                            <textarea onChange={this.changeHandler} className="form-control" id="bio" name="bio" rows="3" placeholder="Tell Us About Your Self" value={this.state.bio} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
                        <div className="col-sm-10">
                            <select onChange={this.changeHandler} className="form-control" id="country" name="country">
                                <option>Select Your Country</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="USA">USA</option>
                                <option value="Germany">Germany</option>
                                <option value="Australia">Australia</option>
                                <option value="France">France</option>
                            </select>
                        </div>
                    </div>
                    <fieldset className="form-group">
                        <div className="row">
                        <legend className="col-sm-2 col-form-label">Gender</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input onChange={this.changeHandler} className="form-check-input" type="radio" name="gender" id="gridRadios1" value="Male"/>
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input onChange={this.changeHandler} className="form-check-input" type="radio" name="gender" id="gridRadios2" value="Female"/>
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input onChange={this.changeHandler} className="form-check-input" type="radio" name="gender" id="gridRadios3" value="Other" />
                                <label className="form-check-label" htmlFor="gridRadios3">
                                    Other
                                </label>
                            </div>
                        </div>
                        </div>
                    </fieldset>
                    <div className="form-group row">
                        <div className="col-sm-2">Skills</div>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input onChange={this.changeHandler} className="form-check-input" type="checkbox" id="gridCheck1" name="skills" value="JavaScript"/>
                                <label className="form-check-label" htmlFor="gridCheck1">
                                JavaScript
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input onChange={this.changeHandler} className="form-check-input" type="checkbox" id="gridCheck2" name="skills" value="React"/>
                                <label className="form-check-label" htmlFor="gridCheck1">
                                React
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input onChange={this.changeHandler} className="form-check-input" type="checkbox" id="gridCheck3" name="skills"  value="NodeJS"/>
                                <label className="form-check-label" htmlFor="gridCheck1">
                                NodeJS
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <div className="col-sm-10">
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default FormApp;
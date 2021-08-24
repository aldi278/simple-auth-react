import React from 'react';
import Axios from 'axios';

class Register extends React.Component{
    state = {
        username : "",
        email : "",
        password : "",
        confirmPassword : "",
    }

    inputHandler = (event) => {
        const value = event.target.value
        const name = event.target.name

        this.setState({[name]: value})
    }

    registerUser = () => {
        Axios.post("http://localhost:2000/user", {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password
        })
        .then((result) => {
            alert("data updated")
        })
        .catch((err) => {
            alert(err)
        })
    }
    render(){
        return(
            <div>
                <div className="row mt-5">
                    <div className="col-4 offset-4">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="font-weight-bold mb-3">Register</h1>
                                <input name="username" onChange={this.inputHandler} placeholder="Username" type="text" className="form-control my-2"/>
                                <input name="email" onChange={this.inputHandler} placeholder="Email" type="text" className="form-control my-2"/>
                                <input name="password" onChange={this.inputHandler} placeholder="Password" type="password" className="form-control my-2"/>
                                <input name="confirmPassword" onChange={this.inputHandler} placeholder="Confirm Password" type="password" className="form-control my-2"/>
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <button onClick={() => this.registerUser(this.state)} className="btn btn-primary mt-2">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
import React from 'react';
import Axios from 'axios';

class Login extends React.Component{
    state = {
        username : "",
        password : ""
    }

    inputHandler = (event) => {
        const value = event.target.value
        const name = event.target.name

        this.setState({[name]: value})
    }

    loginUser = ({username, password}) => {
        Axios.get("http://localhost:2000/user", { 
            params : {
                username
        }})
        .then((result) => {
            console.log(result.data)
            console.log(`${username}, ${password}`)
            if(result.data.length){
                if(password === result.data[0].password){
                    alert("Login sukses")
                }else{
                    alert("user & email salah")
                }
            }else{
                alert("user not found")
            }
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
                                <h1 className="font-weight-bold mb-3">Login</h1>
                                <input name="username" onChange={this.inputHandler} placeholder="username" type="text" className="form-control my-2"/>
                                <input name="password" onChange={this.inputHandler} placeholder="password" type="password" className="form-control my-2"/>
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <button onClick={() => this.loginUser(this.state)} className="btn btn-primary mt-2">
                                        Login
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

export default Login;
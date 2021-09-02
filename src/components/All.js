import React from 'react';
import Login from './Login';
import '../stylesheets/all.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import Dashbord from './Dashbord';
import Factur from './Factur';
import Devis from './Devis';
import Bl from './Bl';
import Avoire from './Avoire';
// https://managementstock.herokuapp.com/
// http://127.0.0.1:5000/


class All extends React.Component {
    state = {
        username : '',
        pass : '',
        user: '',
        password: ''
    }
    handleChange1 = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleChange2 = (e) => {
        this.setState({
            pass: e.target.value
        })
    }
    handleSubmit = (e, username=this.state.username) => {

        e.preventDefault();

        fetch("http://managementstock.herokuapp.com/login",{

            method: "POST",

            body: JSON.stringify({ adname: username }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                user: data.admin_username,

                password: data.admin_pass

            })

            if ((this.state.pass === this.state.password) && (this.state.user === this.state.username)) {

                window.location.href = '/dashbord';

            } else {

                alert("Your pass/username isn't correct");

            }

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }
    render(){
        return ( 
        <div className='div1'>
            
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Login handleSubmit={this.handleSubmit} handleChange1={this.handleChange1} handleChange2={this.handleChange2} />
                    </Route>
                    <Route path="/dashbord">
                        <Dashbord />
                    </Route>
                    <Route path="/factur">
                        <Factur />
                    </Route>
                    <Route path="/devis">
                        <Devis />
                    </Route>
                    <Route path="/bl">
                        <Bl />
                    </Route>
                    <Route path="/avoire">
                        <Avoire />
                    </Route>
                </Switch>
            </Router>
        </div>
        );
    }
}

export default All;
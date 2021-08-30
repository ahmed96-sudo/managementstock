import React , { Component } from 'react';
import '../../src/stylesheets/Login.css';
import '../../src/fontawesome-free-5.15.3-web/css/fontawesome.css';
import '../../src/fontawesome-free-5.15.3-web/css/brands.css';
import '../../src/fontawesome-free-5.15.3-web/css/solid.css';

class Login extends Component {
    render(){
        return (<div className='container'>
            <div className='form_All'>
                <div className='class_form'>
                    <div className='clas_form'>
                        <header>
                            <span id='stspan' className='fas fa-atom'></span>
                            <p>KingStock</p>
                        </header>
                        <form method='POST' onSubmit={this.props.handleSubmit}>
                            <div>
                                <input type="text" className='inputs' id='inputtext' required onChange={this.props.handleChange1}/*  ref={input => this.username1 = input} */ placeholder='UserName' />
                                <input type="password" className='inputs' id='inputpassword' required onChange={this.props.handleChange2}/*  ref={input => this.password1 = input} */ placeholder='Password' />
                            </div>
                            <div className='subm'>
                                <input type="submit" value="Login" id='submit_login' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Login;
import React, { useRef, useState, useEffect } from 'react';
import { logInSchema } from '../../Validations/FormsValidation';
import { useNavigate  } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import logo from '../../images/logo.png';
import SignInpic from '../../images/SignInP.png';
import { Modal, Button } from "react-bootstrap";
import { yupResolver } from '@hookform/resolvers/yup';
import md5 from 'md5';
const SignIn = () => {
    const navigate = useNavigate(); /* define hook to navigate to other pages */
    const [msgModal, setMsgModal] = useState('');/*define state for the message modal box */

    const handleClickDashboard = () => {
        navigate('/Forgot');
    };
    /* function that navigates to the forgot password page */
    const handleClickForgotPassword = () => {
        navigate('/Forgot');
    };

    /* function that navigates to the sign up page */
    const handleClickSignUp = () => {
        navigate('/Register');
    };

    /* define useForm for the logIn form */
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });

    /* function that submit the form */
    const submitForm = async (data, e) => {
console.log(data);
        console.log("requesting");
        /* define the logIn request message */
        const requestMsg = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    title: 'LogIn',
                    email: data.email,
                    password: md5(data.password),
                })
        };

    console.log("requesting");


    const response = await fetch('/logIn', requestMsg);/* send the request to the server */
console.log(response);
    if (!response.ok) {/* if the response is not ok, alert the user */
        setMsgModal('Invalid Login Details');
        return;
    }
    let responseData = await response.json(); /* retrieve the response data */
    responseData = JSON.parse(responseData.body); /* parse the response data */
    console.log(responseData)
    handleClickDashboard()
        
    };
    return (
        <div className="container-fluid">
           
                <div className="col">

                    <div className="row">
                        <div className="path-con">
                            <h5 className='pa'>Home --{'>'} Sign In</h5>
                            <hr></hr>
                        </div>
                    </div>

                    <div className="row">
                        <img src={logo} className="logo"/>
                    </div>

                    <div className="row-lg-2">
                    <br /><br />
                        <img src={SignInpic} className="picture-SignIn"/>
                    </div>
                        <div className="row-lg-7">
                            
                                <br/>
                                <br/>
                                <center>
                                <div className='cont' >
                                    <div className="row">
                                        <center>
                                            <div className="circle">
                                                <center>
                                                    <h1 className='questionMark'>?</h1>
                                                </center>
                                            </div>
                                        </center>
                                        <br/>
                                    </div>
                                        <div className="row" id='form-con'>
                                        <form onSubmit={handleSubmit(submitForm)}>
                                            <div className="text-con">
                                                <center><input id="email" type="email" className="form-control form-control-user"
                                                    name="email" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..." {...register('email')}/>**</center>
                                                {errors.email ? <p className='error-msg'>{errors.email?.message}</p> : <br/>} {/* display error message if the email is not valid */}
                                                <center><input id="password" type="password" className="form-control form-control-user"
                                                    name="password" placeholder="Password" {...register('password')}/>
                                                {errors.password ? <p className='error-msg'>{errors.password?.message}</p> : <br/>} {/* display error message if the password is not valid */}**</center>
                                                
                                            </div>
                                            <div className="forgot">
                                                <b><a className="small cursor-pointer" onClick={handleClickForgotPassword}>Forgot your password?</a></b>
                                            </div>
                                            <div className="submit-btn">
                                                <center><input type="submit" className='doneBtn' value='Done'/> </center>
                                            </div>
                                            </form>
                                            <div className="row" id='new-account'>
                                            <b> <span>Don't Have An Account?</span><br/><a className="small cursor-pointer" onClick={handleClickSignUp}>Click me!</a></b>
                                            </div>
                                        </div>
                                        
                            </div>
                            </center>
                        
                    
                    <div className="row" >
                    
                    <center>
                            <div className="down-buttons">
                                <hr/>
                                <button className='home' onClick={() => navigate('../..//')}>Home</button>
                                <button className='sign-in' disabled >Sign In</button>
                                <button className='about-us' onClick={() => navigate('../../about')}>About Us</button>
                            </div>
                        </center>
                    </div>

                </div></div> 
        </div>/*container-fluid*/
    );
};
export default SignIn;
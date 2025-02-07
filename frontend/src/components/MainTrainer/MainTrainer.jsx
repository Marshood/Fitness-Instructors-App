import React, { useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/sb-admin-2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainTrainer.css';
import logo from '../../images/logo.png'
import HomeIc from '../../images/home1.png'
import info1 from '../../images/info1.png'
import pList from '../../images/pList.png'
import feedback from '../../images/feedBack.png'
import profile from '../../images/profile.png'
import NewW2 from '../../images/NewW2.png'
import changAccount2 from '../../images/changeAcc2.png'
import MyClasses from '../../images/MyClasses.png'
import MyTrianee from '../../images/MyTrainee.png'
import MyLibrary from '../../images/uplode.png'
const MainTrainer = () =>  {
    const navigate = useNavigate();
  
    return (
        <footer Style="background-color:white;">
        <div className="container-fluid">
            <div className="header">
            <div className="navbar">
                    <div className="navbar-container">
            <div id='Main Trainer' className='backgroundcol'>
            <footer>
                             <center>
                <div className="row">
                
                             <div className="buttons">
                              
                                <button  onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button  onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button  onClick={() => navigate('/MyClassesTrainer')}><img src={pList} className="pListBbox"/></button>
                                <button  onClick={() => navigate('/MyMessageTrainer')}><img src={feedback} className="feedbackBbox"/></button>
                                <button  onClick={() => navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
                               
                              </div>
                              
                              </div>
                              <br/>
                              <br/>
                              <br/>
                              
                                
                                   <div className="navbar">
                                      <div className="navbar-container">
                                        <center>
                                         <img src={logo} className="logo2"/>
                                         <br/>
                              <br/>
                                         </center>
                              </div>
                              </div>
                              
                              
                              
                             
                               
                        
                        

                            
                         <div className="row">
                           <div className="buttons">
                           
                              <button  onClick={() => navigate('/CreateNewClass')}> <img src={NewW2} className="NewWBorderBox"/></button>
                              <button onClick={() => navigate('/MainTrainee')}><img src={changAccount2} className="SwitchBorderBox"/></button>
                              
                              
                              </div>
                              </div>
                        <div className="row">
                           <div className="buttons">
                              <button  onClick={() => navigate('/MyClassesTrainer')}><img src={MyClasses} className="MyClassesBorderBox"/></button>
                              <button onClick={() => navigate('/MyTrainee')}><img src={MyTrianee} className="infoBorderBox"/></button>
                              
                              </div>
                              </div>
                              <div className="row">
                           <div className="buttons">
                              <button  onClick={() => navigate('/TrainersLib')}><img src={MyLibrary} className="MyClassesBorderBox"/></button>
                              </div>
                              </div>
                              </center>
                          </footer>
                    </div>
                    
                </div>
                
            </div>
            </div>
        </div>
        
        
        </footer>
    );
};




export default MainTrainer;
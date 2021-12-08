import React from 'react';
import './App.css';
import Profile from './profil/profil.js';
import HandleName from './profil/handlename';
import PropTypes  from "prop-types";


function App() {
  const alertMyInput = fullname => alert(fullname);
  return (
    <div style={{color: 'beige', textAlign:'center', marginTop:'80px'}} className="App">
      <Profile  fullname="" bio="" profession="" />
      <Profile>
        <img src="/Salma.jpg" alt= "Salma" width="320px" height="320px"/>
      </Profile>
      <HandleName  fullname="Salma Omar" alertMyInput={alertMyInput} />

    </div>
  )
}

App.propTypes = {
  fullname: PropTypes.string,
  bio: PropTypes.string,
  profession:PropTypes.string,
  alertMyInput:PropTypes.string,
};


export default App;

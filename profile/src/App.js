import React from 'react';
import  Profile from './Profile/Profile'
import photo from './img/profile.jpg'
import './App.css';

function App (){

    const handleName = (name) => {
      alert(`Hello, ${name}!`);
    };
  const FullName ="bouallagui sabri"
  const Bio ="web devolper"
  const Profession = "student"
  return(
    <header className="App-header">
    <div style={{color: 'red', textAlign: 'center'}}>
    <Profile
    FullName={FullName}
    Bio={Bio}
    Profession={Profession}
    handleName={handleName}
  >
    {photo}
  </Profile>
  </div> 
  </header>
 
  )
}



export default App;


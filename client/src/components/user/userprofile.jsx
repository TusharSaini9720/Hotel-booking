import React from 'react'
import Leftpart from './leftpart'
import Edituserprofile from './edituserprofile'
import Footer from '../footer/footer'
const  Userprofile = (props) => {
  return (
    <>
    <div className='main1' >
  <div className='main2' >
    <Leftpart signedIn={props.signedIn} sethistory={props.sethistory} token={props.token}/>
   
  <Edituserprofile user={props.user} setuser={props.setuser}/>
    
  </div>
  </div>
  <Footer/>
    </>
  )
}

export default Userprofile;

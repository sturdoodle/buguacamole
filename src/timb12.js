import { Button } from 'bootstrap'
import React from 'react'
import Bodycontent from './cmpnt/Body/Bodycontent'
import Footer from './cmpnt/Footer'
import Header from './cmpnt/Header'


const timb12 = props => {
    // console.log(props)
    const pt1name=props.location.pathname;
    const filepathname=`https://shtrlnk.ml${pt1name}`;
    // console.log(filepathname)
   
  return (
    <>
    sadsad
    <Header/>
    {/* <div>timb12</div>
    <div>{props.location.pathname}</div>
    <div>{props.history.location.pathname}</div>
    <div>{props.match.url}</div> */}
    {/* <Bodycontent fileprops={filepathname}/> */}
   
    <Footer/>
    
    </>
  )
}



export default timb12
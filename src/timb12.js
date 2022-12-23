import React from 'react'

const timb12 = props => {
    if (props.match.params.pageid.includes("1340-")) {
      let filepathname="";
      filepathname = props.match.params.pageid.replace("1340-", "");
      // console.log(filepathname)
      filepathname = `https://drive.google.com/file/d/${filepathname}/view?usp=drivesdk`;
      // console.log(filepathname)
      window.location.replace(filepathname)
    }
    else{
      window.location.replace('https://qpkendra.com/')
    }
  return (
    <>
    Redirecting to qpkendra.com
    </>
  )
}



export default timb12
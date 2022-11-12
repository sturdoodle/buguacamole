// import React from 'react';
import React, { Component } from "react";
import Bodycontent from "./cmpnt/Body/Bodycontent";
import Footer from "./cmpnt/Footer";
import Header from "./cmpnt/Header";

export default class tbzone extends Component {
  render() {
    // const { router, params, location, routes } = this.props;
    const {location} = this.props;
    var filepathname = "";
    if(location.pathname.includes("1210-0")){
      filepathname=location.pathname.replace("1210-0","")
      filepathname=filepathname.replace("/","")
      // https://drive.google.com/file/d/1_8b1Fxwx3LT0uAtSdiAB3JKf8NYfbPhX/view
      // https://drive.google.com/uc?id=1_8b1Fxwx3LT0uAtSdiAB3JKf8NYfbPhX&confirm=t
      // filepathname=`https://drive.google.com/uc?id=${filepathname}/view`
      filepathname=`https://drive.google.com/file/d/${filepathname}/view`
    }
    else{
      // https://drive.google.com/uc?export=download&id=1_8b1Fxwx3LT0uAtSdiAB3JKf8NYfbPhX
      filepathname=location.pathname.replace("/","")
      filepathname=`https://drive.google.com/uc?export=download&id=${filepathname}`;

    }
    return (
      <>
        <Header />
        <Bodycontent fileprops={filepathname} />
        <Footer />
      </>
    );
  }
}

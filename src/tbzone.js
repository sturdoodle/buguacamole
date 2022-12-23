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
    if (location.pathname.includes("1210-0")) {
      filepathname = location.pathname.replace("1210-0", "");
      filepathname = filepathname.replace("/", "");
      // https://drive.google.com/file/d/1_8b1Fxwx3LT0uAtSdiAB3JKf8NYfbPhX/view
      // https://drive.google.com/uc?id=1_8b1Fxwx3LT0uAtSdiAB3JKf8NYfbPhX&confirm=t
      // filepathname=`https://drive.google.com/uc?id=${filepathname}/view`
      filepathname = `https://drive.google.com/file/d/${filepathname}/view`;
    }  else {
      // https://drive.google.com/file/d/0B_jN37U4T16zRmtUNTZtb2dtbXc/view?usp=share_link&resourcekey=0-0LSkwJ7S92L26o2qghVY4g
      // https://drive.google.com/file/d/0B_jN37U4T16zdE5FQnJZdm5DQ28/view?usp=share_link&resourcekey=0-9cTGflJ3a6IpOPvf4DLOZA
      // https://drive.google.com/uc?export=download&id=0B_jN37U4T16zdE5FQnJZdm5DQ28&resourcekey=0-9cTGflJ3a6IpOPvf4DLOZA
      filepathname = location.pathname.replace("/", "");
      filepathname = `https://drive.google.com/uc?export=download&id=${filepathname}`;
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

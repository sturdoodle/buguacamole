// import React from 'react';
import React, { Component } from "react";
import Bodycontent from "./cmpnt/Body/Bodycontent";
import Footer from "./cmpnt/Footer";
import Header from "./cmpnt/Header";

export default class tbzone extends Component {
  render() {
    // const { router, params, location, routes } = this.props;
    const {location} = this.props;

    const pt1name = location.pathname;
    const filepathname = `https://shtrlnk.ml${pt1name}`;
    // console.log(filepathname)
    return (
      <>
        <Header />
        <Bodycontent fileprops={filepathname} />
        <Footer />
      </>
    );
  }
}

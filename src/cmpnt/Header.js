import React from 'react'
import "./cmpt.css";


export default function Header() {
  return (
    <> 
     <header className="navbar navbar-light bg-light shadow-lg bg-body rounded sticky-top " id="header-1">
        <div className="container-fluid">
        <a className="navbar-brand logo" title="Quiz-QPkendra" href="/">
            {/* <img src="/assets/book-svg.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>  MCQ-QPKendra</a> */}
            <p alt="" width="30" height="24" className="d-inline-block align-text-top"/>  File | QPKendra</a>

        <nav className="nav nav-underline" aria-label="Secondary navigation">
            <a className="nav-link" aria-current="page" title="Home" href="/"><i className="fa fa-home  fa-1x"></i>&nbsp;</a> 
            <a className="nav-link" aria-current="page" title="Sitemap" href="https://qpkendra.com/sitemap.html"><i className="fa fa-sitemap  fa-1x"></i>&nbsp;</a>
            <a className="nav-link" aria-current="page" title="Contact US" href="/contact-us.html"><i className="fa fa-comments-o fa-1x"></i>&nbsp;</a>
        </nav>

        </div>
        {/* <div id="progress-bar"></div> */}
    </header>
    </>
  )
}

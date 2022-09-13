import React from "react";
import Gads from "../Gads";
import ButtonTimer from "./ButtonTimer";
import MainBodyContent from "./MainBodyContent";

export default function Bodycontent(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row row1">
          <section
            className="main-section question-side-component col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9 "
            id="section-1-1"
          >
            <div className="container-fluid p-3 bg-body rounded shadow-lg d-grid gap-2">
              {/* component Outer container */}

              <div className="p-3 question-container1 shadow-sw border m-2 ">
                <div className="container ">
                  <ButtonTimer fileprops={props.fileprops} />
                </div>

                <MainBodyContent />
              </div>
            </div>
          </section>
          <section
            className="main-section col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 sidebar rounded text-muted"
            id="section-2-1"
          >
            {/* adsense */}
            <Gads />
          </section>
        </div>
      </div>
    </>
  );
}

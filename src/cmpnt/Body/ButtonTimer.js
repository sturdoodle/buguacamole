import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Gads from "../Gads";
import "./Buttonstyle.css";

export default function ButtonTimer(props) {
  var [btndisablevalue, setbtndisablevalue] = useState("true");
  var [infovalue, setinfovalue] = useState("");

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      setbtndisablevalue("false");
      setinfovalue("false");
      return (
        <div className="timer">
          <div className="value">{remainingTime}</div>
          <div className="text">File Ready</div>
        </div>
      );
    }

    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  // console.log(props);

  const openInNewTab = (url) => {
    window.open(url, "_self", "noopener,noreferrer");
  };

  const btnenabled = () => {
    // console.log(btndisablevalue)
    if (btndisablevalue === "true") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div className="pt-3 mt-3 ">
        <Gads />
        <div className="timer-wrapper mt-2 mb-3">
          <CountdownCircleTimer
            isPlaying
            duration={13}
            colors={[
              "#004777",
              "#006577",
              "#F7B801",
              "#A30000",
              "#a30029",
              "#A30000",
            ]}
            colorsTime={[13, 10, 6, 4, 2, 0]}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        {infovalue === "false" ? (
          ""
        ) : (
          <p className="pb-3 mb-3 info alert alert-primary">
            Download Button will appear
          </p>
        )}
      </div>
      <Gads />

      {infovalue === "false" ? (
        <div className="p-3">
          <p className="text-center pt-2">
            <button
              type="button"
              className=" btn btn-success btn-lg btn-block"
              onClick={() => openInNewTab(props.fileprops)}
              disabled={btnenabled()}
            >
              Download File
            </button>
            <br />
          </p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

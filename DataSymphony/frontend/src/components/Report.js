import "../css/Report.css";
import ReactPlayer from "react-player";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

import Graph from "./Graph";


const MAIN_URL ='https://mtx-data-symphony.herokuapp.com'

function Report({ reportID }) {
  const [isProcessed, setIsProcessed] = useState(false);
  const [reportVideo, SetReportVideo] = useState("");
  const [reportGraph, setReportGraph] = useState("");
  const [timeStamps, SetTimeStamps] = useState("");
  const [timeGraph, SetTimeGraph] = useState("");

  const [btnList, setBtnList] = useState(null);

  const handleSeekBtnClick = (ts) => {
    const time = JSON.stringify(ts).split('"')[3];
    const ss = parseFloat(time.split(":")[1]);
    const mm = parseFloat(time.split(":")[0]);
    childRef.current.seekTo(mm * 60 + ss);
  };

  useEffect(() => {
    if (reportID !== "") {
      axios
        .get(`/main/report/${reportID}`)
        .then((response) => {
          setIsProcessed(true);
          SetReportVideo(`${response.data.video}`);
          SetTimeStamps(response.data.timestamps);
          SetTimeGraph(response.data.graph);

          const makeBtnStyle = (l, index) => {
            var btnSty = { backgroundColor: "#04AA6D" };

            if (parseFloat(response.data.graph[l]) < 0.5) {
              btnSty["backgroundColor"] = "red";
            }

            return (
              <button
                style={btnSty}
                key={index}
                onClick={() => handleSeekBtnClick({ l })}
              >
                {l}
              </button>
            );
          };

          setBtnList(
            Object.keys(response.data.timestamps).map((l, index) => {
              return makeBtnStyle(l, index);
            })
          );

          const makeReportGraph = () => {
            return <Graph dp={response.data.graph} />;
          };

          setReportGraph(makeReportGraph);
        })
        .catch((error) => {
          console.log(error);
          setIsProcessed(false);
        });
    }
  }, [reportID]);

  const childRef = useRef(null);

  return (
    <div className="reportContainer">
      <div className="reportItems" id="reportVideoPlayer">
        {{ isProcessed } ? (
          <ReactPlayer
            ref={childRef}
            width="80%"
            height="60%"
            url={reportVideo}
            controls={true}
          />
        ) : (
          <div>Processing</div>
        )}
      </div>
      <div className="reportItems" id="reportVideoNav">
        Video navigation with all the timestamps
        <div className="btn-group">{btnList}</div>
      </div>
      <div className="reportItems" id="reportGraph">
        {reportGraph}
      </div>
    </div>
  );
}

export default Report;

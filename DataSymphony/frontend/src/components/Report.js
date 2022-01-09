import "../css/Report.css";
import ReactPlayer from "react-player";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

function Report({ reportID }) {
  const [isProcessed, setIsProcessed] = useState(false);
  const [reportVideo, SetReportVideo] = useState("");
  const [timeStamps, SetTimeStamps] = useState("");
  const [timeGraph, SetTimeGraph] = useState("");

  const [btnList, setBtnList] = useState(null);

  const handleSeekBtnClick = (ts) => {
    const time = JSON.stringify(ts).split('"')[3];
    const ss = parseFloat(time.split(":")[1]);
    const mm = parseFloat(time.split(":")[0]);
    childRef.current.seekTo(mm*60+ss);
  };

  useEffect(() => {
    console.log(reportID);
    axios
      .get(`http://127.0.0.1:8000/main/report/${reportID}`)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.timestamps);
        setIsProcessed(true);
        SetReportVideo(`http://127.0.0.1:8000${response.data.video}`);
        SetTimeStamps(response.data.timestamps);
        SetTimeGraph(response.data.graph);
        console.log(response.data.graph);
        console.log(timeGraph);
        console.log(timeStamps);

        setBtnList(
          Object.keys(response.data.timestamps).map((l, index) => {
            return (<button style = {{"background-color":"red"}} key={index} onClick={() => handleSeekBtnClick({ l })}>
              {l}
            </button>)
          })
        );
      })
      .catch((error) => {
        console.log(error);
        setIsProcessed(false);
      });
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
        <div class="btn-group">{btnList}</div>
      </div>
      <div className="reportItems" id="reportGraph">
        This is the Graph for the report
      </div>
    </div>
  );
}

export default Report;

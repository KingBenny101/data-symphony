import { useState } from "react";
import "../css/Base.css";
import UploadFiles from "./FileUploader";
import Report from "./Report";

function Base() {
  const [isReport, setIsReport] = useState(false);
  const [reportID,setReportID] = useState("");


  const handleGenerateReport = (id)=>{
    setIsReport(true);
    setReportID(id);
  }



  return (
    <div className="baseContainer">
      {isReport ? (
        <Report reportID = {reportID}/>
      ) : (
        <div className="base">
          <UploadFiles handle = {handleGenerateReport}/>
        </div>
      )}
    </div>
  );
}

export default Base;

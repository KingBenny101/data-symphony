import "../css/Base.css";
import UploadFiles from "./FileUploader";

function Base (){
    return (
        <div className="baseContainer">
            <div className="base">
                {/* <div className="uploadText">
                    <span>Upload Video</span>
                </div>
                <div className="uploadButton">

                </div> */}
                {/* <div className="uploadDragDrop">
                    <DragDrop/>
                </div> */}
                <UploadFiles/>

                
            </div>
        </div>
    )
}


export default Base;
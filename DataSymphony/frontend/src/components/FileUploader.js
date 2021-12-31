import "../css/FileUploader.css";
import React, { Component, useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import UploadService from "../services/FileUploader.service";
import axios from "axios";

function UploadFiles() {
  const [entries, setEntries] = useState([
    {
      id: "adsfdsfdsaf",
      video: "fadsfsdfsdf",
      date_uploaded: "adsfdfsdf",
    },
  ]);



  const [uploadBox,setUploadBox] = useState('<p>Drop the files here ...</p>');

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/main/list/")
      .then((response) => {
        setEntries(response.data);
        console.log(entries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [entries[0].id]);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files

    console.log(acceptedFiles);


    var formData = new FormData();
    formData.append('video',acceptedFiles[0]);

    console.log(formData);
    axios.post('http://127.0.0.1:8000/main/create/', formData).then((response)=>{
      console.log(response.data);
    }

    ).catch((error)=>{
      console.log(error);
    })



  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div>
      {
        //  {entries.length
        //     ? entries.map((post) => <div key={post.id}>{post.video}</div>)
        //     : null}
      }

      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? {uploadBox} : <p>Upload</p>}
      </div>
    </div>
  );
}

export default UploadFiles;

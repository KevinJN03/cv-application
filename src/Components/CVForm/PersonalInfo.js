import React, { Component, useState } from "react";
import "./cvform.css";
import PreviewPersonal from "../CVPreview/previewPersonal";
function PersonalInfo({onFirstName, onLastName, onAddress, onEmail, onDescription, onTitle, onPhoneNumber}) {
  //const [firstName, setFirstName] = useState("");
  
  return (
    <>
      <div id="personal-info">
        <input type="text" placeholder="First Name" onChange={onFirstName}/>
        <input
          type="text"
          placeholder="Last Name"
          onChange={onLastName}
        />
        <input type="text" placeholder="Title" onChange={onTitle}/>
        <input type="text" placeholder="Address" onChange={onAddress}/>
        <input type="text" placeholder="Phone Number" onChange={onPhoneNumber}/>
        <input type="text" placeholder="Email" onChange={onEmail}/>
        <input type="text" placeholder="Description" onChange={onDescription}/>
      </div>
    </>
  );
}

export default PersonalInfo;

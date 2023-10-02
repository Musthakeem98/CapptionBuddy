import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {buildStyles} from "react-circular-progressbar";

function Progress() {
  const percentage = 66; // Move the variable declaration here

  return (
    <div style={{width:"320px",height:"320px",border: '1px solid #ccc', borderRadius: '5px', padding: '10px',fontFamily:"Inter",boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px',marginTop:"50px"}}>
      {/* Use the variable inside the CircularProgressbar */}
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#FFBA85",
          textColor: "#fff",
          pathColor: "#ff6d00",
          trailColor: "#fff",
        
        })}
      />
    </div>
  );
}

export default Progress;

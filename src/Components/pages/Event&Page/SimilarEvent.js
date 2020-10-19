import React from "react";
import "./SimilarEvent.css";




export default function SimilarEvent(props) {
  const { similar } = props;
 
  return (
    <div>
      <div className="similar-event-container">
        <div className="container-sub">
          <div className="similar-date">{similar.date}</div>
          <div className="similar-topic">{similar.topic}</div>
          <div className="similar-institute">{similar.institute}</div>
          <div className="simillar.type">
            <i class="fas fa-globe-americas"></i>&nbsp;
            {similar.type}
          </div>
          <div className="container-for-attendees-attendbtn">
            <span className="number-of-attend">
              Attendees: {similar.attendees}
            </span>
            <div>
              <button className="attend-btn">Attend</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

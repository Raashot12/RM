import React from "react";
import event from "./Assets/event.json";
import "./Event.css";
import SimilarEvent from "./SimilarEvent.js";
import data from "./Assets/Datas.json";
import Footer from "../Blog/Footer";


export const EventPage = () => {
  return (
    <>
      {event.map((event) => (
        <div className="event-containers" key="id">
          <div>
            <div>
              <div className="display-container">
                <div className="event-intro">
                  <div>
                    <h5 className="dateto">{event.dateto}</h5>
                    <h1 className="title">{event.title}</h1>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div className="host-image">
                      <img alt="host" src={event.hostimage} width="50px" />
                    </div>
                    <div className="host-details">
                      <p style={{ color: "#0066F5", margin: "2px" }}>
                        Hosted by
                      </p>
                      <span className="host-name">{event.name}</span>
                    </div>
                  </div>
                </div>
                <div className="parent-article-container">
                  <div className="img-article">
                    <div className="child-article">
                      <div
                        className="some-image"
                        style={{
                          background: `url(${event.img})`,
						  backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
						  borderRadius: "4px",
                        }}
                      ></div>                   
                      <div className="all-paragraph">
                        <p className="details">Details</p>
                        <p className="paraparaph">{event.story1}</p>
                        <p className="paraparaph">{event.story2}</p>
                        <p className="paraparaph">{event.story3}</p>
                        <p className="paraparaph">{event.story4}</p>
                        <p className="paraparaph">{event.story5}</p>
                        <p className="paraparaph">{event.story6}</p>
                        <p className="paraparaph">{event.story7}</p>
                        <p className="paraparaph">{event.story8}</p>
                        <p className="paraparaph">{event.story9}</p>
                      </div>

                      <div className="see-attendees">
                        <div>
                          <span className="attendees">
                            Attendees({event.attendees})
                          </span>
                        </div>
                        <div>
                          <span className="see-all">See all</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="date-schedule">
                    <div className="date-schedule-bk">
                      <div style={{ display: "flex", marginBottom: "8px" }}>
                        <span>
                          <i class="far fa-clock"></i>
                        </span>
                        &nbsp;
                        <div>
                          <div>{event.dateto}</div>
                          <div>{event.time}</div>
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <span>
                          <i class="fas fa-globe-americas"></i>
                        </span>
                        &nbsp;
                        <div>
                          <div>{event.type}</div>
                          <div>Link visible for attendees</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="other-see-all">
                  <div className="event-nearby">Similar events nearby</div>
                  <span className="event-nearbysee-all">See all</span>
                </div>
                <div className="flex-container">
                  {data.map((similar, idx) => (
                    <SimilarEvent similar={similar} key={idx} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};
export default EventPage;

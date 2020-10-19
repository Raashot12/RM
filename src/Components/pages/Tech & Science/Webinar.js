import React from 'react'
import './Webinar.css';
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { useHistory} from "react-router-dom"

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];

export default function Webinar(props) {
	
	let history = useHistory();
 const handleClick=() =>{
	 history.push("/event")
 }


	return (
    <>
      <div className="slider-container">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <div>
              <img
                className="webinar-img"
                src={props.img}
                alt="Trader selling Goods"
                width="100%"
                height="140px"
              />
              <div className="text-element">
                <h4 className="date-year">{props.time}</h4>
                <h4 className="topics">{props.title}</h4>
                <h5 className="company-name"> {props.company}</h5>
                <h6 className="attendees-number">Attendees:{props.attend}</h6>
                <button className="btn5" onClick={handleClick}>
                  Read More...
                </button>
              </div>
            </div>
          </Item>

          <Item>
            <div>
              <img
                className="webinar-img"
                src={props.img}
                alt="Trader selling Goods"
                width="100%"
                height="140px"
              />
              <div className="text-element">
                <h4 className="date-year">{props.time}</h4>
                <h4 className="topics">{props.title}</h4>
                <h5 className="company-name"> {props.company}</h5>
                <h6 className="attendees-number">Attendees:{props.attend}</h6>
                <button className="btn5" onClick={handleClick}>
                  Read More...
                </button>
              </div>
            </div>
          </Item>
          <Item>
            <div>
              <img
                className="webinar-img"
                src={props.img}
                alt="Trader selling Goods"
                width="100%"
                height="140px"
              />
              <div className="text-element">
                <h4 className="date-year">{props.time}</h4>
                <h4 className="topics">{props.title}</h4>
                <h5 className="company-name"> {props.company}</h5>
                <h6 className="attendees-number">Attendees:{props.attend}</h6>
                <button className="btn5" onClick={handleClick}>
                  Read More...
                </button>
              </div>
            </div>
          </Item>
          <Item>
            <div>
              <img
                className="webinar-img"
                src={props.img}
                alt="Trader selling Goods"
                width="100%"
                height="140px"
              />
              <div className="text-element">
                <h4 className="date-year">{props.time}</h4>
                <h4 className="topics">{props.title}</h4>
                <h5 className="company-name"> {props.company}</h5>
                <h6 className="attendees-number">Attendees:{props.attend}</h6>
                <button className="btn5" onClick={handleClick}>
                  Read More...
                </button>
              </div>
            </div>
          </Item>
          <Item>
            <div>
              <img
                className="webinar-img"
                src={props.img}
                alt="Trader selling Goods"
                width="100%"
                height="140px"
              />
              <div className="text-element">
                <h4 className="date-year">{props.time}</h4>
                <h4 className="topics">{props.title}</h4>
                <h5 className="company-name"> {props.company}</h5>
                <h6 className="attendees-number">Attendees:{props.attend}</h6>
                <button className="btn5" onClick={handleClick}>
                  Read More...
                </button>
              </div>
            </div>
          </Item>
          <Item>
              <div>
              <img
                className="webinar-img"
                src={props.img}
                alt="Trader selling Goods"
                width="100%"
                height="140px"
              />
              <div className="text-element">
                <h4 className="date-year">{props.time}</h4>
                <h4 className="topics">{props.title}</h4>
                <h5 className="company-name"> {props.company}</h5>
                <h6 className="attendees-number">Attendees:{props.attend}</h6>
                <button className="btn5" onClick={handleClick}>
                  Read More...
                </button>
              </div>
            </div>
		   </Item>
        </Carousel>
      </div>
    </>
  );
}




				
		
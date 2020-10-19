import React from "react";
// import "./Card.css"
import "./Card.css";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <div className="general-container">
        <div class="panel">
          <div className="flex-item">
            <div
              className="boxxx"
              style={{
                background: `url(${"https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2020/07/register-to-vote_blog-post-screenshot-copy-2-1.png"})`,
                height: "209px",
                width: "360px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "4px",
              }}
            ></div>
            <div className="article-wrapper">
              <div className="blog_date-wrapper">
                <div>
                  <span className="blog-to-have-space">BLOG POST</span>
                </div>
                <div>
                  <span style={{ color: "#A7A9B6" }}>SEPT 22</span>
                </div>
              </div>
              <div>
                <span className="brief">
                  Ticket to Vote: Add Free Voter Registration<br></br> to Your
                  Events With HeadCount
                </span>
              </div>
            </div>
          </div>
          <div className="flex-item">
            <div
              className="boxxx"
              style={{
                background: `url(${"https://images.unsplash.com/flagged/photo-1565250264517-c244ad3ea7b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"})`,
                height: "209px",
                width: "360px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "4px",
              }}
            ></div>
            <div className="article-wrapper">
              <div className="blog_date-wrapper">
                <div>
                  <span className="blog-to-have-space">BLOG POST</span>
                </div>
                <div>
                  <span style={{ color: "#A7A9B6" }}>SEPT 22</span>
                </div>
              </div>
              <div>
                <span className="brief">
                  Prioritizing Safety and Communication <br></br> Are Key to
                  Resuming In-Person Events
                </span>
              </div>
            </div>
          </div>
          <div className="flex-itemss   line-border">
            <div className="inbox">
              Get event creator<br></br> insights sent directly<br></br> to your
              inbox
            </div>
            <div className="  house-input">
              <input type="email" required placeholder="Email"></input>
            </div>
            <form className="sign-me-up">
              <span className="policy">
                <p>
                  {" "}
                  By entering your email, you agree to receive this and other
                  marketing content about ways Eventbrite can support your
                  events. You may opt-out of future Eventbrite marketing emails
                  at any time using the unsubscribe link within the email. Read
                  our{" "}
                  <Link to="/visit">
                    <span style={{ color: "#F77947" }}>
                      Privacy Policy here
                    </span>{" "}
                  </Link>
                  .
                </p>
              </span>
              <button type="submit"> Sign me up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

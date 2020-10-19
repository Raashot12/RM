import React, { Component } from "react";
import "./Blogfilter.css";
import ButtonSelectField from "./ButtonSelectField";
import Footer from "./Footer";

export default class Blogfilter extends Component {
  state = {
    checked: false,
  };
  toggle = (event) => {
    event.preventDefault();
    this.setState(function (state) {
      return {
        checked: !state.checked,
      };
    });
  };
  showElement = () => {
    return this.state.checked ? <ButtonSelectField /> : null;
  };
  ShowArrow = () => {
    return this.state.checked ? (
      <i class="fas fa-chevron-down"></i>
    ) : (
      <i class="fas fa-chevron-up"></i>
    );
  };
  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <div>
          <div className="filtercat">
            <span className="post">Filter Blog Post</span>
            <button className="categorysearch" onClick={this.toggle}>
              Category {this.ShowArrow()}
            </button>
          </div>
          {this.showElement()}
        </div>
        <div className="general-container">
          <div class="panel">
            <div className="flex-items">
              <div
                className="boxxx"
                style={{
                  background: `url(${"https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2020/10/IMG_4163.jpeg"})`,
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
                    <span className="blog-to-have-space">
                      EVENT PLANNING & PROMOTION
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#A7A9B6" }}>SEPT 22</span>
                  </div>
                </div>
                <div>
                  <span className="brief">
                    Ticket to Vote: Add Free Voter Registration to<br></br> Your
                    Events With HeadCount
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-items">
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
                    <span className="blog-to-have-space">
                      STORIES AND INTERVIEWS
                    </span>
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
            <div className="flex-items">
              <div
                className="boxxx"
                style={{
                  background: `url(${"https://images.unsplash.com/photo-1529847556963-9653a9366021?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=525&q=60"})`,
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
                    <span className="blog-to-have-space">
                      RESOURCES AND TOOLS
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#A7A9B6" }}>SEPT 22</span>
                  </div>
                </div>
                <div>
                  <span className="brief">
                    Ticket to Vote: Add Free Voter Registration to<br></br> Your
                    Events With HeadCount
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="bannerlog">
          <div
            className="bannerblog1"
            style={{
              background: `url(${"https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2018/10/6945-blog-images-08.png"})`,
              height: "276px",
              width: "302.98px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              // position:"relative"
            }}
          ></div>
          <div className="bannerblog2 ">
            <div className="banner-gradient">
              <div className="bring-it-down">
                <h3>Get started with RM in minutes</h3>
                <h5 className="bannerblog3">
                  Create a beautiful event listing and easily drive attendance
                  with <br></br> built-in tools.
                </h5>
                <button className="create-event">Create My Event</button>
              </div>
            </div>
          </div>
        </section>
        <div className="general-container">
          <div class="panel">
            <div className="flex-items">
              <div
                className="boxxx"
                style={{
                  background: `url(${"https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2020/10/IMG_4163.jpeg"})`,
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
                    <span className="blog-to-have-space">
                      EVENT PLANNING & PROMOTION
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#A7A9B6" }}>SEPT 22</span>
                  </div>
                </div>
                <div>
                  <span className="brief">
                    How to Work With Celebrities and Big-Name<br></br> Talent
                    for Virtual Events
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-items">
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
                    <span className="blog-to-have-space">
                      STORIES AND INTERVIEWS
                    </span>
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
            <div className="flex-items">
              <div
                className="boxxx"
                style={{
                  background: `url(${"https://images.unsplash.com/photo-1529847556963-9653a9366021?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=525&q=60"})`,
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
                    <span className="blog-to-have-space">
                      RESOURCES AND TOOLS
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#A7A9B6" }}>SEPT 22</span>
                  </div>
                </div>
                <div>
                  <span className="brief">
                    How to Work With Celebrities and Big-Name<br></br> Talent
                    for Virtual Events
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="general-container">
          <div class="panel">
            <div className="flex-items">
              <div
                className="boxxx"
                style={{
                  background: `url(${"https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2020/10/IMG_4163.jpeg"})`,
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
                    <span className="blog-to-have-space">
                      EVENT PLANNING & PROMOTION
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#A7A9B6" }}>SEPT 22</span>
                  </div>
                </div>
                <div>
                  <span className="brief">
                    Ticket to Vote: Add Free Voter Registration to<br></br> Your
                    Events With HeadCount
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-items">
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
                    <span className="blog-to-have-space">
                      STORIES AND INTERVIEWS
                    </span>
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
            <div className="flex-items">
              <div
                className="boxxx"
                style={{
                  background: `url(${"https://images.unsplash.com/photo-1529847556963-9653a9366021?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=525&q=60"})`,
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
                    <span className="blog-to-have-space">
                      RESOURCES AND TOOLS
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#A7A9B6" }}>SEPT 22</span>
                  </div>
                </div>
                <div>
                  <span className="brief">
                    How to Work With Celebrities and Big-Name<br></br> Talent
                    for Virtual Events
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="loadmore">
          <button> Load More</button>
        </div>
        <Footer />
      </div>
    );
  }
}

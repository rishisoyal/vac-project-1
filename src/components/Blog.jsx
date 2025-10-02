import React from "react";
import Menu from "./Menu";

const Blog = () => {
  return (
    <div className="main">
      <div className="content">
        <h1>
          MY <span className="highlight">BLOGS</span>
        </h1>
        <div className="tab-container">
          <div className="tab">TAB 1</div>
          <div className="tab">TAB 2</div>
          <div className="tab">TAB 3</div>
          <div className="tab">TAB 4</div>
          <div className="tab">TAB 5</div>
          <div className="tab">TAB 6</div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Blog;

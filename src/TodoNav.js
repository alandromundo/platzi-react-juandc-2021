import React from "react";
import "./TodoNav.css";

function TodoNav(props) {
  return (
    <nav className="TodoNav">
      <ul>
        <li>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </li>
      </ul>
    </nav>
  );
}

export { TodoNav };

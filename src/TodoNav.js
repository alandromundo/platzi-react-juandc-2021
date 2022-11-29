import React from "react";
import "./TodoNav.css";

function TodoNav(props) {
  return (
    <nav className="TodoNav">
      <ul>
        <li className="TodoNav__menu">
          <i
            className="fa fa-bars TodoNav__menu-icon--hamburger"
            aria-hidden="true"
          ></i>
        </li>
      </ul>
    </nav>
  );
}

export { TodoNav };

import React from 'react';
import "../styles/components/TodoLoadingItems.css";

function TodoLoadingItems() {
  return(
    <div>
      <div className="skeleton skeleton-todo"></div>
      <div className="skeleton skeleton-todo"></div>
      <div className="skeleton skeleton-todo"></div>
    </div>
  );
}

export { TodoLoadingItems };
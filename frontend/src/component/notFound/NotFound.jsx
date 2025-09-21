import React from "react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-oops">Oops!</h1>
      <h2 className="notfound-title">404 - PAGE NOT FOUND</h2>
      <p className="notfound-text">
        The page you are looking for might have been removed, <br />
        had its name changed or is temporarily unavailable.
      </p>
      <a href="/" className="notfound-btn">
        GO TO HOMEPAGE
      </a>
    </div>
  );
}

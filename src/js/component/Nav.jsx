import React from "react";

export function Nav () {

return (

<div>

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-0 py-1  ">
    <div className ="container">

    <div>
      <a className="navbar-brand" href="#">Start Bootstrap</a>


    </div>
    <div>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse m-0 p-0" id="navbarSupportedContent">
      <ul className="navbar-nav  m-0 p-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Contact</a>
        </li>
      </ul>

    </div>
    </div>
   </div>
  </nav>

</div>


)

}
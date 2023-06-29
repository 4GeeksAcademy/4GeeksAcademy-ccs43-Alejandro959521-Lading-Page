import React from "react";
import PropTypes from "prop-types";

export function Card (props){
return (
<div className="card text-center m-2" style={{maxWidth: "16rem", minWidth:"16rem"}}>
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid" />
          <a href="#!">
            <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
          </a>
        </div>
        <div className="card-body ">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{props.text}</p>

          <a href="#!" className="btn btn-primary">Find Out More!</a>

        </div>


      </div>
   )
}

Card.propTypes = {
	text: PropTypes.string,
};
import React from "react";
import PropTypes from "prop-types";
import {Nav} from "./Nav.jsx";
import {Jumbotron} from "./Jumbotron.jsx";
import {Card} from "./Card.jsx";
import {Foter} from "./Foter.jsx";

export function App () {

return(
           
       <div >
          
            <Nav/>
            
                <div className="container">
              
                    <Jumbotron/>
                            </div>
                           
                     <div className="d-flex container flex-wrap justify-content-center">
                      <Card text="Lorem ipsum dolor sit amet, cosectetur adipisicing elit. Sapiente esse necessitatubis
            neque."  /> 
                      <Card text="Lorem ipsum dolor sit amet, consectetur adipisicong elit. Explicabo magni sapiente,
            tempore debitis beatae culpa natus architecto." />  
                      <Card text="Lorem ipsum dolor sit amet, cosectetur adipisicing elit. Sapiente esse necessitatubis
            neque." />  
                      <Card text="Lorem ipsum dolor sit amet, consectetur adipisicong elit. Explicabo magni sapiente,
            tempore debitis beatae culpa natus architecto." />   
                     
                 
            </div>
        <Foter/>
     </div>

) 

}
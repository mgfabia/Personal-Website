import headshot from "./images/head.jpg"

export default function Header(){
    return(
        <div className= "header">
            <img className = "headshot" src = {headshot} alt = "headshot"/>  
            <h1>Mark Fabian</h1>
            <h3>Clemson University CIS</h3>
            <p>mgfabia@g.clemson.edu</p>
        <div className = "button">
            <button className ="buttonleft">Email</button>
            <button className = "buttonright">LinkedIn</button>
            </div>

        </div>
    );
}


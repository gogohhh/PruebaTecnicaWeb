import React from 'react';
import '../../App.css';
import { SidebarData } from './sidebarData';

function Sidebar(){
    return(
    <aside className="main-sidebar elevation-3">
     <div className="sidebar">
         <h3>Menú</h3>
         <ul className="Sidebarlist">
         {SidebarData.map((val, key) =>{
             return (
                <li key={key}
                className="row" 
                id={window.location.pathname == val.link ? "active" : ""}
                onClick={()=>{window.location.pathname = val.link}} 
                >
                    <div id="icon">{ val.icon }</div>
                    <div id="title">
                        {val.title}
                    </div>
                </li>
             )
         })}
        </ul>   
     </div>
    </aside>

    )
}

export default Sidebar
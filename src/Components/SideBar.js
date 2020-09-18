import React from 'react';
import Data from "../data.json";
function SideBar(props){

function sideCollapse(e) 
    {
      e.preventDefault();
      props.toggleSidebar();
    }
    return(
             <nav id="sidebar" className={props.isActive ? 'active' : ''}>
                <div className="sidebar-header">
                        <button type="button" onClick={sideCollapse} id="sidebarCollapse" className="less-btn">
                            <i className="fas fa-less-than" aria-hidden="true"></i>
                        </button> <hr/>
                </div>                
                {Data.NavDrawer.mainItems.map((data, index) => {
                return (
                    <div key={index} className='mainItems'>
                     <i className={data.icon} id='icon' aria-hidden='true'></i> {data.name}
                    </div>
                  );
                }
            )} <hr/>
            <div className='saved'>Saved reports</div>
            {Data.NavDrawer.SavedReports.map((data, index) => {
                return (
                    <div key={index} className='reportItems'>
                    <i className={data.icon} id='icon' aria-hidden='true'></i> {data.name}
                    </div>
                  );
                }
            )} 
            </nav>
    );
}

export default  SideBar;

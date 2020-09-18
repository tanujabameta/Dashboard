import  React, {useState} from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import LineChart from './Components/LineChart';
import Deposit from './Components/Deposit';
import RecentOrder from './Components/RecentOrder';

function App() {

  const [isActive, setActive] = useState(false);
  const [showHamBurger, toggleHamBurger ] = useState(false);


  function toggleSidebar() {
    setActive(!isActive);
    toggleHamBurger(!showHamBurger);
  }

  return (
    <div className="App">
      <div className="wrapper">
            <SideBar isActive={isActive} toggleSidebar={toggleSidebar} />
            <div id="content">
            <nav>
                <div className='dashboard'>
                    <div>
                    <button type="button" onClick={toggleSidebar} id="barButton" className="navbar-btn" hidden={showHamBurger}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    </div>
                    <div>
                    <h3><b>Dashboard</b></h3>
                    </div>
                    <div className='bell'>
                    <i className="fas fa-bell"></i>
                    <span className="badge badge-danger">2</span>
                    </div>
                </div>  
            </nav>
            <div className="con" >
                <div className="row1">
                    <div className="line"><LineChart/></div>
                    <div className="deposit" ><Deposit/></div>
                </div>
                <div className="recent"> <RecentOrder/></div>
                </div>
        </div>
      </div>
    </div>
  )
}

export default App;

import React from 'react';
import Data from "../data.json";

function Deposit(){
    return(
        <div className='border'>
          <span className='depo'>Recent Deposits</span>
          {Data.Deposits.map((data, index) => {
                return (
                    <div key={index} className='mainItems'>
                      <span className='datavalue'>{data.value} </span><br/>
                      <span className='datadate'>on {data.date}</span>
                      <span className='view'>View balance</span>
                    </div>
                  );
                }
            )}
        </div>
    );
}

export default Deposit;

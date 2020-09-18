import React from 'react';
import Data from "../data.json";

function RecentOrder(){
    return(
        <div className='border'>
          <span className='orders'>Recent Orders</span>
                    <div className='headOrders'>
                      <span className='col'>Date</span>
                      <span className='col'>Name</span>
                      <span className='col'>Ship To</span>
                      <span className='col'>Payment Method</span>    
                      <span className='col'>Sale Amount</span>               
                    </div><hr className='recenthr'/>
          {Data.RecentOrders.map((data, index) => {
                return (
                    <div key={index} className="recentItems">
                    <div className='head'>
                      <span className='col'>{data.date}</span>
                      <span className='col'>{data.Name}</span>
                      <span className='col'>{data.ShipTo}</span>
                      <span className='col'>{data.PaymentMethod}</span>    
                      <span className='col'>{data.Amount} </span>
                    </div>
                    
                    </div>
                  );
                }
            )}
         <span className='more'> See more orders</span>
        </div>
    );
}

export default RecentOrder;

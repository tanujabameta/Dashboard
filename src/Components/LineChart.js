import React, {useEffect} from 'react';
import Plotly from 'plotly.js';
import Data from "../data.json";

function LineChart(){
  useEffect(() => {
    var trace ={
      x: Data.LineChart.x,
      y: Data.LineChart.y,
      type: 'scatter'
       };
       var layout = {
        width: 825,
        title: 'Today',
        xaxis: {
          color: '#fff',
          'showgrid': false,
          range: [0, 5.5] 
        },
        yaxis: {
          title: 'scales$',
          color: '#fff',
          'showgrid': false,
          'showline': true,
          range: [0, 1000] 
        },
        plot_bgcolor: '#3d3c3c',
        paper_bgcolor: '#3d3c3c'
        
      }
      var data = [trace];
     Plotly.newPlot('lineChart', data,layout,{displayModeBar: false});
  });
    return(
        <div id='lineChart' className="borderround">
        </div>
    );
}

export default LineChart;

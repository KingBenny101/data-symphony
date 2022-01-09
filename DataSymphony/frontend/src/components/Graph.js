import "../css/Graph.css";
import { Component,useEffect ,useRef} from "react";
import CanvasJSReact from "../services/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints = [];

class Graph extends Component {
    
	render() {	
        const options = {
            theme: "light2",
            title: {
              text: "Predicted scoring probabilty",
            },
            axisY: {
              title: "Chance of scoring",
            },
            axisX: {
                title: "Time Line",
              },
            data: [
              {
                type: "line",
                xValueFormatString: "MMM SS",
                yValueFormatString: "#,##0.00",
                dataPoints: dataPoints,
              },
            ],
          };
		return (
		<div>
			<CanvasJSChart options = {options} onRef={ref => this.chart = ref}
				 
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	
	componentDidMount(){
        const data = Object.entries(this.props.dp);
        var chart = this.chart;
 
        for (var i = 0; i < data.length; i++) {
            const xtmp = data[i][0];
            const ytmp = parseFloat(data[i][1]); 
    
          dataPoints.push({
            label: xtmp,
            y: ytmp,
          });
        }
    
   
        chart.render();
	}
}
export default Graph;
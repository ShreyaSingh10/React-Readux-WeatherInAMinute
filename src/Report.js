import React from "react";
import {connect} from 'react-redux';
import axios from 'axios';
import './styles.css';

function convert (temp){
	return Math.round(temp-273);
}

function Report(props){
	return(
		<div className="parent-container">
			<h1><font face="Comic sans MS" size="10"> Weather Details</font> </h1>
			<h3><font face="Comic sans MS" size="6">Mumbai</font> </h3>
			<img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Perth-night-panorama-080306.jpg"></img>
				
				<button onClick={props.handleClick}>Get Weather</button>
				{props.report ? (
	              <div className="weatherDetails">
	              	<h4><font face="Comic sans MS" size="5">Today's Weather</font> </h4>
					<p><b>Maximum Temperature:</b> {convert(props.report.temp_max)} °C</p>
					<p><b>Minimum Temperature:</b> {convert(props.report.temp_min)} °C</p>
					<p><b>Humidity:</b> {props.report.humidity} %</p>
				</div>
	            ) : (
	               <p>Click the button above to fetch the weather details in a minute...</p>
	            )}
		</div>
	)
}

const mapStateToProps = (state) => {
	console.log("state", state);
	return{
		report: state.weather_report
	};
}
const mapDispatchToProps = (dispatch) => {
	return {

		handleClick: (event) => {
		    setInterval(function () {
		        axios.get(`
				http://api.openweathermap.org/data/2.5/forecast?q=mumbai,in&APPID=0ed8935ec08da2ab5c2af86e5891c5a4
				`).then((response)=>{
					dispatch({ type:'GET_WEATHER', weather_report:response.data.list[0].main});
					console.log("response", response.data.list[0].main);
				});
		    }, 60000);
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Report);
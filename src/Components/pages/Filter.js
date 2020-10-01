import React from 'react'
import './Filter.css';
import SliderBusinessCareer from './Business & Careers/Slider';
import SliderBeautyFashion from './Beauty & Fashion/Slider';
import SliderTeachScience  from "./Tech & Science/Slider"
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';

export default function  Filter() {
	// The first commit of Material-UI
	const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<>
		<section  className="filter">
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify="space-evenly">
				<KeyboardDatePicker
					disableToolbar
					variant="inline"
					format="MM/dd/yyyy"
					margin="normal"
					id="date-picker-inline"
					label="Picker  Date"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
					<div className="parent-filter">

				<div className="loginForms">
 				

 					<span className="larger-width">
 						<input type="text" name="firstName"  size="25"  placeholder="Search for your next event"/ >
 						<button className="btn-search"><i className="fas fa-search"></i></button> 					
					</span>
					</div>
						</div>
						
				<KeyboardTimePicker
					margin="normal"
					id="time-picker"
					label="Pick Time"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change time',
					}}
				/>
				
			</Grid>
		</MuiPickersUtilsProvider>
		
		<SliderBeautyFashion/>
		<SliderBusinessCareer />
				< SliderTeachScience/>
		</section>
		</>
	);
}






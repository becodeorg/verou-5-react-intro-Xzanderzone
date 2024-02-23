import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar(events) {
	const handleDateClick = (arg) => {
		console.log(arg.dateStr);
	};
	return (
		<div className="calendar">
			<Fullcalendar
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
				initialView={"dayGridMonth"}
				headerToolbar={{
					start: "today prev,next", // will normally be on the left. if RTL, will be on the right
					center: "title",
					end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
				}}
				height={"75vh"}
				dateClick={handleDateClick}
				events={events}
			/>
		</div>
	);
}

export default Calendar;

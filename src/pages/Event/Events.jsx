import React from "react";
import EventsCard from "../../components/EventsComponents/EventsCard";
import "./Events.css";

function Events() {
	return (
		<div className="wish" id="wishlist">
			<div className="wishlist-rus">
				<h2>Мероприятия и семинары</h2>
				<p>
					Учитесь непосредственно у своих коллег, экспертов и лидеров
				</p>
			</div>
			<div className="wishlist">
				<EventsCard />
				<EventsCard />
				<EventsCard />
			</div>
      <div className="wishlist">
				<EventsCard />
				<EventsCard />
				<EventsCard />
			</div>
      <div className="wishlist">
				<EventsCard />
				<EventsCard />
				<EventsCard />
			</div>
		</div>
	);
}

export default Events;

import React from "react";
import card from "../../image/image.png";
import "./EventsCard.css";

const EventsCard = () => {
	return (
		<div className="wishlist-card">
			<img
				className="wishlist-product"
				// onClick={showModal}
				src={card}
				alt=""
			/>
			<div className="text">
				<b>Как открытые данные могут изменить государственную службу</b>
				<p>Четверг, 1 декабря 2022 г.</p>
			</div>
		</div>
	);
};

export default EventsCard;

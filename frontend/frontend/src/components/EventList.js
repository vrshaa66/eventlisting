import React, { useEffect, useState } from "react";
import axios from "axios";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">All Events</h2>
      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <div className="flex items-center text-gray-500">
              <span className="mr-4">📍 {event.location}</span>
              <span>🗓️ {new Date(event.date).toLocaleDateString()}</span>
            </div>
            <div className="mt-4 text-gray-500">
              <span>⏰ {event.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
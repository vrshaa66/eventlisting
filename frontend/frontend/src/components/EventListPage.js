import React from "react";
import EventList from "../components/EventList";
import AddEvent from "../components/AddEvent";

const EventListPage = () => {
  return (
    <div>
      <EventList />
      <AddEvent />
    </div>
  );
};

export default EventListPage;
import React from "react";
import EventList from "../components/EventList";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <EventList />
    </div>
  );
};

export default Home;
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import EventCard from "../../components/EventCard/EventCard";
import { FaFilter } from "react-icons/fa";

const Events = () => {
  const [events, setEvents] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axiosSecure.get("/events");
        setEvents(res.data);
      } catch (error) {
        alert(error);
      }
    };

    fetchEvents();
  }, [axiosSecure]);

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <div className="flex justify-center items-center gap-4 my-6">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
        </label>
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter <FaFilter />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;

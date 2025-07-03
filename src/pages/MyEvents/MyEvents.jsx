import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../providers/AuthContext";
import EventCard from "../../components/EventCard/EventCard";

const MyEvents = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [myEvents, setMyEvents] = useState([]);
  useEffect(() => {
    const fetchMyEvents = async () => {
      const res = await axiosSecure.get(`/my-events/${user.email}`);
      console.log(res.data);
      setMyEvents(res.data);
    };

    fetchMyEvents();
  }, [axiosSecure, user.email]);
  return (
   <div className="max-w-7xl mx-auto mt-8">
     <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {myEvents.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
   </div>
  );
};

export default MyEvents;


import { useLocation } from "react-router-dom";
import { RxUpdate } from "react-icons/rx";
import { MdDelete } from "react-icons/md";

const EventCard = ({ event }) => {
  const { title, description, attendeeCount } = event;
  const location = useLocation();
  return (
    <div className="card bg-green-100  text-black w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        <div className="card-actions justify-end">
          <button className="btn">
            Joined (<span className="font-bold text-lg">{attendeeCount}</span>)
          </button>
          {location.pathname === "/my-events" ? (
            <>
              <button className="btn">Update <RxUpdate /></button>
              <button className="btn">Delete <MdDelete /></button>
            </>
          ) : (
            <button className="btn">join Now</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;

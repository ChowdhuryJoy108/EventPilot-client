import React, { useState, useContext } from "react";
import AuthContext from "../../providers/AuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddEventForm = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [formData, setFormData] = useState({
    title: "",
    name: "",
    email: user?.email || "",
    dateTime: "",
    location: "",
    description: "",
    attendeeCount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosSecure.post("/add-event", formData);
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Event Created Successfully!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Unsuccessful!",
        text: ` ${error}`,
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Create New Event
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white shadow-md rounded-lg p-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email (auto-filled)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="mt-1 w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date & Time
          </label>
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEventForm;

import React, { useState, useEffect, useRef } from "react";

function CreateClient({ toggleModal }) {
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    status: "Active", // Default value
    created: new Date().toISOString(), // Current date in ISO format
  });

  const modalRef = useRef(null);

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggleModal(); // Close the modal if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData({
      ...clientData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientData),
      });

      if (response.ok) {
        alert("Client created successfully!");
        setClientData({
          name: "",
          email: "",
          phone: "",
          description: "",
          status: "Active",
          created: new Date().toISOString(),
        });
        toggleModal();
      } else {
        alert("Failed to create client");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div
      ref={modalRef}
      className="h-full w-full bg-white p-8 rounded-lg flex flex-col justify-center"
    >
      <form
        onSubmit={handleSubmit}
        className="h-full w-full flex flex-col space-y-4"
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={clientData.name}
            onChange={handleChange}
            required
            className="p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={clientData.email}
            onChange={handleChange}
            required
            className="p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={clientData.phone}
            onChange={handleChange}
            required
            className="p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={clientData.description}
            onChange={handleChange}
            required
            className="p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="status" className="text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={clientData.status}
            onChange={handleChange}
            required
            className="p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-accent"
        >
          Create Client
        </button>
      </form>
    </div>
  );
}

export default CreateClient;

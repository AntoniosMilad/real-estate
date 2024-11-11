"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  // Basic validation
  const validate = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = "Name is required" as any;
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      console.log("Form Submitted", formData);
      // Reset the form
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="bg-[#2B3D56] mb-10 flex items-center justify-between p-10 w-full max-w-[1920px] mx-auto px-[20px] lg:px-[100px]">
      <div className="grid lg:grid-cols-2 gap-10 w-full text-white">
        {/* Left Text Section */}
        <div className="space-y-4 flex flex-col justify-center">
          <p className="text-green-500 font-medium">
            Creating value for your investments with us
          </p>
          <h2 className="text-4xl font-bold">Need expert advice?</h2>
          <p>
            Fill out the form and one of our property consultants will contact
            you.
          </p>
        </div>

        {/* Right Form Section */}
        <form onSubmit={handleSubmit} className="p-8 text-gray-700 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
            rows={4}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <button
            type="submit"
            className="w-[40%] p-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

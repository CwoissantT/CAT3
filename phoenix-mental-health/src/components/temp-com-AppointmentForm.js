import React from 'react';
import { useForm } from 'react-hook-form';

const AppointmentForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Submit appointment request to backend
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <label className="block mb-2">
        Name:
        <input
          name="name"
          ref={register({ required: true })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.name && <span className="text-red-500">This field is required</span>}
      </label>
      <label className="block mb-2">
        Date:
        <input
          name="date"
          type="date"
          ref={register({ required: true })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.date && <span className="text-red-500">This field is required</span>}
      </label>
      <label className="block mb-2">
        Time:
        <input
          name="time"
          type="time"
          ref={register({ required: true })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.time && <span className="text-red-500">This field is required</span>}
      </label>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default AppointmentForm;

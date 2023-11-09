import { useFormik } from "formik";
import { bookSchema } from "../../utils/formValidation";
import { useAuth0 } from "@auth0/auth0-react";
import { useAddBookMutation } from "../../feature/booking/bookingApi";
import { userEmail } from "../../utils/userEmail";

const initialValues = {
  name: "",
  phone: "",
  date: "",
};

function Booking() {
  const [addBook, { data, isSuccess }] = useAddBookMutation();
  const email = userEmail();

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: bookSchema,
    onSubmit: (values, action) => {
      addBook({
        email,
        name: values.name,
        phone: values.phone,
        data: values.date,
      });
      action.resetForm();
    },
  });

  return (
    <form
      className="p-6 space-y-6 h-[425px]"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="block text-lg font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-64 h-14 px-4 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md shadow-sm"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {/* {values.name && touched.name ? <p className="text-lg text-red-400">{errors.name}</p> : null} */}
      </div>
      <div>
        <label htmlFor="phone" className="block text-lg  font-medium text-gray-700">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="mt-1 block w-64 h-14 px-4  border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md shadow-sm"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div>
        <label htmlFor="date" className="block text-lg  font-medium text-gray-700">
          Date
        </label>
        <input
          id="date"
          name="date"
          type="date"
          required
          className="mt-1 block w-64 h-14 px-4  border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md shadow-sm"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Booked
      </button>
      

      {isSuccess ? (
     <p
        className=" text-lg text-green-500 border border-[2px] border-green-400 text-center py-2"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        {" "}
        Booking Successfully
      </p>
      ) : null}
    </form>
  );
}

export default Booking;

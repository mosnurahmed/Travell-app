import * as Yup from "yup";

 export  const bookSchema = Yup.object({
  name: Yup.string().required("Please Enter Your Name"),
  phone: Yup.string().required("Please Enter Your Phone"),
  date: Yup.string().required("Please Enter Your Date"),
});

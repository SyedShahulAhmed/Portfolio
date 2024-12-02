import React from "react";
import contact from "../assets/Contact/contact.png";
import form from "../assets/Contact/form.png";
import { toast } from "react-toastify";
const Contact = () => {
  const [result, setResult] = React.useState("");
  const AccessKey = import.meta.env.VITE_API_URL
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", AccessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("")
      toast.success("Your message has been sent successfully")
      event.target.reset();
    } else {
     toast.error("Something went wrong. Please try again.")
      setResult("");
    }
  };
  return (
    <div className="w-full max-w-[1240px] pt-[150px] text-white  mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
        Let’s<span className=" text-[#2CEEF0] "> Talk</span>
      </h1>
      <div className="grid md:grid-cols-2 place-content-center mb-8  rounded-lg shadow-lg ">
        <div className="flex justify-center items-center">
          <img src={contact} alt="" className="md:p-16 p-8 hover:scale-105 transition-all duration-300"/>
        </div>
        <div className="flex flex-col  items-center p-5 gap-5 ">
          <img src={form} alt="" className="w-20  h-20 md:mt-6   hover:scale-105" />
          <p className="font-semibold  text-center">
            Have questions or want to collaborate? Fill out the form below, and
            I'll get back to you as soon as possible. I look forward to
            connecting with you!
          </p>
          <form
            onSubmit={onSubmit}
            className="flex justify-center flex-col items-center gap-3 w-full lg:px-20 md:px-12 sm:px-8"
          >
            <input
              type="text"
              placeholder="Enter your name"
              name="Name"
              required
              className="py-2 px-4 outline-none bg-transparent border-2 text-white rounded-lg w-full text-lg border-[#00b4d8]"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              required
              name="email"
              className="py-2 px-4 outline-none bg-transparent border-2 text-white rounded-lg w-full text-lg border-[#00b4d8]"
            />
            <textarea
              name="message"
              required
              cols={30}
              rows={5}
              placeholder="Enter message"
              className="py-2 px-4 outline-none bg-transparent border-2 text-white rounded-lg w-full text-lg border-[#00b4d8]"
            ></textarea>
             <button
            type="submit"
            className="bg-[#0096c7] text-white w-[30%] mt-2 mx-auto py-2 rounded-xl hover:bg-[#15aee0]"
          >
            {result ? result : "Send"}
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

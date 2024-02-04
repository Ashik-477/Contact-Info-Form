import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "react-lottie";
import Swal from "sweetalert2";
import ContactAnimation from "../lotties/ContactAnimation.json";

const ContactForm = () => {
  const contactAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: ContactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "nsusn-contact-mrd",
        "nsusn-contact-mrd",
        form.current,
        "mH6d_RzQNvNI8N3_e",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const handleAlert = () => {
    Swal.fire({
      title: "Congratulations!",
      text: "Message Send Successfully! We will get back to you soon with further updates.",
      icon: "success",
    });
  };

  return (
    <div
      id="contact-us"
      className="m-auto mb-20 w-full p-5 pt-28 lg:w-[1024px]"
    >
      <h1 className="mb-8 p-5 text-center text-4xl font-bold">
        Get In Touch With Us
      </h1>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <Lottie
          className="w-full max-w-md lg:max-w-lg"
          options={contactAnimationOptions}
          height="100%"
          width="100%"
        />

        <div className="w-3/4 lg:pl-6">
          <form ref={form} onSubmit={sendEmail} action="" className="">
            <div className="form__div">
              <input
                name="user_name"
                type="text"
                className="form__input"
                placeholder=" "
              />
              <label className="form__label">Name</label>
            </div>

            <div className="form__div">
              <input
                name="user_email"
                type="email"
                className="form__input"
                placeholder=" "
              />
              <label className="form__label">Email</label>
            </div>

            <div className="form__div">
              <input
                name="subject"
                type="text"
                className="form__input"
                placeholder=" "
              />
              <label className="form__label">Subject</label>
            </div>

            <div className="form__div">
              <textarea
                name="message"
                className="form__textarea"
                placeholder="Message"
              />
            </div>

            <input
              onClick={handleAlert}
              type="submit"
              className="form__button"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

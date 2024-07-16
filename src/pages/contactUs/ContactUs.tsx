import Footer from "../home/footer/Footer";
import Navbar from "../home/navbar/Navbar";
import contact_us from "../../../public/contact_us.json";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "react-lottie";
import toast from "react-hot-toast";

const ContactUs = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contact_us,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_nbmux6f",
          "template_t3455i9",
          form.current,
          "N7sCXhxC1NSQ36mKf"
        )
        .then(
          (result) => {
            console.log(result.text);
            if (result.text) {
              toast.success("Your Message Has been sent", { duration: 5000 });
              form?.current?.reset();
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-slate-800" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="flex justify-center mb-20 items-center gap-10">
              <p className="title-icon"></p>
              <h1 className="text-4xl font-bold mt-2 ">Contact Us</h1>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <Lottie options={defaultOptions} height={500} width={400} />
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold">
                  Ready to Get Started?
                </h2>
                <form id="contactForm" ref={form} onSubmit={sendEmail}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        />
                        <input
                          type="text"
                          id="name"
                          autoComplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="user_name"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        />
                        <input
                          type="email"
                          id="email"
                          autoComplete="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="user_email"
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="textarea"
                        className="pb-1 text-xs uppercase tracking-wider"
                      />
                      <textarea
                        id="textarea"
                        name="message"
                        cols={30}
                        rows={5}
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      value="Send Message"
                      type="submit"
                      className="btn-main w-full"
                    >
                      <span>See details</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;

import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  const config = {
    email: "rajanthulasi56@gmail.com",
    phone: "91+ 7373493098",
  };

  return (
    <section id="contact" className="bg-primary py-20 font-font">
      <div className="max-w-6xl mx-auto px-5 text-white text-center">
        <h1 className="text-4xl font-bold mb-5">Contact</h1>
        <h3 className="text-xl mb-10">Feel free to reach out to me through any of the following</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
          <div className="flex flex-col items-center bg-white text-black p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <SiGmail size={40} className="mb-4 text-primary" />
            <p className="font-semibold text-lg">{config.email}</p>
            <a
              href={`mailto:${config.email}`}
              className="text-sm text-primary mt-2 hover:underline transition-all duration-300"
            >
              Send an Email
            </a>
          </div>

          <div className="flex flex-col items-center bg-white text-black p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <FaPhoneAlt size={40} className="mb-4 text-primary" />
            <p className="font-semibold text-lg">{config.phone}</p>
            <a
              href={`tel:${config.phone}`}
              className="text-sm text-primary mt-2 hover:underline transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

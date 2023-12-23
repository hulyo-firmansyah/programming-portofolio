import Envelope from "../icons/Envelope";
import Phone from "../icons/Phone";

const ContactSection = () => {
  //
  return (
    <section id="contact" data-section className="lg:pb-44 pb-44">
      <div className="font-bold uppercase text-sm tracking-widest mb-7 text-gray-100 lg:hidden">
        Kontak
      </div>

      <div className="text-gray-400 text-lg font-medium">
        Mari tetap terhubung !
      </div>
      <div className="flex gap-3 items-center text-sm text-gray-400 mt-5 hover:text-gray-100 transition-colors ease-in">
        <Envelope className="w-5 h-5" />
        <a href="mailto:axusxzbitcomp@gmail.com" className="">
          axusxzbitcomp@gmail.com
        </a>
      </div>
      <div className="flex gap-3 items-center text-sm text-gray-400 mt-3 hover:text-gray-100 transition-colors ease-in">
        <Phone className="w-5 h-5" />
        <a href="https://wa.me/628815392482" className="">
          0881 - 5392 - 482
        </a>
      </div>
    </section>
  );
};

export default ContactSection;

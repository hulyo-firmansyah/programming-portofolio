import Github from "./icons/Github";
import Instagram from "./icons/Instagram";

const SocialMedia = () => (
  <div className="flex gap-5 text-gray-400 mt-10 lg:mt-20">
    <a
      href="https://github.com/hulyo-firmansyah"
      className="hover:text-gray-100 transition-colors ease-in"
    >
      <Github />
    </a>
    <a
      href="https://www.instagram.com/alex_nosyura/"
      className="hover:text-gray-100 transition-colors ease-in"
    >
      <Instagram />
    </a>
  </div>
);

export default SocialMedia;

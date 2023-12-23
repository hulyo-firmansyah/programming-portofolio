const NavigationItem = ({
  text,
  active,
  link,
}: {
  text: string;
  active: boolean;
  link: string;
}) => (
  <li
    className={`flex gap-4 mt-5 ${!active && "text-gray-400"} ${
      active && "text-lg"
    } transition-all ease-in`}
  >
    <a className="flex gap-3 outline-none" href={link}>
      <span>&#8212;&#8212;{active && <>&#8212;</>}</span> <span>{text}</span>
    </a>
  </li>
);

export default NavigationItem;

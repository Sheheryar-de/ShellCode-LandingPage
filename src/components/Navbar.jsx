import Logo from "../assets/name.svg";
import whatsappLogo from "../assets/whatsapp.svg";

const ContactUs = {
  background:
    "linear-gradient(79deg, rgba(255, 0, 0, 1) 0%,rgba(10, 0, 99, 1) 60% ,rgba(10, 0, 99, 1) 100%)",
};
const border = {
  position: "relative",
  padding: "1px",
  background: `linear-gradient(0deg, rgba(50, 41, 98, 1), rgba(255, 255, 255, 0)), linear-gradient(90deg, rgba(213, 211, 223, 1), rgba(255, 255, 255, 0))`,
  backgroundClip: "padding-box, border-box",
  backgroundOrigin: "border-box",
};

function Navbar() {
  return (
    <nav className="bg-transparent p-4 flex justify-between items-center mt-3">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Logo"
          className="w-[93px] h-[35px] md:h-[50px] md:w-[180px]"
        />
      </div>
      <div className="flex items-center justify-between w-[auto] md:w-[170px]">
        <div style={border} className="rounded-full">
          <button
            className=" text-white text-[12px] md:text-[18px] px-[6px] py-[5px] md:px-[16px] md:py-[8px] rounded-full "
            style={ContactUs}
          >
            Contact Us
          </button>
        </div>
        <a href="#" className="h-[27px] w-[27px] md:h-[40px] md:w-[40px] ml-2">
          <img src={whatsappLogo} alt="whatsapp" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

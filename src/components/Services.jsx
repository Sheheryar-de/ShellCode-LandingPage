import ServiceCard from "./UI/ServiceCard";
import heartLogo from "../assets/images/heart.png";
import mobileLogo from "../assets/mobileDev.svg";
import webLogo from "../assets/webDev.svg";
import cubeLogo from "../assets/cube.svg";

function Services() {
  return (
    <div className=" w-full min-h-[921px] bg-[rgb(0,0,0)] p-4">
      <div className="container mx-auto ">
        <div className=" flex items-center justify-center pt-[50px]">
          <h1
            style={{ fontFamily: "clashSemiBold" }}
            className="text-white text-center text-[25px] leading-[24px] md:text-[46px] md:leading-[56.58px] max-w-[800px]"
          >
            Discover{" "}
            <span className="text-[rgba(255,0,0,1)]">Our Services</span> to Suit
            Your Every Need.
          </h1>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-4 md:gap-12 mt-6 md:mt-10">
          {arr.map((rec) => (
            <ServiceCard
              key={rec.id}
              heartLogo={rec.logo}
              title={rec.title}
              desc={rec.desc}
              angle={rec.angle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

const arr = [
  {
    id: 1,
    title: "DEVOPS",
    desc: "With our DevOps Consulting Services, construct a strong base for your software development requirements and get the best results.",
    logo: heartLogo,
    angle: "45px",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "We at ShellCode Solutions, the best Mobile Application Development Company in Mumbai, offer you a world-class experience in the form of the app best suited for your needs.",
    logo: mobileLogo,
    angle: "23px",
  },
  {
    id: 3,
    title: "Website Development",
    desc: "We create modern and sophisticated websites with engaging UI that keeps your consumers engaged and hooked. Our services come at pocket-friendly prices and are customizable as per your requirements.",
    logo: webLogo,
    angle: "1px",
  },
  {
    id: 4,
    title: "UX UI",
    desc: "A lousy UI and UX can spell doom for your website. At ShellCode Solutions, the best UI UX developers in Mumbai, we ensure that such is not the case with what we deliver. ",
    logo: cubeLogo,
    angle: "150px",
  },
];

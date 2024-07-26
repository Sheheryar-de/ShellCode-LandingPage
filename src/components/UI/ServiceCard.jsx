import shadow from "../../assets/Ellipse.svg";

function ServiceCard({ heartLogo, title, desc, angle }) {
  return (
    <div className="relative overflow-hidden p-4">
      <div className="relative max-w-[500px] h-auto md:max-h-[290px] p-8 md:p-16 bg-[rgba(5,5,7,1)] border border-[1px solid rgba(255,255,255,0.3)] rounded-2xl">
        <img
          src={heartLogo}
          alt="heart logo"
          className={`absolute top-0 right-0 z-10 transform rotate-${[angle]}`}
        />

        <div className="relative z-10">
          <h2 className="text-gradient text-[18px] md:text-[24px]">{title}</h2>
          <p className="text-[12px] md:text-[18px] leading-[14px] md:leading-[21.48px] text-[#FFFFFF] mt-4">
            {desc}
          </p>
        </div>

        <object
          type="image/svg+xml"
          data={shadow}
          className="absolute inset-0 m-auto z-0 w-full h-full"
        >
          Your browser does not support SVGs
        </object>
      </div>
    </div>
  );
}

export default ServiceCard;

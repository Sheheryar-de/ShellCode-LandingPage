import group from "../assets/Group.svg";

const color = {
  border: "1px solid",
  borderImageSource:
    "linear-gradient(256.3deg, #3E3E3E 1.12%, rgba(255, 255, 255, 0) 106.51%)",
};

function Contact() {
  return (
    <div className="bg-[rgba(18,18,18,1)] p-4 h-[max-content] md:h-[500px] relative flex items-center justify-center">
      <img
        src={group}
        alt="light svgs"
        className="absolute z-10 w-full h-[500px] md:h-full object-cover"
      />
      <div className="container mx-auto relative z-20 my-8">
        <div className="relative h-auto md:h-[360px] py-16 max-w-[1100px] mx-auto rounded-3xl bg-[rgba(108,108,108,0.12)] border">
          <div
            style={color}
            className="h-full w-full rounded-3xl absolute top-0 left-0 z-[-1] bg-blur"
          ></div>
          <h1
            style={{ fontFamily: "clashSemiBold" }}
            className="text-[30px] md:text-[46px] text-center text-[rgba(255,255,255,1)]"
          >
            Get Groovin' Today
          </h1>
          <p
            style={{ fontFamily: "clashRegular" }}
            className="text-[18px] md:text-[24px] text-[rgba(255,255,255,1)] text-center px-10 md:px-16"
          >
            Ready to rock the digital world? Fill out the form to schedule your
            free consultation and let's get started on your next big idea!
          </p>
          <div className="flex items-center justify-center mt-10">
            <button
              style={{ fontFamily: "clashMedium" }}
              className="bg-[rgba(255,0,0,1)] rounded-[6px] text-white text-[14px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[rgba(255,0,0,1)] focus:ring-opacity-50"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

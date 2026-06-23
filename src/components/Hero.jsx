import BgImage from "../assets/images/bgImage.jpg";
import Navbar from "./Navbar";
import shadow from "..//assets/Ellipse.svg";

const bgImageContainer = {
  position: "relative",
  width: "100%",
  height: "auto",
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const darkOverlay = {
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: 0,
};

function Hero() {
  return (
    <main>
      <div style={bgImageContainer}>
        <div style={darkOverlay}></div>

        <section className="relative z-10 container mx-auto h-auto w-full flex flex-col px-4">
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 min-h-[640px] w-full place-items-center">
            <div className="">
              <h1
                style={{ fontFamily: "clashSemiBold" }}
                className="text-3xl md:text-[52px] font-bold text-white leading-tight my-5"
              >
                Ready to shake up your{" "}
                <span className="text-outline">online presence?</span>
              </h1>
              <p
                style={{ fontFamily: "clashRegular" }}
                className="text-white text-lg md:text-[20px] leading-relaxed"
              >
                We specialize in transforming ideas into engaging digital
                experiences. Whether you&apos;`re looking to launch a stunning
                website, develop a cutting-edge mobile app, or expand your
                e-commerce presence, we have the tools and expertise to make it
                happen.
              </p>
            </div>
            <div className="max-w-full relative p-6 bg-[rgba(138,138,138,0.12)] rounded-lg overflow-hidden">
              <object
                type="image/svg+xml"
                data={shadow}
                className="absolute inset-0 m-auto z-0 w-full h-full"
              >
                Your browser does not support SVGs
              </object>
              <div className="max-w-[400px] pb-6">
                <h1
                  style={{ fontFamily: "clashSemiBold" }}
                  className="text-[rgba(255,0,0,1)] pb-2 font-semibold text-[24px] leading-[29.52px]"
                >
                  Kickstart your business!!
                </h1>
                <h4 className="text-[16px] leading-[18.24px] text-[rgba(255,255,255,0.4)]">
                  Fill in the details below and our team will get back to you in
                  no time
                </h4>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="What should we call you?"
                    className="text-white mt-1 block w-full px-3 py-2 border border-[1px solid #636D79] bg-[#1C1C1C] rounded-md focus:outline-none"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Don’t worry, we won’t spam!"
                    className="mt-1 block w-full px-3 py-2 border border-[1px solid #636D79] bg-[#1C1C1C] rounded-md focus:outline-none"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-white">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="What should we call you?"
                    className="mt-1 block w-full px-3 py-2 border border-[1px solid #636D79] bg-[#1C1C1C] rounded-md focus:outline-none"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-white">
                    Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Don’t worry, we won’t spam!"
                    className="mt-1 block w-full px-3 py-2 border border-[1px solid #636D79] bg-[#1C1C1C] rounded-md focus:outline-none"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-white">
                    Services
                  </label>
                  <select
                    className="text-white mt-1 block w-full px-3 py-2 border border-[1px
                  solid #636D79] bg-[#1C1C1C] rounded-md focus
                  :outline-none"
                    placeholder=" Pick your upgrades! Which of our services excites you?"
                  >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                  </select>
                </div>
                <div className="">
                  <button className="bg-[#5B0000] text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#5B0000] focus:ring-opacity-50">
                    Get a Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Hero;

import cubeBox from "../../assets/cube.svg";

function Tesmonial({ user, name, title, comment, desc }) {
  return (
    <>
      <div className="flex justify-center mt-[60px] md:mt-[130px]">
        <div className="bg-[rgba(5,5,7,1)] relative overflow-hidden z-50 w-[980px] h-auto pb-6 md:pb-0 md:h-[450px] pt-4 px-2 md:pt-[80px] md:px-8 border border-[rgba(255,255,255,0.3)] rounded-xl">
          <h1
            style={{ fontFamily: "SFMedium" }}
            className="text-gradient text-[20px] md:text-[35] lg:text-[46px] text-white leading-[21px] md:leading-[54px]"
          >
            {comment}
          </h1>
          <p
            className="text-[13px] md:text-[20px] text-[rgba(255,255,255)] mt-4 opacity-70 leading-[15px] md:leading-[23px]"
            style={{ fontFamily: "SFRegular" }}
          >
            {desc}
          </p>
          <div className="flex items-center justify-between mt-10 w-[17px] md:w-[220px] h-[60px]">
            <img
              src={user}
              alt="User Picture"
              className="w-[60px] h-[60px] rounded-full"
            />
            <div>
              <h2
                style={{ fontFamily: "SFBold" }}
                className="text-[rgba(255,255,255,1)] text-[18px] md:text-[24px]"
              >
                {name}
              </h2>
              <p
                className="text-[rgba(255,255,255,1)] text-[14px] md:text-[20px] opacity-70"
                style={{ fontFamily: "SFRegular" }}
              >
                {title}
              </p>
            </div>
          </div>
          <img
            src={cubeBox}
            alt="cube"
            className="h-[238px] w-[204px] rotate-[120deg] absolute right-0 -bottom-[60px]"
          />
        </div>
      </div>
    </>
  );
}

export default Tesmonial;

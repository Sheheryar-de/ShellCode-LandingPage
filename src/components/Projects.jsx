import img1 from "../assets/images/projectImg1.png";
import img2 from "../assets/images/projectImg2.png";
import img3 from "../assets/images/projectImg3.png";

function Projects() {
  return (
    <div className="bg-gray-950 p-4">
      <div className="container mx-auto min-h-[700px] w-full pb-6">
        <h1
          style={{ fontFamily: "clashBold" }}
          className="uppercase pt-12 md:pl-6 text text-[rgba(255,255,255,1)] text-[20px] md:text-[76px] tracking-[4%]"
        >
          Latest Projects
        </h1>
        <div className="flex items-center justify-center gap-6 md:gap-0 flex-wrap mt-6 md:mt-20 md:justify-between">
          <img
            src={img1}
            alt="Projects Images"
            className="w-[280px] h-[226px] md:w-[400px] md:h-[330px] 2xl:w-[472px] 2xl:h-[370px]"
          />
          <img
            src={img2}
            alt="Projects Images"
            className="w-[280px] h-[226px] md:w-[400px] md:h-[330px] 2xl:w-[472px] rounded-[30px] 2xl:h-[370px]"
          />
          <img
            src={img3}
            alt="Projects Images"
            className="w-[280px] h-[226px] md:w-[400px] md:h-[330px] 2xl:w-[472px] 2xl:h-[370px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;

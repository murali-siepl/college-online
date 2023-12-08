import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

const EducationWebsiteDesign: FunctionComponent = () => {
  const navigate = useNavigate();

  const signupHandler = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="relative bg-gray-100 w-full h-[5080px] overflow-hidden text-left text-3xl text-gray-300 font-poppins">
        <img
          className="absolute h-[1.57%] w-[5.86%] top-[12.02%] right-[40.92%] bottom-[86.41%] left-[53.22%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
        <img
          className="absolute h-[10.91%] w-[36.94%] top-[1.57%] right-[9%] bottom-[87.53%] left-[54.06%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-6.svg"
        />
        <img
          className="absolute top-[133.3px] left-[767px] w-[447.4px] h-[796.7px] object-cover"
          alt=""
          src="/smilinghappyindianstudentwithbackpackpointinghisfingerwall-1@2x.png"
        />
        <div className="absolute top-[2580px] left-[calc(50%_-_683px)] bg-goldenrod w-[1366px] h-[836px]" />
        <b className="absolute top-[20.5px] left-[123px] text-mediumslateblue-100">
          <span>Edu</span>
          <span className="text-gray-300">cation</span>
        </b>
        <div className="absolute top-[26.5px] left-[452px] w-[462px] h-[21px] text-sm text-gray-200">
          <b className="absolute top-[0px] left-[0px] text-gray-300">Home</b>
          <div className="absolute top-[0px] left-[89.3px]">Teachers</div>
          <div className="absolute top-[0px] left-[200.5px]">Courses</div>
          <div className="absolute top-[0px] left-[304.8px]">Pricing</div>
          <div className="absolute top-[0px] left-[399px]">About Us</div>
        </div>
        <b className="absolute top-[26.5px] left-[1052px] text-sm">Sign In</b>
        <div className="absolute top-[13px] left-[1119px] w-[124px] h-12 text-sm text-white">
          <div className="absolute top-[0px] left-[0px] rounded-smi [background:linear-gradient(90.05deg,_#525fe1,_#2e3899)] w-[124px] h-12" />
          <b
            className="absolute top-[13.5px] left-[34px] uppercase"
            onClick={signupHandler}
          >
            Sing Up
          </b>
        </div>
        <div className="absolute top-[252.5px] left-[5%] sm:left-[10%] md:left-[15%] lg:left-[20%] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto sm:h-[343px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-mediumslateblue-100">
          <div className="absolute top-[0px] left-[0px] leading-[66px] inline-block w-full">
            <p className="m-0">
              <span className="font-medium font-poppins text-gray-300">{`Online `}</span>
              <span className="font-extrabold">Learning</span>
            </p>
            <p className="m-0">
              <span className="font-extrabold">you can access</span>
              <span className="font-medium font-poppins text-gray-300">
                any
              </span>
            </p>
            <p className="m-0 font-medium text-gray-300">where easily!</p>
          </div>
          <div className="absolute top-[205px] left-[0px] text-sm sm:text-base leading-[22px] text-gray-200 inline-block w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.....
          </div>
          <div className="absolute top-[295px] left-[0px] w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] h-12 sm:h-16 text-sm text-gray-300">
            <div className="absolute top-[0px] left-[0px] w-[174px] h-12">
              <div className="absolute top-[0px] left-[0px] rounded-smi bg-goldenrod w-[174px] h-12" />
              <b className="absolute top-[13.5px] left-[40px] uppercase">
                Join course
              </b>
            </div>
            <div className="absolute top-[8px] left-[194px] w-[147px] h-8 text-[12px]">
              <b className="absolute top-[7px] left-[38px]">
                See how it works?
              </b>
              <img
                className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden"
                alt=""
                src="/frame.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[1758px] left-[calc(50%_-_540px)] w-[1080px] h-[104px] text-33xl text-mediumslateblue-100">
          <div className="absolute top-[0px] left-[calc(50%_-_218.5px)] leading-[66px]">
            <b>About</b>
            <span className="text-gray-300"> Company</span>
          </div>
          <div className="absolute top-[65px] left-[calc(50%_-_540px)] text-lg leading-[26px] text-darkslategray text-center inline-block w-[1080px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.....
          </div>
        </div>
        <img
          className="absolute h-[2.12%] w-[7.87%] top-[1.57%] right-[92.13%] bottom-[96.32%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
        <img
          className="absolute top-[768px] left-[calc(50%_-_683px)] w-[1366px] h-[162px] object-cover"
          alt=""
          src="/rectangle-2037@2x.png"
        />
        <div className="absolute top-[800.6px] left-[345px] w-[676px] h-[96.9px] text-mini text-white">
          <div className="absolute top-[19.9px] left-[0px] w-[106px] h-[57px]">
            <div className="absolute top-[47px] left-[1px] font-medium">
              Total Courses
            </div>
            <div className="absolute top-[0px] left-[0px] text-27xl font-extrabold">
              150+
            </div>
          </div>
          <div className="absolute top-[18.9px] left-[274px] w-[115px] h-[59px]">
            <div className="absolute top-[49px] left-[0px] font-medium">
              Total Instructor
            </div>
            <div className="absolute top-[0px] left-[14px] text-27xl font-extrabold">
              250
            </div>
          </div>
          <div className="absolute top-[18.9px] left-[557px] w-[119px] h-[59px]">
            <div className="absolute top-[49px] left-[9px] font-medium">
              Total Student
            </div>
            <div className="absolute top-[0px] left-[0px] text-27xl font-extrabold">
              35K+
            </div>
          </div>
          <div className="absolute top-[-0.5px] left-[189.5px] box-border w-px h-[97.9px] border-r-[1px] border-solid border-gray-500" />
          <div className="absolute top-[-0.5px] left-[472.5px] box-border w-px h-[97.9px] border-r-[1px] border-solid border-gray-500" />
        </div>
        <div className="absolute top-[820px] left-[-38.4px] rounded-[50%] bg-goldenrod w-[162px] h-[162px]" />
        <div className="absolute top-[4270.4px] left-[1129.1px] rounded-[50%] bg-goldenrod w-[74px] h-[74px]" />
        <div className="absolute top-[4505.7px] left-[86px] rounded-[50%] bg-goldenrod w-[74px] h-[74px]" />
        <img
          className="absolute top-[2234.5px] left-[0px] rounded-[50%] w-[944px] h-[944px] object-cover"
          alt=""
          src="/ellipse-3@2x.png"
        />
        <div className="absolute top-[706px] left-[1304px] rounded-[50%] bg-goldenrod w-[124px] h-[124px]" />
        <div className="absolute top-[1894px] left-[calc(50%_-_560px)] w-[1120px] h-[612px]">
          <img
            className="absolute top-[0px] left-[calc(50%_-_560px)] rounded-7xl w-[1120px] h-[612px] object-cover"
            alt=""
            src="/rectangle-2040@2x.png"
          />
          <img
            className="absolute top-[248px] left-[502px] w-[116px] h-[116px] overflow-hidden"
            alt=""
            src="/frame1.svg"
          />
        </div>
        <div className="absolute top-[2645px] left-[calc(50%_+_23.1px)] w-[551px] h-[104px] text-33xl">
          <b className="absolute top-[0px] left-[calc(50%_-_275.5px)] leading-[66px]">
            Effortless Enrollment
          </b>
          <div className="absolute top-[61px] left-[calc(50%_-_275.5px)] text-lg leading-[30px] inline-block w-[548px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry....
          </div>
        </div>
        <div className="absolute top-[2785px] left-[calc(50%_+_23.1px)] rounded-smi bg-white w-[536px] h-[94px]" />
        <b className="absolute top-[2819.5px] left-[730.1px] text-17xl">01</b>
        <b className="absolute top-[2824px] left-[809.1px]">Choose a Program</b>
        <div className="absolute top-[2802.9px] left-[792.6px] box-border w-px h-[58.2px] border-r-[1px] border-solid border-gray-600" />
        <div className="absolute top-[2903px] left-[calc(50%_+_23.1px)] rounded-smi bg-white w-[536px] h-[94px]" />
        <b className="absolute top-[2937.5px] left-[730.1px] text-17xl">02</b>
        <b className="absolute top-[2942px] left-[809.1px]">
          Enroll and Submit Documents
        </b>
        <div className="absolute top-[2920.9px] left-[792.6px] box-border w-px h-[58.2px] border-r-[1px] border-solid border-gray-600" />
        <div className="absolute top-[3021px] left-[calc(50%_+_23.1px)] rounded-smi bg-white w-[536px] h-[94px]" />
        <b className="absolute top-[3055.5px] left-[730.1px] text-17xl">03</b>
        <b className="absolute top-[3060px] left-[809.1px]">
          Choose a Date and Time
        </b>
        <div className="absolute top-[3038.9px] left-[792.6px] box-border w-px h-[58.2px] border-r-[1px] border-solid border-gray-600" />
        <div className="absolute top-[3139px] left-[calc(50%_+_23.1px)] rounded-smi bg-white w-[536px] h-[94px]" />
        <b className="absolute top-[3173.5px] left-[730.1px] text-17xl">04</b>
        <b className="absolute top-[3178px] left-[809.1px]">
          Pick an Instructor
        </b>
        <div className="absolute top-[3156.9px] left-[792.6px] box-border w-px h-[58.2px] border-r-[1px] border-solid border-gray-600" />
        <div className="absolute top-[3257px] left-[calc(50%_+_23.1px)] rounded-smi bg-white w-[536px] h-[94px]" />
        <b className="absolute top-[3291.5px] left-[730.1px] text-17xl">05</b>
        <b className="absolute top-[3296px] left-[809.1px]">Then Start</b>
        <div className="absolute top-[3274.9px] left-[792.6px] box-border w-px h-[58.2px] border-r-[1px] border-solid border-gray-600" />
        <img
          className="absolute top-[2825.5px] left-[1251.6px] w-[53px] h-[131px]"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="absolute top-[3067.6px] left-[1251.6px] w-[53px] h-[131px]"
          alt=""
          src="/vector-3.svg"
        />
        <img
          className="absolute top-[2946.1px] left-[643.6px] w-[53px] h-[131px]"
          alt=""
          src="/vector-2.svg"
        />
        <img
          className="absolute top-[3178.1px] left-[643.6px] w-[53px] h-[131px]"
          alt=""
          src="/vector-2.svg"
        />
        <div className="absolute top-[3490px] left-[calc(50%_-_560px)] w-[1120px] h-[572px] text-33xl text-mediumslateblue-100">
          <div className="absolute top-[0px] left-[calc(50%_-_540px)] w-[1080px] h-[104px]">
            <div className="absolute top-[0px] left-[calc(50%_-_182.5px)] leading-[66px]">
              <b>Our</b>
              <span className="text-gray-300">
                <span className="font-medium font-poppins">{` `}</span>
                <span>Programs</span>
              </span>
            </div>
            <div className="absolute top-[65px] left-[calc(50%_-_540px)] text-lg leading-[26px] text-darkslategray text-center inline-block w-[1080px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.....
            </div>
          </div>
          <div className="absolute top-[136px] left-[calc(50%_-_560px)] w-[1120px] h-[436px] text-sm text-gray-300">
            <div className="absolute top-[0px] left-[calc(50%_-_560px)] w-[360px] h-[436px]">
              <div className="absolute top-[0px] left-[calc(50%_-_180px)] w-[360px] h-[436px]">
                <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-smi bg-white shadow-[0px_322px_90px_rgba(0,_0,_0,_0),_0px_206px_82px_rgba(0,_0,_0,_0.01),_0px_116px_69px_rgba(0,_0,_0,_0.03),_0px_51px_51px_rgba(0,_0,_0,_0.05),_0px_13px_28px_rgba(0,_0,_0,_0.06)] w-[360px] h-[412px]" />
                <img
                  className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-t-smi rounded-b-none w-[360px] h-56 object-cover"
                  alt=""
                  src="/rectangle-2041@2x.png"
                />
                <b className="absolute top-[248px] left-[80.5px] text-3xl">
                  English Programs
                </b>
                <div className="absolute top-[280px] left-[calc(50%_-_162px)] leading-[20px] text-dimgray text-center inline-block w-[324px] h-[94px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley......
                </div>
                <div className="absolute top-[388px] left-[93px] w-[174px] h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-smi bg-goldenrod w-[174px] h-12" />
                  <b className="absolute top-[13.5px] left-[46.5px] uppercase">
                    Read more
                  </b>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[calc(50%_-_180px)] w-[360px] h-[436px]">
              <div className="absolute top-[0px] left-[calc(50%_-_180px)] w-[360px] h-[436px]">
                <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-smi bg-white shadow-[0px_322px_90px_rgba(0,_0,_0,_0),_0px_206px_82px_rgba(0,_0,_0,_0.01),_0px_116px_69px_rgba(0,_0,_0,_0.03),_0px_51px_51px_rgba(0,_0,_0,_0.05),_0px_13px_28px_rgba(0,_0,_0,_0.06)] w-[360px] h-[412px]" />
                <img
                  className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-t-smi rounded-b-none w-[360px] h-56 object-cover"
                  alt=""
                  src="/rectangle-20411@2x.png"
                />
                <b className="absolute top-[248px] left-[80.5px] text-3xl">
                  English Programs
                </b>
                <div className="absolute top-[280px] left-[calc(50%_-_162px)] leading-[20px] text-dimgray text-center inline-block w-[324px] h-[94px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley......
                </div>
                <div className="absolute top-[388px] left-[93px] w-[174px] h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-smi bg-goldenrod w-[174px] h-12" />
                  <b className="absolute top-[13.5px] left-[46.5px] uppercase">
                    Read more
                  </b>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[calc(50%_+_200px)] w-[360px] h-[436px]">
              <div className="absolute top-[0px] left-[calc(50%_-_180px)] w-[360px] h-[436px]">
                <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-smi bg-white shadow-[0px_322px_90px_rgba(0,_0,_0,_0),_0px_206px_82px_rgba(0,_0,_0,_0.01),_0px_116px_69px_rgba(0,_0,_0,_0.03),_0px_51px_51px_rgba(0,_0,_0,_0.05),_0px_13px_28px_rgba(0,_0,_0,_0.06)] w-[360px] h-[412px]" />
                <img
                  className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-t-smi rounded-b-none w-[360px] h-56 object-cover"
                  alt=""
                  src="/rectangle-20412@2x.png"
                />
                <b className="absolute top-[248px] left-[80.5px] text-3xl">
                  English Programs
                </b>
                <div className="absolute top-[280px] left-[calc(50%_-_162px)] leading-[20px] text-dimgray text-center inline-block w-[324px] h-[94px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley......
                </div>
                <div className="absolute top-[388px] left-[93px] w-[174px] h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-smi bg-goldenrod w-[174px] h-12" />
                  <b className="absolute top-[13.5px] left-[46.5px] uppercase">
                    Read more
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1056px] left-[calc(50%_-_389.5px)] text-33xl leading-[66px] text-mediumslateblue-100">
          <b>
            <span>Why we are</span>
          </b>
          <span className="text-gray-300">
            <b>{` `}</b>
            <span>best from others?</span>
          </span>
        </div>
        <div className="absolute top-[1121px] left-[calc(50%_-_540px)] text-lg leading-[26px] text-darkslategray text-center inline-block w-[1080px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.....
        </div>
        <div className="absolute top-[1192px] left-[calc(50%_-_180px)] w-[360px] h-[236px]">
          <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-smi box-border w-[360px] h-[236px] border-[1px] border-solid border-mediumslateblue-200" />
          <div className="absolute top-[120px] left-[85.5px] font-semibold">
            Optimal Ideation
          </div>
          <div className="absolute top-[154px] left-[calc(50%_-_162px)] text-sm leading-[20px] text-dimgray text-center inline-block w-[324px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.....
          </div>
          <div className="absolute top-[32px] left-[148px] w-16 h-16">
            <div className="absolute top-[0px] left-[0px] rounded-smi bg-yellowgreen shadow-[0px_8px_21px_rgba(167,_206,_74,_0.25)] w-16 h-16" />
            <img
              className="absolute top-[14px] left-[14px] w-9 h-9 overflow-hidden"
              alt=""
              src="/frame2.svg"
            />
          </div>
        </div>
        <div className="absolute top-[1192px] left-[calc(50%_+_200px)] w-[360px] h-[236px]">
          <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-smi box-border w-[360px] h-[236px] border-[1px] border-solid border-mediumslateblue-200" />
          <div className="absolute top-[120px] left-[81px] font-semibold">
            Favorable Setting
          </div>
          <div className="absolute top-[154px] left-[calc(50%_-_162px)] text-sm leading-[20px] text-dimgray text-center inline-block w-[324px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.....
          </div>
          <div className="absolute top-[32px] left-[148px] w-16 h-16">
            <div className="absolute top-[0px] left-[0px] rounded-smi bg-cornflowerblue shadow-[0px_8px_21px_rgba(77,_147,_223,_0.25)] w-16 h-16" />
            <img
              className="absolute top-[14px] left-[14px] w-9 h-9 overflow-hidden"
              alt=""
              src="/frame3.svg"
            />
          </div>
        </div>
        <div className="absolute top-[1192px] left-[calc(50%_-_560px)] w-[360px] h-[236px]">
          <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-smi bg-white shadow-[0px_322px_90px_rgba(0,_0,_0,_0),_0px_206px_82px_rgba(0,_0,_0,_0.01),_0px_116px_69px_rgba(0,_0,_0,_0.03),_0px_51px_51px_rgba(0,_0,_0,_0.05),_0px_13px_28px_rgba(0,_0,_0,_0.06)] w-[360px] h-[236px]" />
          <div className="absolute top-[120px] left-[92.5px] font-semibold">
            Digital Platform
          </div>
          <div className="absolute top-[154px] left-[calc(50%_-_162px)] text-sm leading-[20px] text-dimgray text-center inline-block w-[324px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.....
          </div>
          <div className="absolute top-[32px] left-[148px] w-16 h-16">
            <div className="absolute top-[0px] left-[0px] rounded-smi bg-blueviolet shadow-[0px_8px_21px_rgba(152,_72,_255,_0.25)] w-16 h-16" />
            <img
              className="absolute top-[14px] left-[14px] w-9 h-9 overflow-hidden"
              alt=""
              src="/frame4.svg"
            />
          </div>
        </div>
        <div className="absolute top-[1448px] left-[calc(50%_-_560px)] w-[360px] h-[236px]">
          <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-smi box-border w-[360px] h-[236px] border-[1px] border-solid border-mediumslateblue-200" />
          <div className="absolute top-[120px] left-[68px] font-semibold">
            Effective Interaction
          </div>
          <div className="absolute top-[154px] left-[calc(50%_-_162px)] text-sm leading-[20px] text-dimgray text-center inline-block w-[324px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.....
          </div>
          <div className="absolute top-[32px] left-[148px] w-16 h-16">
            <div className="absolute top-[0px] left-[0px] rounded-smi bg-hotpink shadow-[0px_8px_21px_rgba(255,_96,_168,_0.25)] w-16 h-16" />
            <img
              className="absolute top-[14px] left-[14px] w-9 h-9 overflow-hidden"
              alt=""
              src="/frame5.svg"
            />
          </div>
        </div>
        <div className="absolute top-[1448px] left-[calc(50%_-_180px)] w-[360px] h-[236px]">
          <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-smi box-border w-[360px] h-[236px] border-[1px] border-solid border-mediumslateblue-200" />
          <div className="absolute top-[120px] left-[107.5px] font-semibold">
            Flexible Time
          </div>
          <div className="absolute top-[154px] left-[calc(50%_-_162px)] text-sm leading-[20px] text-dimgray text-center inline-block w-[324px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.....
          </div>
          <div className="absolute top-[32px] left-[148px] w-16 h-16">
            <div className="absolute top-[0px] left-[0px] rounded-smi bg-tomato shadow-[0px_8px_21px_rgba(246,_103,_66,_0.25)] w-16 h-16" />
            <img
              className="absolute top-[14px] left-[14px] w-9 h-9 overflow-hidden"
              alt=""
              src="/frame6.svg"
            />
          </div>
        </div>
        <div className="absolute top-[1448px] left-[calc(50%_+_200px)] w-[360px] h-[236px]">
          <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-smi box-border w-[360px] h-[236px] border-[1px] border-solid border-mediumslateblue-200" />
          <div className="absolute top-[120px] left-[135px] font-semibold">
            Reliable
          </div>
          <div className="absolute top-[154px] left-[calc(50%_-_162px)] text-sm leading-[20px] text-dimgray text-center inline-block w-[324px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.....
          </div>
          <div className="absolute top-[32px] left-[148px] w-16 h-16">
            <div className="absolute top-[0px] left-[0px] rounded-smi bg-goldenrod shadow-[0px_8px_21px_rgba(255,_207,_89,_0.25)] w-16 h-16" />
            <img
              className="absolute top-[14px] left-[14px] w-9 h-9 overflow-hidden"
              alt=""
              src="/frame7.svg"
            />
          </div>
        </div>
        <div className="absolute top-[4136px] left-[calc(50%_-_540px)] w-[1080px] h-[104px] text-33xl text-mediumslateblue-100">
          <div className="absolute top-[0px] left-[calc(50%_-_297.5px)] leading-[66px]">
            <b>What</b>
            <span className="text-gray-300">
              <span className="font-medium font-poppins">{` `}</span>
              <span>our students Say</span>
            </span>
          </div>
          <div className="absolute top-[65px] left-[calc(50%_-_540px)] text-lg leading-[26px] text-darkslategray text-center inline-block w-[1080px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.....
          </div>
        </div>
        <div className="absolute top-[4612px] left-[588px] w-[190px] h-10 text-5xl">
          <b className="absolute top-[0px] left-[0px]">James Thomas</b>
          <div className="absolute top-[29px] left-[57px] text-base">
            GERMANY
          </div>
        </div>
        <img
          className="absolute top-[4307.4px] left-[calc(50%_-_560px)] rounded-7xl w-[1120px] h-[236px] object-cover"
          alt=""
          src="/rectangle-20371@2x.png"
        />
        <img
          className="absolute top-[4276px] left-[180.7px] w-[64.6px] h-[53.4px]"
          alt=""
          src="/.svg"
        />
        <div className="absolute top-[4364.4px] left-[calc(50%_-_510px)] text-lg leading-[28px] text-white text-center inline-block w-[1020px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the
          1960s.........
        </div>
        <img
          className="absolute top-[4485.7px] left-[626px] rounded-7xl w-[114px] h-[114px] object-cover"
          alt=""
          src="/rectangle-2042@2x.png"
        />
        <div className="absolute bottom-[0px] left-[calc(50%_-_683px)] bg-gray-400 w-[1366px] h-[354px]" />
        <div className="absolute top-[4780px] left-[123px] w-[1120px] h-[246px] text-5xl text-white">
          <div className="absolute top-[0px] left-[625.3px] w-[129px] h-[180px]">
            <b className="absolute top-[0px] left-[0px]">Company</b>
            <div className="absolute top-[49px] left-[0px] text-base leading-[40px] font-work-sans">
              <p className="m-0">How we work</p>
              <p className="m-0">Terms of service</p>
              <p className="m-0">Pricing</p>
              <p className="m-0">FAQ</p>
            </div>
          </div>
          <div className="absolute top-[0px] left-[423.7px] w-32 h-[180px]">
            <b className="absolute top-[0px] left-[0px]">About</b>
            <div className="absolute top-[49px] left-[0px] text-base leading-[40px] font-work-sans">
              <p className="m-0">Menu</p>
              <p className="m-0">Features</p>
              <p className="m-0">{`News & Blogs`}</p>
              <p className="m-0">{`Help & Supports`}</p>
            </div>
          </div>
          <div className="absolute top-[0px] left-[828px] w-[292px] h-52">
            <b className="absolute top-[0px] left-[0px]">Contact Us</b>
            <div className="absolute top-[49px] left-[0px] w-[292px] h-[159px] text-base font-work-sans">
              <div className="absolute top-[0px] left-[0px] inline-block w-[292px]">
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                Bangalore-560016
              </div>
              <div className="absolute top-[62px] left-[0px]">
                +1 202-918-2132
              </div>
              <div className="absolute top-[105px] left-[0px]">
                education@mail.com
              </div>
              <div className="absolute top-[148px] left-[0px]">
                www.education.com
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[380px] h-[198px] text-[62px]">
            <b className="absolute top-[0px] left-[0px]">Education</b>
            <div className="absolute top-[68px] left-[0px] text-sm leading-[26px] font-light inline-block w-[380px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <img
            className="absolute h-[9.76%] w-[13.93%] top-[90.24%] right-[86.07%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-54.svg"
          />
        </div>
        <img
          className="absolute top-[2580px] left-[0.3px] w-[569px] h-[836px] object-cover"
          alt=""
          src="/friendlyconfidentwomanwritingherorganizerisolatedwhitewall-1@2x.png"
        />
      </div>
    </>
  );
};

export default EducationWebsiteDesign;

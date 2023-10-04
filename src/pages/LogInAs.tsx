import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LogInAs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/log-in1");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/log-in2");
  }, [navigate]);

  return (
    <div className="relative bg-whitesmoke-100 w-full h-[69.81rem] overflow-hidden text-left text-[1.25rem] text-gray-300 font-poppins">
      <img
        className="absolute top-[29.75rem] left-[0rem] w-[74.69rem] h-[45.63rem] object-cover"
        alt=""
        src="/6461-1@2x.png"
      />
      <img
        className="absolute top-[7.19rem] left-[8.75rem] w-[12.88rem] h-[4.75rem] object-cover"
        alt=""
        src="/logo-12@2x.png"
      />
      <b className="absolute top-[21.69rem] left-[8.88rem] text-[2rem] text-gray-700">
        Welcome to VeritEd!
      </b>
      <div className="absolute top-[25.25rem] left-[8.88rem] text-[1.75rem] leading-[206.5%] inline-block w-[26.13rem]">{`Over 10,000 courses made availabe to you on Verited. Sign into your VeritEd  account. `}</div>
      <div className="absolute top-[68.13rem] left-[2.06rem] text-[0.81rem] leading-[206.5%] inline-block w-[46.13rem]">
        © 2022 VeritEd Privacy Policy Terms and Conditions Contact
      </div>
      <div className="absolute top-[9.25rem] left-[52.75rem] text-[4rem] font-black font-nunito inline-block w-[15.31rem] text-gray-700">
        <span>{`Log `}</span>
        <span className="text-lightseagreen-200">In</span>
      </div>
      <div
        className="absolute top-[63.75rem] left-[52.94rem] leading-[206.5%] font-medium inline-block w-[29.56rem] cursor-pointer"
        onClick={onDontHaveAnClick}
      >
        <span>{`Don’t have an account? `}</span>
        <span className="text-lightseagreen-200">Sign Up</span>
      </div>
      <div
        className="absolute top-[21.81rem] left-[52.75rem] w-[39.88rem] h-[6.31rem] cursor-pointer"
        onClick={onGroupContainerClick}
      >
        <img
          className="absolute top-[-0.75rem] left-[-1rem] w-[8.31rem] h-[8.31rem]"
          alt=""
          src="/group-775.svg"
        />
        <div className="absolute top-[1.88rem] left-[10.31rem] leading-[206.5%] font-medium inline-block w-[29.56rem]">
          As an Instructor/ Tutor
        </div>
      </div>
      <div
        className="absolute top-[32.38rem] left-[52.75rem] w-[39.88rem] h-[6.31rem] cursor-pointer"
        onClick={onGroupContainer1Click}
      >
        <img
          className="absolute top-[-0.75rem] left-[-1rem] w-[8.31rem] h-[8.31rem]"
          alt=""
          src="/group-7771.svg"
        />
        <div className="absolute top-[1.69rem] left-[10.31rem] leading-[206.5%] font-medium inline-block w-[29.56rem]">
          As a Parent/ Guardian
        </div>
      </div>
      <div
        className="absolute top-[42.94rem] left-[52.75rem] w-[39.88rem] h-[6.31rem] cursor-pointer"
        onClick={onGroupContainer2Click}
      >
        <img
          className="absolute top-[-0.75rem] left-[-1rem] w-[8.31rem] h-[8.31rem]"
          alt=""
          src="/group-7773.svg"
        />
        <div className="absolute top-[1.56rem] left-[10.31rem] leading-[206.5%] font-medium inline-block w-[29.56rem]">
          As a Student
        </div>
      </div>
      <div className="absolute top-[10.24rem] left-[107.01rem] w-[45.43rem] h-[58.11rem] [transform:_rotate(-165deg)] [transform-origin:0_0]">
        <div className="absolute top-[55.16rem] left-[-14.78rem] rounded-2xs bg-lightslategray w-[1.12rem] h-[1.12rem] [transform:_rotate(-139.7deg)] [transform-origin:0_0]" />
        <div className="absolute top-[-7.27rem] left-[-41.97rem] rounded-sm bg-lightseagreen-400 w-[3.16rem] h-[3.11rem] [transform:_rotate(-60.39deg)] [transform-origin:0_0]" />
        <div className="absolute top-[27.44rem] left-[-7.87rem] rounded-8xs bg-lightslategray w-[1.12rem] h-[1.12rem] [transform:_rotate(-139.7deg)] [transform-origin:0_0]" />
        <div className="absolute top-[31.85rem] left-[-52.25rem] rounded-8xs bg-lightslategray w-[1.12rem] h-[1.12rem] [transform:_rotate(-139.7deg)] [transform-origin:0_0]" />
        <div className="absolute top-[38.1rem] left-[-25.31rem] rounded-2xs bg-darkcyan-200 w-[1.71rem] h-[1.71rem] [transform:_rotate(-139.7deg)] [transform-origin:0_0]" />
        <div className="absolute top-[45.65rem] left-[-41.49rem] rounded-2xs bg-darkcyan-200 w-[1.71rem] h-[1.71rem] [transform:_rotate(-139.7deg)] [transform-origin:0_0]" />
        <div className="absolute top-[4.15rem] left-[-1.18rem] rounded-lg bg-darkcyan-200 w-[4.25rem] h-[4.19rem] [transform:_rotate(-88.79deg)] [transform-origin:0_0]" />
        <div className="absolute top-[19.49rem] left-[-16.86rem] rounded-sm bg-darkcyan-300 w-[2.25rem] h-[2.21rem] [transform:_rotate(-60.39deg)] [transform-origin:0_0]" />
        <div className="absolute top-[4.07rem] left-[-25.82rem] rounded-sm bg-darkslategray-300 w-[2.25rem] h-[2.21rem] [transform:_rotate(-60.39deg)] [transform-origin:0_0]" />
      </div>
      <img
        className="absolute top-[53.16rem] left-[77.78rem] w-[30.22rem] h-[16.66rem]"
        alt=""
        src="/line-7.svg"
      />
    </div>
  );
};

export default LogInAs;

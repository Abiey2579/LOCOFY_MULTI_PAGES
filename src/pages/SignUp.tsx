import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignUp: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/log-in-as");
  }, [navigate]);

  return (
    <div className="relative bg-whitesmoke-300 w-full h-[69.81rem] overflow-hidden text-left text-[2rem] text-gray-300 font-poppins">
      <img
        className="absolute top-[26rem] left-[0rem] w-[44.94rem] h-[38.94rem] object-cover"
        alt=""
        src="/7587589797-workingafterstudyingpngofstudyinggirltransparent-1@2x.png"
      />
      <img
        className="absolute top-[7.19rem] left-[8.75rem] w-[12.88rem] h-[4.75rem] object-cover"
        alt=""
        src="/logo-12@2x.png"
      />
      <b className="absolute top-[16.69rem] left-[8.88rem] text-gray-700">
        Welcome to VeritEd!
      </b>
      <div className="absolute top-[20.25rem] left-[8.88rem] text-[1.13rem] leading-[206.5%] inline-block w-[26.13rem]">
        VeritEd connects students and their families with qualified tutors for
        improved learning outcomes.
      </div>
      <div className="absolute top-[68.13rem] left-[2.06rem] text-[0.81rem] leading-[206.5%] inline-block w-[46.13rem]">
        © 2022 VeritEd Privacy Policy Terms and Conditions Contact
      </div>
      <div className="absolute top-[0rem] left-[44.75rem] bg-azure w-[63.25rem] h-[69.81rem] overflow-y-auto text-[1rem] text-gray-1200">
        <div
          className="absolute top-[15.31rem] left-[10.63rem] text-[1.25rem] leading-[206.5%] font-medium inline-block w-[29.56rem] cursor-pointer text-gray-300"
          onClick={onAlreadyHaveAnClick}
        >
          <span>{`Already have an account? `}</span>
          <span className="text-lightseagreen-200">Log in</span>
        </div>
        <div className="absolute top-[83.38rem] left-[20.56rem] leading-[206.5%] font-medium text-gray-1000 text-center inline-block w-[10.88rem]">
          Or Sign Up
        </div>
        <div className="absolute top-[71.81rem] left-[13.88rem] leading-[206.5%] font-medium inline-block w-[27.63rem] text-gray-1000">
          <span>{`I agree to `}</span>
          <span className="text-lightseagreen-200">
            VeritEd Terms of Service
          </span>
          <span>{` and `}</span>
          <span className="text-lightseagreen-200">Privacy Policies</span>
        </div>
        <div className="absolute top-[9.06rem] left-[10.63rem] text-[4rem] font-black font-nunito inline-block w-[15.31rem] text-gray-700">
          <span>{`Sign `}</span>
          <span className="text-lightseagreen-200">Up</span>
        </div>
        <div className="absolute top-[20.94rem] left-[10.5rem] rounded-mini bg-white w-[31rem] h-[3.06rem]" />
        <div className="absolute top-[26.75rem] left-[10.5rem] rounded-mini bg-white w-[31rem] h-[3.06rem]" />
        <div className="absolute top-[32.56rem] left-[10.5rem] rounded-mini bg-white w-[31rem] h-[3.06rem]" />
        <div className="absolute top-[38.38rem] left-[10.5rem] rounded-mini bg-white w-[31rem] h-[3.06rem]" />
        <div className="absolute top-[52.63rem] left-[10.5rem] rounded-mini bg-white w-[31rem] h-[3.06rem]" />
        <div className="absolute top-[60rem] left-[10.5rem] rounded-mini bg-white w-[31rem] h-[3.06rem]" />
        <div className="absolute top-[65.81rem] left-[10.5rem] rounded-mini bg-white w-[31rem] h-[3.06rem]" />
        <div className="absolute top-[76.94rem] left-[19.19rem] rounded-12xl bg-lightseagreen-200 w-[13.63rem] h-[4.31rem]" />
        <div className="absolute top-[87.44rem] left-[10.5rem] rounded-20xl bg-white w-[13.63rem] h-[4.31rem]" />
        <div className="absolute top-[87.31rem] left-[27.75rem] rounded-20xl box-border w-[13.88rem] h-[4.56rem] border-[2px] border-solid border-lightseagreen-200" />
        <div className="absolute top-[45.63rem] left-[10.5rem] rounded-3xs bg-white w-[1.94rem] h-[1.94rem]" />
        <div className="absolute top-[71.88rem] left-[10.69rem] rounded-3xs bg-white w-[1.94rem] h-[1.94rem]" />
        <div className="absolute top-[45.63rem] left-[21.56rem] rounded-3xs bg-white w-[1.94rem] h-[1.94rem]" />
        <div className="absolute top-[45.63rem] left-[32.63rem] rounded-3xs bg-white w-[1.94rem] h-[1.94rem]" />
        <div className="absolute top-[84.66rem] left-[10.47rem] box-border w-[10.38rem] h-[0.06rem] border-t-[1px] border-solid border-silver-200" />
        <div className="absolute top-[84.66rem] left-[31.16rem] box-border w-[10.38rem] h-[0.06rem] border-t-[1px] border-solid border-silver-200" />
        <div className="absolute top-[21.44rem] left-[12.19rem] leading-[206.5%] flex items-center w-[29.56rem]">
          Full name
        </div>
        <div className="absolute top-[27.25rem] left-[12.19rem] leading-[206.5%] flex items-center w-[29.56rem]">
          Email Address
        </div>
        <div className="absolute top-[33.06rem] left-[12.25rem] leading-[206.5%] flex items-center w-[29.56rem]">
          Password
        </div>
        <div className="absolute top-[38.88rem] left-[12.19rem] leading-[206.5%] flex items-center w-[29.56rem]">
          Confirm Password
        </div>
        <div className="absolute top-[53.13rem] left-[12.19rem] leading-[206.5%] flex items-center w-[29.56rem]">
          Please Select
        </div>
        <div className="absolute top-[60.5rem] left-[12.19rem] leading-[206.5%] flex items-center w-[29.56rem]">
          Please Select
        </div>
        <div className="absolute top-[66.31rem] left-[12.19rem] leading-[206.5%] flex items-center w-[29.56rem]">
          Security Question Answer
        </div>
        <div className="absolute top-[42.94rem] left-[10.88rem] leading-[206.5%] text-gray-700">
          I am a
        </div>
        <div className="absolute top-[45.56rem] left-[13.5rem] leading-[206.5%] font-light text-darkslategray-100">
          Tutor
        </div>
        <div className="absolute top-[45.63rem] left-[24.56rem] leading-[206.5%] font-light text-darkslategray-100">
          Student
        </div>
        <div className="absolute top-[45.63rem] left-[35.63rem] leading-[206.5%] font-light text-darkslategray-100">
          Parent
        </div>
        <div className="absolute top-[49.94rem] left-[10.88rem] leading-[206.5%] text-gray-700">
          How did you hear about us?
        </div>
        <div className="absolute top-[57.31rem] left-[10.88rem] leading-[206.5%] text-gray-700">
          Select Security Question
        </div>
        <div className="absolute top-[77.94rem] left-[23.06rem] text-[1.5rem] font-semibold text-white">
          Sign Up
        </div>
        <div className="absolute top-[88.56rem] left-[15.63rem] leading-[206.5%] text-gray-400">
          using Google
        </div>
        <div className="absolute top-[88.56rem] left-[32rem] leading-[206.5%] text-gray-400">
          using Facebook
        </div>
        <img
          className="absolute h-[2.95%] w-[3.19%] top-[126.86%] right-[76.26%] bottom-[-29.81%] left-[20.55%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-7692.svg"
        />
        <img
          className="absolute h-[3.3%] w-[1.84%] top-[126.68%] right-[50.93%] bottom-[-29.97%] left-[47.23%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/xmlid-8341.svg"
        />
        <div className="absolute top-[61.44rem] left-[39.25rem] w-[0.23rem] h-[0.38rem] [transform:_rotate(90deg)] [transform-origin:0_0]">
          <div className="absolute top-[0rem] left-[-0.04rem] bg-gray-300 w-[0.06rem] h-[0.26rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />
          <div className="absolute top-[0.18rem] left-[-0.15rem] bg-gray-300 w-[0.06rem] h-[0.26rem] [transform:_rotate(135deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute top-[54.06rem] left-[39.25rem] w-[0.23rem] h-[0.38rem] [transform:_rotate(90deg)] [transform-origin:0_0]">
          <div className="absolute top-[0rem] left-[-0.04rem] bg-gray-300 w-[0.06rem] h-[0.26rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />
          <div className="absolute top-[0.18rem] left-[-0.15rem] bg-gray-300 w-[0.06rem] h-[0.26rem] [transform:_rotate(135deg)] [transform-origin:0_0]" />
        </div>
        <img
          className="absolute h-[1.63%] w-[2.23%] top-[47.99%] right-[36.8%] bottom-[50.39%] left-[60.97%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/iconlylightoutlineshow1.svg"
        />
        <div className="absolute top-[5.25rem] left-[4.06rem] w-[51.97rem] h-[92.91rem]">
          <div className="absolute top-[57.1rem] left-[0rem] rounded-2xs bg-lightslategray w-[1.12rem] h-[1.12rem] [transform:_rotate(-25.3deg)] [transform-origin:0_0]" />
          <div className="absolute top-[3.84rem] left-[42.42rem] rounded-sm bg-darkcyan-100 w-[3.16rem] h-[3.11rem] [transform:_rotate(-104.61deg)] [transform-origin:0_0]" />
          <div className="absolute top-[28.54rem] left-[0.5rem] rounded-8xs bg-lightslategray w-[1.12rem] h-[1.12rem] [transform:_rotate(-25.3deg)] [transform-origin:0_0]" />
          <div className="absolute top-[47.58rem] left-[49.69rem] rounded-2xs bg-darkcyan-200 w-[1.71rem] h-[1.71rem] [transform:_rotate(-25.3deg)] [transform-origin:0_0]" />
          <div className="absolute top-[58.23rem] left-[40.94rem] rounded-2xs bg-darkcyan-200 w-[1.71rem] h-[1.71rem] [transform:_rotate(-25.3deg)] [transform-origin:0_0]" />
          <div className="absolute top-[91.36rem] left-[40.94rem] rounded-2xs bg-darkcyan-200 w-[1.71rem] h-[1.71rem] [transform:_rotate(-25.3deg)] [transform-origin:0_0]" />
          <div className="absolute top-[4.31rem] left-[0.06rem] rounded-lg bg-darkcyan-200 w-[4.25rem] h-[4.19rem] [transform:_rotate(-76.21deg)] [transform-origin:0_0]" />
          <div className="absolute top-[5.54rem] left-[4.33rem] rounded-sm bg-darkcyan-300 w-[2.25rem] h-[2.21rem] [transform:_rotate(-104.61deg)] [transform-origin:0_0]" />
          <div className="absolute top-[28.23rem] left-[43.75rem] rounded-sm bg-darkslategray-300 w-[2.25rem] h-[2.21rem] [transform:_rotate(-104.61deg)] [transform-origin:0_0]" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

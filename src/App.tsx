import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Help from "./pages/Help";
import Pricing from "./pages/Pricing";
import Pricing1 from "./pages/Pricing1";
import WhenYouClickOnACourseYou from "./pages/WhenYouClickOnACourseYou";
import WhenYouClickOnExploreThe from "./pages/WhenYouClickOnExploreThe";
import AboutUs from "./pages/AboutUs";
import AboutUs1 from "./pages/AboutUs1";
import Legal from "./pages/Legal";
import ValueCode from "./pages/ValueCode";
import ResetPassword from "./pages/ResetPassword";
import ResetPassword1 from "./pages/ResetPassword1";
import ResetPassword2 from "./pages/ResetPassword2";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPassword1 from "./pages/ForgotPassword1";
import ForgotPassword2 from "./pages/ForgotPassword2";
import LogIn from "./pages/LogIn";
import LogIn1 from "./pages/LogIn1";
import LogIn2 from "./pages/LogIn2";
import LogInAs from "./pages/LogInAs";
import SignUp from "./pages/SignUp";
import Homepage from "./pages/Homepage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/pricing":
        title = "";
        metaDescription = "";
        break;
      case "/pricing1":
        title = "";
        metaDescription = "";
        break;
      case "/when-you-click-on-a-course-you-are-interested-in":
        title = "";
        metaDescription = "";
        break;
      case "/when-you-click-on-explore-the-most-popular-categories":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/about-us1":
        title = "";
        metaDescription = "";
        break;
      case "/legal":
        title = "";
        metaDescription = "";
        break;
      case "/value-code":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password1":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password2":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password1":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password2":
        title = "";
        metaDescription = "";
        break;
      case "/log-in2":
        title = "";
        metaDescription = "";
        break;
      case "/log-in1":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/log-in-as":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Help />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/pricing1" element={<Pricing1 />} />
      <Route
        path="/when-you-click-on-a-course-you-are-interested-in"
        element={<WhenYouClickOnACourseYou />}
      />
      <Route
        path="/when-you-click-on-explore-the-most-popular-categories"
        element={<WhenYouClickOnExploreThe />}
      />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/about-us1" element={<AboutUs1 />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/value-code" element={<ValueCode />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/reset-password1" element={<ResetPassword1 />} />
      <Route path="/reset-password2" element={<ResetPassword2 />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-password1" element={<ForgotPassword1 />} />
      <Route path="/forgot-password2" element={<ForgotPassword2 />} />
      <Route path="/log-in2" element={<LogIn />} />
      <Route path="/log-in1" element={<LogIn1 />} />
      <Route path="/log-in" element={<LogIn2 />} />
      <Route path="/log-in-as" element={<LogInAs />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}
export default App;

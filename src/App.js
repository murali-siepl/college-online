import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import JoinCourse from "./components/JoinCourse";
import WhyWeare from "./components/WhyWeare";
import Courses from "./components/Courses";
import AboutCompany from "./components/AboutCompany";
import OurPrograms from "./components/OurPrograms";
import StudentsSay from "./components/StudentsSay";
import Founder from "./components/Founder";
import Footer from "./components/Footer";
import Enrollment from "./components/Enrollment";

function App() {
  return (
    <>
      <Header />
      <JoinCourse />
      <Courses />
      <WhyWeare />
      <AboutCompany />
      <Enrollment />
      <OurPrograms />
      <StudentsSay />
      <Founder />
      <Footer />
    </>
  );
}

export default App;

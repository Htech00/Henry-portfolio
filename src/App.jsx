import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhoAreYou from "./pages/WhoAreYou";
import DeveloperPage from "./pages/HomePage";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import TopBar from "./components/TopBar";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Education from "./pages/Education";
import Footer from "./components/Footer";
import RootLayout from "./rootlayout/RootLayout";
import { Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MobileFooter from "./components/MobileFooter";

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(() => {
    const entered = localStorage.getItem("userEntered");
    return entered === "true";
  });
  useEffect(() => {
    setIsLoading(true);
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timeOut);
  }, [activeTab]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex mx-auto items-center justify-center mt-50 gap-3">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-[#425d82]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
          <i className="text-base text-[#ffffff]/50">
            Loading {activeTab}.jsx Page
          </i>
        </div>
      );
    }
    switch (activeTab) {
      case "Home":
        return <DeveloperPage />;
      case "AboutMe":
        return <AboutMe />;
      case "Projects":
        return <Projects />;
      case "Skills":
        return <Skills />;
      case "Services":
        return <Services />;
      case "Education":
        return <Education />;
      case "Contact":
        return <ContactMe />;
      default:
        return <DeveloperPage />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<WhoAreYou setIsAuthorized={setIsAuthorized} />}
        />
        <Route
          path="/developer"
          element={
            isAuthorized ? (
              <div className="flex flex-col md:flex-col h-screen  md:overflow-hidden">
                <div className="flex md:flex-row h-screen  overflow-hidden">
                  <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                  <div className="flex-1 flex flex-col">
                    <TopBar />
                    <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                    <div className="p-4 overflow-auto flex md:flex-col">
                      {renderContent()}
                    </div>
                  </div>
                </div>
                <div className="md:inline hidden">
                  <Footer />
                </div>
                <div className="md:hidden inline">
                  <MobileFooter />
                </div>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/client"
          element={isAuthorized ? <RootLayout /> : <Navigate to="/" replace />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

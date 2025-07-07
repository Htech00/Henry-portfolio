import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WhoAreYou = ({ setIsAuthorized }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const entered = localStorage.getItem("userEntered");

    if (entered === "true") {
      if (role === "developer") {
        navigate("/developer", { replace: true });
      } else if (role === "client") {
        navigate("/client", { replace: true });
      }
    }
  }, [navigate]);

  const handleChoice = (role) => {
    const lowerRole = role.toLowerCase();
    localStorage.setItem("userEntered", "true");
    localStorage.setItem("userRole", lowerRole);
    setIsAuthorized(true);

    if (lowerRole === "developer") {
      navigate("/developer", { replace: true });
    } else if (lowerRole === "client") {
      navigate("/client", { replace: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-client">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Who are you?
        </h1>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleChoice("developer")}
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
          >
            Developer
          </button>

          <button
            onClick={() => handleChoice("client")}
            className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition cursor-pointer"
          >
            Client
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoAreYou;

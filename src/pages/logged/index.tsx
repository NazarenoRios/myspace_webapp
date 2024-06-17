import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { initializeSelectedOptionFromLocalStorage } from "../../redux/reducers/sidebar";
import Home from "../../modules/Home/Home";
import Profile from "../../modules/Profile/Profile";

const HomePage = () => {
  const { darkBackground, selectedOption } = useSelector(
    (state: any) => state.sidebar
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeSelectedOptionFromLocalStorage());
  }, []);

  const renderContent = () => {
    switch (selectedOption) {
      case 1:
        return <Home />;
      case 2:
        return <Profile />;
      case 3:
        return (
          <div>
            <h1>Renderizando contenido para ID 3</h1>
          </div>
        );
      case 4:
        return (
          <div>
            <h1>Renderizando contenido para ID 4</h1>
          </div>
        );
      case 5:
        return (
          <div>
            <h1>Renderizando contenido para ID 5</h1>
          </div>
        );
      case 6:
        return (
          <div>
            <h1>Renderizando contenido para ID 6</h1>
          </div>
        );
      case 7:
        return (
          <div>
            <h1>Renderizando contenido para ID 7</h1>
          </div>
        );
      case 8:
        return (
          <div>
            <h1>Renderizando contenido para ID 8</h1>
          </div>
        );
      // Cambiar por error 404 a futuro
      default:
        return <Home />;
    }
  };

  return (
    <div
      className={`w-full h-screen bg-cover object-cover flex items-center ${
        darkBackground ? "bg-mainDark" : "bg-main"
      }`}
    >
      <Sidebar />
      {renderContent()}
    </div>
  );
};

export default HomePage;

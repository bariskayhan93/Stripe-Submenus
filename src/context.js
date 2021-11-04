import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setLocation(coordinates);
    setPage(page);

    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        openSubmenu,
        closeSubmenu,
        isSubmenuOpen,
        page,
        location,
        openModal,
        closeModal,
        isModalOpen

      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

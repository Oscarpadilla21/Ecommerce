import React, { createContext, useState } from 'react'

export const SidebarContexto = createContext();
const SidebarProvider = ({ children }) => {
  
    const [ isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    }

    return <SidebarContexto.Provider value={{ isOpen, setIsOpen,handleClose}}>{children}</SidebarContexto.Provider>;
  
};

export default SidebarProvider;

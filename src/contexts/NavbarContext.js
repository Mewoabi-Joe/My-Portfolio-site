//I want to create a navbar context such that when the gallery is open the fixed-top class is removed from the navbar. Just a single state fixedTop that is true by default and false when the gallery is open. I want to use this context in the Navbar.js file to conditionally add the fixed-top class to the navbar. The Navbar.js file should be updated to use the context. and in the useEffect of the ImageGallery component when it mounts

import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export const useNavbarContext = () => {
    return useContext(NavbarContext);
}

export const NavbarProvider = ({children}) => {
    const [fixedTop, setFixedTop] = useState(true);

    return (
        <NavbarContext.Provider value={{fixedTop, setFixedTop}}>
            {children}
        </NavbarContext.Provider>
    )
}


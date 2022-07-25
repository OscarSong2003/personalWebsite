import React from "react";
import NavBar from "./common/NavBar";
import { Box } from "@chakra-ui/react";
import LayoutPage from "./common/LayoutPage";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

const MainPage = (): React.ReactElement => {
    return (
        <LayoutPage>
            <NavBar />
            <Home />
            <About />
            <Experience />
            <Projects />
        </LayoutPage>
    )
}

export default MainPage; 
import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import InnerPages from "../Components/InnerPages";
import Demos from "../Components/Demos";

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar />
            <Demos/>
            <InnerPages/>
            <Footer />
        </>
    );
};
export default Projects;


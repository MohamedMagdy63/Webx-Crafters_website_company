import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import InnerPages from "../Components/InnerPages";

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar />
            <InnerPages/>
            <Footer />
        </>
    );
};
export default Projects;


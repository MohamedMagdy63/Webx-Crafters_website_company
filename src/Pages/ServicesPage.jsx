import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Services from "../Components/Services";

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar/>
            <Services/>
            <Footer/>
        </>
    );
};
export default ServicesPage;


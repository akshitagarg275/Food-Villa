import React from "react";
import  ReactDOM  from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css"





const AppLayout = () => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        {/**
         Header
            -Logo
            -nav Items(right side)
            -cart
         Body
            -Search Bar
            -RestrauntList
                -Restraunt Card
                    -Image
                    -Name
                    -Rating
                    -Cuisines
        Footer
            -Links
            -Copyright 
    */}
    </>
    )
    
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)



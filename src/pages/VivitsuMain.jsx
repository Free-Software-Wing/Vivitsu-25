import React from "react";
import Highlights from "../components/Highlights";
import Vivitsu from "../components/vivitsu";
import ScrollingText from "../components/ScrollingText";
import Domains from "../components/Domainss";
import SponsorsPage from "../components/Sponsors";
export default function VivitsuMain(){
    return(
        <div>
        <Vivitsu/>
        <Highlights/>
        <ScrollingText/>
        <Domains/>
        <SponsorsPage/>
        </div>
    );
};
import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const About = () => {
    return (
        <Layout>
            <h1>About Me:</h1>
            <p>I'm not every interesting but this is about me</p>
            <p><Link to='/contactMe'>Contact Me</Link></p>
        </Layout>        
    )
}

export default About
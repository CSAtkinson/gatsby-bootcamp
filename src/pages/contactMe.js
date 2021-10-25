import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const Contact = () => {
    return(
        <Layout>
            <h1>Contact Me:</h1>
            <p>Jimmy James</p>
            <p>1234 Nowhere Street</p>
            <p><Link to='https://twitter.com/Bornforexile5'>My Twitter</Link> </p>
        </Layout>        
    )
}

export default Contact
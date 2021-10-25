import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";


const IndexPage = () => {
    return(
      <Layout>
          <h1>Hello</h1>
          <h2>I'm James, a beginner developer trying to make some money</h2>
          <p>Need a developer? <Link to='/contactMe'>Contact Me</Link></p>
      </Layout>
    )
}

export default IndexPage
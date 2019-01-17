import React from 'react'
import { Link, StaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticQuery
    query={graphql`
      query {
        allContentfulStaff {
          edges {
            node {
              id,
              firstname,
              lastname
            }
          }
        }
      }
    `}
    render={data => {
      return (
        data.allContentfulStaff.edges.map((asdf) => 
          {
            console.log(asdf.node);
            const {firstname,lastname} = asdf.node;
            console.log(firstname,lastname)
            return(
              <div>
                <p>{firstname}</p>
                <p>{lastname}</p>
              </div>
            )
          }
        )
      )
    }}
  />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Process from "../components/Process"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Our Favorite Destinations" />
    <Testimonials />
    <Process/>
  </Layout>
)



export const Head = () => <Seo title="Home" />

export default IndexPage

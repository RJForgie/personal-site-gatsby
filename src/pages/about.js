import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
  height: 78vh;
`

const Year = styled.h3`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #606060;
`

const YearSummary = styled.p``

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Content>
        <h1>Changelog</h1>
        <Year>2020</Year>
        <YearSummary>Started working at <a href="https://floatapp.com/">Float</a> as a Software Engineer.</YearSummary>
        <Year>2019</Year>
        <YearSummary>Proposed in New Zealand, got hitched in Scotland. Promoted to Software Engineer from Junior.</YearSummary>
        <Year>2018</Year>
        <YearSummary>Moved into a Front End role.</YearSummary>
        <Year>2017</Year>
        <YearSummary>
            Attended <a href="https://codeclan.com/">CodeClan</a> and started working at <a href="zonal.co.uk/">Zonal</a> as a Junior Engineer.</YearSummary>
        <Year>2016</Year>
        <YearSummary>Worked in Turkmenistan, Malaysia and Oman. Made the decision to leave the oil industry and make the jump to tech. Moved from Dubai to Edinburgh.</YearSummary>
        <Year>2015</Year>
        <YearSummary>Met my future wife in Dubai (a kiwi). Worked in Malaysia, Oman.</YearSummary>
        <Year>2014</Year>
        <YearSummary>Moved to Dubai to start working at <a href="https://www.vikingcompletions.com/">Viking</a> as a Project Engineer. Worked in Malaysia and Iraq.</YearSummary>
        <Year>2013</Year>
        <YearSummary>Worked in Ghana and Ivory Coast.</YearSummary>
        <Year>2012</Year>
        <YearSummary>
            Learned how to escape an inverted helicoptor underwater (and started working offshore on oil rigs). Worked in the North Sea and Israel.
        </YearSummary>
        <Year>2011</Year>
        <YearSummary>
            Graduated from the <a href="https://www.abdn.ac.uk/">University of Aberdeen</a> and started working at <a href="https://tetratec.com/">TETRA Technologies.</a>
        </YearSummary>
    </Content>
  </Layout>
)

export default AboutPage
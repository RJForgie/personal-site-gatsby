import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const Subheading = styled.h3`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #606060;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Content>
        <h1>Bookshelf</h1>
        <p>Books i've recommended to friends or have gifted a copy of.</p>
        <Subheading>Non Fiction</Subheading>
        <ul>
          <li>Bad Blood - <em>John Carreyrou</em></li>
          <li>Barbarian Days - <em>William Finnegan</em></li>
          <li>Consolations of the Forest - <em>Sylvain Tesson</em></li>
          <li>Don't Tell Mum I Work on the Rigs - <em>Paul Carter</em></li>
          <li>Feet in the Clouds - <em>Richard Askwith</em></li>
          <li>Flash Boys - <em>Michael Lewis</em></li>
          <li>Hello World - <em>Hannah Fry</em></li>
          <li>Hitch 22 - <em>Christopher Hitchens</em></li>
          <li>In the Shadow of Ben Nevis - <em>Ian Sykes</em></li>
          <li>Into Thin Air - <em>Jon Krakauer</em></li>
          <li>Let My People Go Surfing - <em>Yvon Chouinard</em></li>
          <li>Moods of Future Joy - <em>Alastair Humphreys</em></li>
          <li>No Picnic on Mount Kenya - <em>Felice Benuzzi</em></li>
          <li>Radio Congo - <em>Ben Rawlence</em></li>
          <li>Startupland - <em>Mikkel Svane</em></li>
          <li>The Forgotten Highlander - <em>Alistair Urquhart</em></li>
          <li>The Innovators - <em>Walter Isaacson</em></li>
          <li>The Looming Tower - <em>Lawrence Wright</em></li>
          <li>The Places in Between - <em>Rory Stewart</em></li>
          <li>The Prize - <em>Daniel Yergin</em></li>
          <li>The Quest - <em>Daniel Yergin</em></li>
          <li>The Road Beneath My Feet - <em>Frank Turner</em></li>
          <li>The Secret Race - <em>Tyler Hamilton , Daniel Coyle</em></li>
          <li>Thunder and Sunshine - <em>Alastair Humphreys</em></li>
          <li>What I Talk About When I Talk About Running - <em>Haruki Murakami</em></li>
        </ul>
        <Subheading>Fiction</Subheading>
        <ul>
          <li>Cryptonomicon - <em>Neal Stephenson</em></li>
          <li>Dune - <em>Frank Herbert</em></li>
          <li>High Fidelity - <em>Nick Hornby</em></li>
          <li>Our Man in Havana - <em>Graham Greene</em></li>
          <li>The Beach - <em>Alex Garland</em></li>
          <li>The Dog - <em>Joseph O'Neill</em></li>
          <li>The Heart of the Matter<em> - Graham Greene</em></li>
          <li>The Old Man and the Sea<em> - Ernest Hemingway</em></li>
        </ul>
    </Content>
  </Layout>
)

export default AboutPage
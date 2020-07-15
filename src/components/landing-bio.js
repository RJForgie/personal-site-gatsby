import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Typewriter from 'typewriter-effect';
import code from '../images/code.svg'

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const CodeIcon = styled.img`
  height: 4rem;
  width: 4rem;
`

const LandingBio = () => {

  const typewriterOptions = {
    strings: ['JavaScript', 'TypeScript', 'React', 'Ruby', 'Rails'],
    autoStart: true,
    loop: true,
  }

  return (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}

    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
          <p> I solve problems with <Typewriter options={typewriterOptions}/>
          </p>
          <CodeIcon src={code} alt="Laptop icon"/>
        </Container>
      </OuterContainer>
    )}
  />
)}

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio

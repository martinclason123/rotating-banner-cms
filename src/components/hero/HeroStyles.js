import styled from "styled-components";

import { Container } from "@/styles/GlobalStyles";

export const HeroContainer = styled(Container)`
  background: ${(props) => props.theme.colors.white};
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: flex-end;
    padding: 3em 0;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  padding: 3em;
  height: auto;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 50%;
    display: block;
    margin-left: auto;
    padding: 0;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.1em solid ${(props) => props.theme.colors.black};
  background: ${(props) => props.theme.colors.white};
  width: 52.3em;
  padding 2em 0;
  
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 56.25em;
    top: 50%;
    left: 29.5%;
    border: none;
    background: transparent;
  }

`;

export const HeroHeader = styled.h1`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.black};
  line-height: 1;
  font-weight: 500;
  font-size: 9.6em;
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 7.6em;
    width: 80%;
    margin: 0 auto;
    border: 0.02em solid ${(props) => props.theme.colors.black};
    background: ${(props) => props.theme.colors.white};
    padding: 0.25em 0 0.5em 0;
  }
`;

export const DecoLine = styled.div`
  width: 70%;
  height: 0.3em;
  background: ${(props) => props.theme.colors.black};
  margin: 1em auto 3em auto;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    position: absolute;
    top: 49%;
    left: 25%;
    width: 50%;
  }
`;

export const HeroCta = styled.div`
  font-family: ${(props) => props.theme.fonts.secondaryMedium};
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  width: 11em;
  height: 1.5em;
  font-size: 4.3em;
  text-align: center;
  margin: 0.5em auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2.8em;
    width: 50%;
  }
`;

export const HeroCtaText = styled.span`
  font-weight: 500;
  line-height: 1.1;
  position: absolute;
  white-space: nowrap;
`;

export const HeroBanner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 3em;
  align-items: center;
  width: 100%;
  justify-content: center;
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: row;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  margin: 2em auto 0 auto;
  padding-bottom: 8em;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 4em;
    padding-bottom: 0;
  }
`;

export const HeroImage = styled.div`
  img {
    width: 100%;
    height: auto;
    border: 1em solid ${(props) => props.theme.colors.white};

    @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
      transform: rotate(6deg);
      margin-top: 5em;
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 40%;
  }
`;

export const HeroText = styled.div``;

export const HeroTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 9em;
  font-weight: 500;
  line-height: 1;
  margin: 0.2em 0 0.3em 0;

  color: ${(props) => props.theme.colors.black};
`;

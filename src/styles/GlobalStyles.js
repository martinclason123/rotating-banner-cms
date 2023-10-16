import styled from "styled-components";
export const Container = styled.div`
  max-width: 1200px;
  font-size: 1.563vw;
  margin: 0 auto;
  position: relative;

  @media (min-width: 769px) {
    font-size: 1.302vw;
  }

  @media (min-width: 1201px) {
    font-size: 15.6px;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: ${(props) => (props.width ? props.width : "100%")};
    height: auto;
  }
`;

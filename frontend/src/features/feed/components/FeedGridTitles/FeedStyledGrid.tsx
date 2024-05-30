import styled from "styled-components/macro";
import {
  StyledInputGridProps,
  StyledInputProps,
} from "../../../../utils/GlobalInterfaces";

export const StyledGrid = styled.div<StyledInputGridProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.banner ? "1fr 1fr" : "1fr 1fr 1fr"};

  @media (min-width: 600px) {
    grid-template-columns: ${(props) =>
      props.banner ? "1fr 1fr 1fr" : " 1fr 1fr 1fr 1fr"};
  }

  @media (min-width: 1100px) {
    grid-template-columns: ${(props) =>
      props.banner ? "1fr 1fr 1fr 1fr" : " 1fr 1fr 1fr 1fr 1fr 1fr"};
  }

  @media (min-width: 1800px) {
    grid-template-columns: ${(props) =>
      props.banner
        ? "1fr 1fr 1fr 1fr 1fr 1fr"
        : " 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"};
  }
`;

/*
@media screen and (min-width: 600px) {
    .feed-titles-grid {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  
  @media screen and (min-width: 800px) {
    .feed-titles-grid-container {
      padding-left: 36px;
    }
    .feed-titles-grid {
      grid-row-gap: 3px;
    }
  }
  
  @media screen and (min-width: 1100px) {
    .feed-titles-grid-container {
      padding-left: 48px;
    }
    .feed-titles-grid {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-row-gap: 6px;
    }
  }
  @media screen and (min-width: 1400px) {
    .feed-titles-grid-container {
      padding-left: 60px;
    }
    .feed-titles-grid {
      grid-row-gap: 8px;
    }
  }
  
  @media screen and (min-width: 1800px) {
    .feed-titles-grid-container {
      padding-left: 60px;
    }
  
    .feed-titles-grid {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
  */

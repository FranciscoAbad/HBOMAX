import styled from "styled-components/macro";

import { StyledInputProps } from "../../utils/GlobalInterfaces";
import {
  determineStyledInputBorder,
  determineLabelColor,
} from "../../utils/DetermineStylesUtil";

export const StyledInputBox = styled.div<StyledInputProps>`
  position: relative;
  width: 100%;
  height: 56px;
  border-bottom: ${(props) => determineStyledInputBorder(props)};
`;

export const StyledInputLabel = styled.span<StyledInputProps>`
  font-family: "GilroyLight";
  position: absolute;
  left: 1px;
  font-weight: 300;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: ${(props) => (!props.active ? "18px" : "16px")};
  top: ${(props) => (props.active ? "0px" : "16px")};
  color: ${(props) => determineLabelColor(props)};
`;

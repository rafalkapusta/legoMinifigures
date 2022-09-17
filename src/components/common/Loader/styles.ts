import { keyframes } from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const biggerRingStyle = {
    color: "#000000",
    fill: "#000000",
    fillOpacity: 0.08333333,
    stroke: "#565656",
    strokeWidth: 0.5,
    strokeOpacity: 0.19607843
};

export const smallerRingStyle = {
    fill: "none",
    stroke: "#9a0202",
    strokeWidth: 2.2583456,
    strokeLinecap: "round"
};

import styled from "styled-components";

import { CSS } from "../../../types";

export const H1 = styled.h1<{ cssMixin?: CSS<unknown> }>`
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    ${({ cssMixin }) => cssMixin};
`;

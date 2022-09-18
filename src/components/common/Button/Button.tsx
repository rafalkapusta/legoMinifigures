import styled from "styled-components";
import { CSS } from "../../../types";

const Button = styled.button<{ cssMixin?: CSS<unknown> }>`
    background: ${({ theme: { color } }) => color.blue};
    color: white;
    padding: 16px;
    border-radius: 8px;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        background: ${({ theme: { color } }) => color.hoverBlue};
    }
    &:disabled {
        cursor: not-allowed;
    }
    ${({ cssMixin }) => cssMixin};
`;

export { Button };

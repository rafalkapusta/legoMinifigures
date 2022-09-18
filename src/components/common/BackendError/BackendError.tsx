import { FC } from "react";
import styled, { css } from "styled-components";

import { H1 } from "../Header/Header";
import { Button } from "../Button/Button";

const Wrapper = styled.div`
    text-align: center;
`;

const BackendError: FC = () => {
    return (
        <Wrapper>
            <H1
                cssMixin={css`
                    color: ${({ theme: { color } }) => color.showDetail};
                `}
            >
                reload page or try again later
            </H1>
            <Button onClick={() => window.location.reload()}>reload</Button>
        </Wrapper>
    );
};

export { BackendError };

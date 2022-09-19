import { FC } from "react";
import styled, { css } from "styled-components";

import { H1 } from "../common/Header/Header";
import { Specifics } from "./Specifics";
import { FormComponent } from "./Form";

const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 5fr 350px;
    grid-template-rows: 0.5fr 2fr 1fr auto 2fr 0.5fr;
    width: 100%;
    height: 100%;
    position: relative;
`;

const Shipment: FC = () => {
    return (
        <PageWrapper>
            <H1
                cssMixin={css`
                    grid-column: 2/3;
                    grid-row: 3/4;
                    margin-left: 16px;
                `}
            >
                shipping detail
            </H1>
            <FormComponent />
            <Specifics />
        </PageWrapper>
    );
};

export { Shipment };

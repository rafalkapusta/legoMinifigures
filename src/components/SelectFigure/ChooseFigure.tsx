import { FC } from "react";
import { Button } from "../common/Button/Button";
import styled from "styled-components";
import { useFormikContext } from "formik";

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
`;

const ChooseFigure: FC = () => {
    const { values } = useFormikContext();

    return (
        <ButtonWrapper>
            <Button type="submit" disabled={!(values as { picked: string }).picked}>
                proceed to shipment
            </Button>
        </ButtonWrapper>
    );
};

export { ChooseFigure };

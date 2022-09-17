import { FC } from "react";
import styled, { css } from "styled-components";
import { Field } from "formik";

import { MiniFigure } from "../../types";
import { Button } from "../common/Button/Button";

type Props = {
    figure: MiniFigure;
};

const Wrapper = styled.div`
    width: 300px;
    height: 450px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    cursor: pointer;
    border-radius: 8px;
    & img {
        border-radius: 8px;
        max-width: 100%;
        max-height: 100%;
        cursor: pointer;
    }
`;

const Label = styled.label`
    input {
        display: none;
    }

    input:checked ~ div {
        border: 4px solid ${({ theme: { color } }) => color.showDetail};
        transform: scale(1.05);
    }
`;

const P = styled.p`
    height: 56px;
    text-align: center;
`;

const FigureCard: FC<Props> = ({ figure }) => {
    return (
        <Label>
            <Field type="radio" id={figure.set_num} name="picked" value={figure.set_num} />
            <Wrapper>
                <img height="300" src={figure.set_img_url} alt={figure.name} />
                <P>{figure.name}</P>
                <Button
                    type="button"
                    cssMixin={css`
                        margin-bottom: 8px;
                        background: ${({ theme: { color } }) => color.showDetail};
                    `}
                >
                    show detail
                </Button>
            </Wrapper>
        </Label>
    );
};

export { FigureCard };

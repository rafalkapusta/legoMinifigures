import { FC } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";

import { H1 } from "../common/Header/Header";
import { FigureCard } from "./FigureCard";
import { Button } from "../common/Button/Button";
import { MiniFigure } from "../../types";
import { setChosenFigure } from "../../store/slices/appSlice";
import { useAppDispatch } from "../../hooks/hooks";

type Props = {
    figures: (MiniFigure | undefined)[];
};

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
`;

const SelectFigure: FC<Props> = ({ figures }) => {
    const dispatch = useAppDispatch();
    if (figures.some((fig) => fig === undefined)) return null;
    return (
        <>
            <H1>choose your minifig</H1>
            <Formik
                initialValues={{ picked: "" }}
                onSubmit={(val) => {
                    dispatch(setChosenFigure(val.picked));
                }}
            >
                <Form style={{ width: "100%" }}>
                    <CardWrapper>
                        {figures.map((fig) => (
                            <FigureCard key={fig!.set_num} figure={fig!} />
                        ))}
                    </CardWrapper>
                    <ButtonWrapper>
                        <Button type="submit">proceed to shipment</Button>
                    </ButtonWrapper>
                </Form>
            </Formik>
        </>
    );
};

export { SelectFigure };

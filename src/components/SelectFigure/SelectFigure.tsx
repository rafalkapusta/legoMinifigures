import { FC, useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";

import { H1 } from "../common/Header/Header";
import { FigureCard } from "./FigureCard";
import { MiniFigure } from "../../types";
import { setChosenFigure } from "../../store/slices/appSlice";
import { useAppDispatch } from "../../hooks/hooks";
import { ModalComponent } from "./Modal";
import { ChooseFigure } from "./ChooseFigure";

type Props = {
    figures: (MiniFigure | undefined)[];
};

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

const SelectFigure: FC<Props> = ({ figures }) => {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [details, setDetails] = useState<MiniFigure | null>(null);

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
                            <FigureCard
                                key={fig!.set_num}
                                figure={fig!}
                                openModal={setIsOpen}
                                setDetails={setDetails}
                            />
                        ))}
                    </CardWrapper>
                    <ChooseFigure />
                </Form>
            </Formik>
            <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} details={details} />
        </>
    );
};

export { SelectFigure };

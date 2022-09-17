import { FC } from "react";
import styled from "styled-components";

import { useAppSelector } from "../../hooks/hooks";
import { useGetFigurePartsQuery, useGetFigureQuery } from "../../api/getFigures";
import { FigureParts } from "../../types";

// type Props = {};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Specifics: FC = () => {
    const chosenFigure = useAppSelector(({ chosenFigure }) => chosenFigure.chosenFigure);

    const id = chosenFigure!.match(/\d+/g)![0];
    if (!id) return null;

    const { data: figure } = useGetFigureQuery(id);
    const { data: figureParts } = useGetFigurePartsQuery(id);

    if (!figure || !figureParts) return null;

    console.log(figureParts);
    return (
        <>
            <img height="250" src={figure.set_img_url} alt={figure.name} />
            <Wrapper>
                {(figureParts as FigureParts).results.map((part) => (
                    <img
                        height="80"
                        width="80"
                        key={part.part.part_cat_id}
                        src={part.part.part_img_url}
                        alt={part.part.name}
                    />
                ))}
            </Wrapper>
        </>
    );
};

export { Specifics };

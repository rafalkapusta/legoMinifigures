import { FC } from "react";
import styled from "styled-components";

import { useAppSelector } from "../../hooks/hooks";
import { useGetFigurePartsQuery, useGetFigureQuery } from "../../api/figures";
import { FigureParts } from "../../types";
import { Loader } from "../common/Loader/Loader";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: 50%;
`;

const SpecificsWrapper = styled.div`
    text-align: center;
    border-radius: 8px;
    grid-column: 3/4;
    grid-row: 2/6;
    background: white;
    margin: 0 16px;
`;

const Specifics: FC = () => {
    const chosenFigure = useAppSelector(({ figuresData }) => figuresData.chosenFigure);

    const id = chosenFigure!.match(/\d+/g)![0];
    if (!id) return null;

    const { data: figure, isLoading: loadingFig } = useGetFigureQuery(id);
    const { data: figureParts, isLoading: loadingParts } = useGetFigurePartsQuery(id);

    if (loadingFig || loadingParts) return <Loader />;

    if (!figure || !figureParts) return null;
    return (
        <SpecificsWrapper>
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
        </SpecificsWrapper>
    );
};

export { Specifics };

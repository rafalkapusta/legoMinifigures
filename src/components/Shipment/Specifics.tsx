import { FC } from "react";
import styled, { css } from "styled-components";

import { useAppSelector } from "../../hooks/hooks";
import { useGetFigurePartsQuery, useGetFigureQuery } from "../../api/figures";
import { FigureParts } from "../../types";
import { Loader } from "../common/Loader/Loader";
import { H2 } from "../common/Header/Header";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: 40%;
    margin-top: 24px;
`;

const SpecificsWrapper = styled.div`
    text-align: center;
    border-radius: 8px;
    grid-column: 3/4;
    grid-row: 2/6;
    background: white;
    margin: 0 16px;
    padding: 8px;
    p {
        margin: 0 8px;
        color: ${({ theme: { color } }) => color.showDetail};
    }
`;

const PartWrapper = styled.div`
    display: flex;
    align-items: center;
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
            <H2
                cssMixin={css`
                    text-align: left;
                    margin: 8px 0;
                `}
            >
                summary
            </H2>
            <img height="200" src={figure.set_img_url} alt={figure.name} />
            <p>{figure.name}</p>
            <Wrapper>
                {(figureParts as FigureParts).results.map((part) => (
                    <PartWrapper key={part.part.part_cat_id}>
                        {part.part.part_img_url && (
                            <>
                                <img height="70" width="80" src={part.part.part_img_url} alt={part.part.name} />
                                <p>id: {part.id}</p>
                            </>
                        )}
                    </PartWrapper>
                ))}
            </Wrapper>
        </SpecificsWrapper>
    );
};

export { Specifics };

import { useMemo, useState } from "react";

import { useGetFigureQuery } from "../api/getFigures";
import { useAppSelector } from "../hooks/hooks";
import { Loader } from "./common/Loader/Loader";

import { drawFigures } from "../helpers/drawFigures";
import { DrawFigure } from "./DrawFigures/DrawFigure";
import { SelectFigure } from "./SelectFigure/SelectFigure";
import { Shipment } from "./Shipment/Shipment";

const App = () => {
    const [skip, setSkip] = useState(true);
    const [redraw, setRedraw] = useState(false);

    const chosenFigure = useAppSelector(({ chosenFigure }) => chosenFigure.chosenFigure);

    const [fig1, fig2, fig3] = useMemo(() => drawFigures(), [redraw]);

    const [
        { data: figure1, error: figure1_err },
        { data: figure2, error: figure2_err },
        { data: figure3, error: figure3_err }
    ] = [useGetFigureQuery(fig1, { skip }), useGetFigureQuery(fig2, { skip }), useGetFigureQuery(fig3, { skip })];

    const isLoading = useAppSelector(({ legoApi: { queries, mutations } }) =>
        [...Object.values(queries), ...Object.values(mutations)].some((query) => query?.status === "pending")
    );

    const haveAllFiguresImg = () => {
        if ([figure1, figure2, figure3].every((fig) => fig?.set_img_url !== null)) return;
        setRedraw(!redraw);
    };
    if (!chosenFigure) {
        haveAllFiguresImg();
    }

    if (isLoading) return <Loader />;
    if (chosenFigure) return <Shipment />;
    if (!skip) return <SelectFigure figures={[figure1, figure2, figure3]} />;
    return <DrawFigure setSkip={setSkip} />;
};

export { App };

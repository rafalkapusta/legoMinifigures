import { useEffect, useMemo, useState } from "react";

import { useGetFigureQuery } from "../api/getFigures";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Loader } from "./common/Loader/Loader";

import { drawFigures } from "../helpers/drawFigures";
import { DrawFigure } from "./DrawFigures/DrawFigure";
import { SelectFigure } from "./SelectFigure/SelectFigure";
import { Shipment } from "./Shipment/Shipment";
import { addMinifigure } from "../store/slices/appSlice";
import { FIG_NUMBER } from "../constants/constants";
import { BackendError } from "./common/BackendError/BackendError";

const App = () => {
    const dispatch = useAppDispatch();
    const [skip, setSkip] = useState(true);
    const [redrawCount, setRedrawCount] = useState(0);

    const state = useAppSelector((state) => state);

    const { chosenFigure, minifigures } = state.figuresData;

    const id = useMemo(() => drawFigures(), [minifigures.length, redrawCount]);

    const { data: figure, error } = useGetFigureQuery(id, { skip });

    const isLoading = useAppSelector(({ legoApi: { queries, mutations } }) =>
        [...Object.values(queries), ...Object.values(mutations)].some((query) => query?.status === "pending")
    );

    const hasFigureImg = () => {
        if (!figure) return;
        figure.set_img_url ? dispatch(addMinifigure(figure)) : setRedrawCount((prevState) => ++prevState);
    };

    useEffect(() => {
        if (minifigures.length < FIG_NUMBER) {
            hasFigureImg();
        }
    }, [figure]);

    if (error) return <BackendError />;
    if (isLoading) return <Loader />;
    if (chosenFigure) return <Shipment />;
    if (!skip) return <SelectFigure figures={minifigures} />;
    return <DrawFigure setSkip={setSkip} />;
};

export { App };

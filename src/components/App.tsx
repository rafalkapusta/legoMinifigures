import { useEffect, useMemo, useState } from "react";

import { useGetFigureQuery } from "../api/figures";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

import { drawFigures } from "../helpers/drawFigures";
import { DrawFigure } from "./DrawFigures/DrawFigure";
import { SelectFigure } from "./SelectFigure/SelectFigure";
import { Shipment } from "./Shipment/Shipment";
import { addMinifigure } from "../store/slices/appSlice";
import { FIG_NUMBER } from "../constants/constants";
import { BackendError } from "./common/BackendError/BackendError";
import { Loader } from "./common/Loader/Loader";

const App = () => {
    const dispatch = useAppDispatch();
    const [skip, setSkip] = useState(true);
    const [redrawCount, setRedrawCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const state = useAppSelector((state) => state);

    const { chosenFigure, minifigures } = state.figuresData;

    const id = useMemo(() => drawFigures(), [minifigures.length, redrawCount]);

    const { data: figure, error } = useGetFigureQuery(id, { skip });

    const hasFigureImg = () => {
        if (!figure) return;
        if (minifigures.some((fig) => fig.set_num === `fig-${id}`)) return setRedrawCount((prevState) => ++prevState);
        figure.set_img_url ? dispatch(addMinifigure(figure)) : setRedrawCount((prevState) => ++prevState);
    };

    useEffect(() => {
        if (minifigures.length < FIG_NUMBER) {
            return hasFigureImg();
        }
        setIsLoading(false);
    }, [figure]);

    if (error) return <BackendError />;
    if (isLoading) return <Loader />;
    if (chosenFigure) return <Shipment />;
    if (!skip) return <SelectFigure figures={minifigures} />;
    return <DrawFigure setSkip={setSkip} setIsLoading={setIsLoading} />;
};

export { App };

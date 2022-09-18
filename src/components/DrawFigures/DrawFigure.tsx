import { Dispatch, FC } from "react";
import { H1 } from "../common/Header/Header";
import { Button } from "../common/Button/Button";

type Props = {
    setSkip: Dispatch<boolean>;
    setIsLoading: Dispatch<boolean>;
};

const DrawFigure: FC<Props> = ({ setSkip, setIsLoading }) => {
    const drawFigure = () => {
        setSkip(false);
        setIsLoading(true);
    };
    return (
        <>
            <H1>lego minifigs mystery box</H1>
            <Button onClick={drawFigure}>
                <span>draw</span>
            </Button>
        </>
    );
};

export { DrawFigure };

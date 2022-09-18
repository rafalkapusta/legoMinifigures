import { HP_FIGURES_IDS } from "../figuresIds/figuresIds";

export const drawFigures = () => {
    const index = Math.floor(Math.random() * HP_FIGURES_IDS.length);
    return HP_FIGURES_IDS[index];
};

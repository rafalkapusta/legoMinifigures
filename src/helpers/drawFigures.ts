import { HP_FIGURES_IDS } from "../figuresIds/figuresIds";

export const drawFigures = () => {
    const figures: string[] = [];

    while (figures.length < 3) {
        const index = Math.floor(Math.random() * HP_FIGURES_IDS.length);
        const id = HP_FIGURES_IDS[index];
        if (!figures.includes(id)) {
            figures.push(id);
        }
    }
    return figures;
};

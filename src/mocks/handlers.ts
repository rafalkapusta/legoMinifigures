import { rest } from "msw";

export const handlers = [
    rest.post(/ship\/minifig/, (req, res, ctx) => {
        const resp = {};
        return res(ctx.status(200), ctx.json(resp));
    })
];

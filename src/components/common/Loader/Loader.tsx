import { FC } from "react";
import styled from "styled-components";

import { biggerRingStyle, smallerRingStyle, rotate } from "./styles";

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1502;

    backdrop-filter: blur(5px);

    svg {
        max-width: 80px;
        animation: ${rotate} 2s linear infinite;
    }
`;

const Loader: FC = () => {
    return (
        <Wrapper aria-labelledby="full-page-loader" id="rw-page-loader">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 34 34"
                role="img"
                aria-busy="true"
            >
                <title id="full-page-loader">Trwa ładowanie</title>
                <path
                    d="m 16.977523,0.24095147
                        c -9.2629169,0 -16.73280045,7.51449143
                        -16.73280045,16.77740253 0,9.262912
                        7.46988355,16.777403 16.73280045,16.777403
                        9.262917,0 16.777413,-7.514491 16.777413,
                        -16.777403 0,-9.2629111 -7.514496,-16.77740253
                        -16.777413,-16.77740253
                        z m 0,4.14972823
                        c 6.966927,0 12.627682,5.6607523
                        12.627682,12.6276743 0,6.966923
                        -5.660755,12.583053
                        -12.627682,12.583053 -6.966937,0
                        -12.5830596,-5.61613 -12.5830596,-12.583053
                        0,-6.966922 5.6161226,-12.6276743
                        12.5830596,-12.6276743 z"
                    style={biggerRingStyle}
                />
                <path
                    d="M 31.677259,17.003529 A 14.680208,14.680199 0 0 1 20.796571,31.183505"
                    // @ts-ignore
                    style={smallerRingStyle}
                />
            </svg>
        </Wrapper>
    );
};

export { Loader };

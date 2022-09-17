import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import styled from "styled-components";

import { store } from "./store/store";
import { App } from "./components/App";
import { ThemeProvider } from "styled-components";
import { appTheme, GlobalStyle } from "./globalStyle/globalStyle";

const container = document.getElementById("root")!;
const root = createRoot(container);

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

root.render(
    <React.StrictMode>
        <ThemeProvider theme={appTheme}>
            <GlobalStyle />
            <Provider store={store}>
                <Wrapper>
                    <App />
                </Wrapper>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);

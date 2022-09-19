import { Dispatch, FC } from "react";
import Modal from "react-modal";
import styled, { css } from "styled-components";

import { MiniFigure } from "../../types";
import { Button } from "../common/Button/Button";

type Props = {
    isOpen: boolean;
    setIsOpen: Dispatch<boolean>;
    details: MiniFigure | null;
};

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
};

const Wrapper = styled.div`
    text-align: center;
`;

Modal.setAppElement("#root");

const ModalComponent: FC<Props> = ({ isOpen, setIsOpen, details }) => {
    if (!details) return null;
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2>{details.name}</h2>
            <p>Number of parts: {details.num_parts}</p>
            <p>set number: {details.set_num}</p>
            <Wrapper>
                <Button
                    as="a"
                    href={details.set_url}
                    target="_blank"
                    cssMixin={css`
                        text-decoration: none;
                        margin-top: 24px;
                        display: inline-block;
                    `}
                >
                    see sets the figure appears in
                </Button>
            </Wrapper>
        </Modal>
    );
};

export { ModalComponent };

import { FC } from "react";
import styled from "styled-components";
import { ErrorMessage, Field } from "formik";

type Props = {
    label: string;
    type: string;
    name: string;
    isSmall?: boolean;
};

const Label = styled.label<{ isSmall: boolean }>`
    width: ${({ isSmall }) => (isSmall ? "45%" : "100%")};
    display: flex;
    flex-direction: column;
`;

const StyledField = styled(Field)`
    border-radius: 4px;
    height: 32px;
    margin-top: 4px;
`;

const StyledErrorMessage = styled.div`
    color: red;
`;

const Input: FC<Props> = ({ label, type, name, isSmall = false }) => {
    return (
        <Label isSmall={isSmall}>
            {label}
            <StyledField type={type} name={name} />
            <StyledErrorMessage>
                <ErrorMessage name={name} />
            </StyledErrorMessage>
        </Label>
    );
};

export { Input };

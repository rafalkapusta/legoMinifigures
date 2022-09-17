import { FC, useRef } from "react";
import styled, { css } from "styled-components";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import { H1 } from "../common/Header/Header";
import { Button } from "../common/Button/Button";
import { Specifics } from "./Specifics";
import { Input } from "./Input";

const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    surname: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    phoneNumber: Yup.string().min(9).max(9).required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    dateOfBirth: Yup.string().required("Required"),
    adress: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    zipCode: Yup.string().required("Required")
});

const initialValues = {
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    adress: "",
    city: "",
    state: "",
    zipCode: ""
};

const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 5fr 2fr;
    grid-template-rows: 0.5fr 2fr 1fr auto 2fr 0.5fr;
    width: 100%;
    height: 100%;
`;

const FormWrapper = styled.div`
    grid-column: 2/3;
    grid-row: 4/5;
`;

const SpecificsWrapper = styled.div`
    border-radius: 8px;
    grid-column: 3/4;
    grid-row: 2/6;
    background: white;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    margin: 0 16px;
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Shipment: FC = () => {
    const form = useRef<HTMLFormElement>(null);
    return (
        <PageWrapper>
            <H1
                cssMixin={css`
                    grid-column: 2/3;
                    grid-row: 3/4;
                    margin-left: 16px;
                `}
            >
                shipping detail
            </H1>
            <FormWrapper>
                <Formik
                    initialValues={initialValues}
                    onSubmit={() => console.log("submit")}
                    validationSchema={validationSchema}
                >
                    <Form ref={form}>
                        <InputWrapper>
                            <Input label="Name" type="text" name="name" isSmall />
                            <Input label="Surname" type="text" name="surname" isSmall />
                        </InputWrapper>
                        <InputWrapper>
                            <Input label="Phone number" type="tel" name="phoneNumber" />
                        </InputWrapper>
                        <InputWrapper>
                            <Input label="Date of birth" type="date" name="dateOfBirth" />
                        </InputWrapper>
                        <InputWrapper>
                            <Input label="Adress" type="text" name="adress" />
                        </InputWrapper>
                        <InputWrapper>
                            <Input label="City" type="text" name="city" />
                        </InputWrapper>
                        <InputWrapper>
                            <Input label="State" type="text" name="state" isSmall />
                            <Input label="Zip-Code" type="text" name="zipCode" isSmall />
                        </InputWrapper>
                    </Form>
                </Formik>
            </FormWrapper>
            <SpecificsWrapper>
                <Specifics />
                <Button
                    type="button"
                    onClick={() => form.current?.requestSubmit()}
                    cssMixin={css`
                        align-self: center;
                        margin: 16px 0;
                    `}
                >
                    submit
                </Button>
            </SpecificsWrapper>
        </PageWrapper>
    );
};

export { Shipment };

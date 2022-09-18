import { FC } from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";

import { Input } from "./Input";
import * as Yup from "yup";
import { SubmitForm } from "./SubmitForm";

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

const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FormWrapper = styled.div`
    grid-column: 2/3;
    grid-row: 4/5;
`;

const FormComponent: FC = () => {
    return (
        <FormWrapper>
            <Formik
                initialValues={initialValues}
                onSubmit={() => console.log("submit")}
                validationSchema={validationSchema}
            >
                <Form>
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
                    <SubmitForm />
                </Form>
            </Formik>
        </FormWrapper>
    );
};

export { FormComponent };

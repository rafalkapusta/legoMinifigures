import { FC } from "react";
import { css } from "styled-components";
import { Button } from "../common/Button/Button";
import { useFormikContext } from "formik";

const SubmitForm: FC = () => {
    const { isValid, dirty } = useFormikContext();

    return (
        <Button
            disabled={!(isValid && dirty)}
            cssMixin={css`
                position: absolute;
                bottom: 40px;
                right: 133px;
            `}
        >
            submit
        </Button>
    );
};

export { SubmitForm };

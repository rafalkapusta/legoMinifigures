import { FC } from "react";
import { css } from "styled-components";
import { Button } from "../common/Button/Button";
import { useFormikContext } from "formik";

const SubmitForm: FC = () => {
    const { isValid, dirty } = useFormikContext();
    console.log(isValid, dirty);

    return (
        <Button
            disabled={!(isValid && dirty)}
            cssMixin={css`
                position: absolute;
                bottom: 40px;
                right: 110px;
            `}
        >
            submit
        </Button>
    );
};

export { SubmitForm };

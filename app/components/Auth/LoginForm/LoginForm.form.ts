import * as Yup from "yup";

export interface LoginFormValues {
    identifier: string;
    password: string;
}

export function initialValues() : LoginFormValues {
    return {
        identifier: "",
        password: "",
    };
}

export function validationSchema() {
    return Yup.object({
        identifier: Yup.string().required(),
        password: Yup.string().required(),
    })
}
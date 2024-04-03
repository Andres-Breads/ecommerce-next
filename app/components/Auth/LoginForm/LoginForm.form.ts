import * as Yup from "yup";

interface FormValues {
    identifier: string;
    password: string;
}

export function initialValues() : FormValues {
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
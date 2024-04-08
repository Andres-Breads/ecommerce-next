import * as Yup from "yup"

type StringForm = string | null | undefined;

export function initialValues(firstname: StringForm, lastname: StringForm) {
    return {
        firstname,
        lastname,
    };
}

export function validationSchema() {
    return Yup.object({
        firstname: Yup.string().required(),
        lastname: Yup.string().required(),
    })
}
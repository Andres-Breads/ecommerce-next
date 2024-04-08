import * as Yup from "yup"

export function initialValues() {
    return {
        title: "",
        name: "",
        address: "",
        state: "",
        city: "",
        postal_code: "",
        phone: "",
    }
}

export function validationSchema() {
    return Yup.object({
        title: Yup.string().required(),
        name: Yup.string().required(),
        address: Yup.string().required(),
        state: Yup.string().required(),
        city: Yup.string().required(),
        postal_code: Yup.string().required(),
        phone: Yup.number().required(),
    })
}
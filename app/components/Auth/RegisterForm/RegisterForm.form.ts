import * as Yup from 'yup'

interface FormValues {
    email: string;
    username: string;
    name: string;
    password: string;
}

export function initialValues() : FormValues {
    return {
        email: "",
        username: "",
        name: "",
        password: "",
    };
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email().required(),
        username: Yup.string().required(),
        name: Yup.string().required(),
        password: Yup.string().required(),
    });
}

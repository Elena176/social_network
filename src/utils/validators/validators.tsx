export const validateAddPostMessageForm = (maxLength: number) => (values: string) => {
    let errors;
    if (!values) {
        errors = 'Field is required';
    } else if (values.length > maxLength) {
        errors = `Max length is ${maxLength} symbols`;
    }
    return errors;
}

export const validateLoginForm = (values: string) => {
    const maxLength = 30;
    let errors;
    if (!values) {
        errors = 'Field is required';
    } else if (values.length > maxLength) {
        errors = `Max length is ${maxLength} symbols`;
    }
    return errors;
}
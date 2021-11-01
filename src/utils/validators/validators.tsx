export const validateAddPostMessageForm = (values: string) => {
    const maxLength = 20;
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
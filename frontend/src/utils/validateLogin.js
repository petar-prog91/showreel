export default function validateLogin(data) {
    const errors = {};

    if (!data.username) {
        errors.username = 'Required';
    }

    if (data.password && data.password.length < 8) {
        errors.password = 'Must be more than 8 characters';
    }

    return errors;
}
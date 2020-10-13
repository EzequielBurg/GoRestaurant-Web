import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

export default function getValidationError(error: ValidationError): IErrors {
  const validatationErrors: IErrors = {};

  error.inner.forEach(err => {
    validatationErrors[err.path] = err.message;
  });

  return validatationErrors;
}

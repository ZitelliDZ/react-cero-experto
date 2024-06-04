import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidationsState, setFormValidationsState] =
    useState({});

    useEffect(() => {
      createValidator();
    }, [formState]);

    useEffect(() => {
      setFormState(initialForm);
    }, [initialForm]);

  const isFormValid = useMemo(() => {
    for (const key in formValidationsState) {
      if (formValidationsState[key] !== null) {
        return false;
      }
    }
    return true;
  }, [formValidationsState]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidator = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidationsState(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    formValidationsState,
    isFormValid
  };
};

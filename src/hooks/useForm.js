import { useState } from 'react';

export function useForm(initialState = {}) {
  const [state, setState] = useState(initialState);

  const setValue = event => {
    const { name: fieldName, value } = event.target;
    setState({ ...state, [fieldName]: value });
  };

  const clearForm = () => {
    const empty = Object.keys(state).reduce((currentState, key) => {
      currentState[key] = '';
      return currentState;
    }, {});
    setState(empty);
  };

  return { state, setValue, clearForm };
}

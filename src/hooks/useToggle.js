import { useState } from 'react';

export function useToggle(intialState = false) {
  const [state, setState] = useState(intialState);

  const toggle = () => {
    setState(state => !state);
  };

  return [state, toggle];
}

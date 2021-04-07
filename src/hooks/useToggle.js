import { useState } from 'react';

export function useToggle(intialState = false) {
  const [state, setState] = useState(false);

  const toggle = () => {
    console.log('toggled');
    setState(state => !state);
  };

  return [state, toggle];
}

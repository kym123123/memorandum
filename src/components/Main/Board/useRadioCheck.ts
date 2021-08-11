import { useState } from 'react';
import { ChangeCheckedRadioType, RadioCheckType } from './types';

const useRadioCheck = (defaultValue: RadioCheckType) => {
  const [radioCheck, setRadioCheck] = useState<RadioCheckType>(defaultValue);

  const changeCheckedRadio: ChangeCheckedRadioType = (e, matcher) => {
    e.preventDefault();
    setRadioCheck(matcher);
  };

  return [radioCheck, changeCheckedRadio] as const;
};

export default useRadioCheck;

export const checkNicknameValidation = (name: string): boolean => {
  const numberOrScRegExp = /^[가-힣a-zA-Z]{4,20}$/;
  return numberOrScRegExp.test(name);
};

export const checkEmailValidation = (email: string): boolean => {
  // const emailRegExp =
  //   /^[0-9a-zA-Z]{2,3}([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.][0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일 양식
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegExp.test(email);
};

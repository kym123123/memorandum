export type RadioCheckType = 'tag' | 'title' | 'content';

export type ChangeCheckedRadioType = (
  e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  matcher: RadioCheckType,
) => void;

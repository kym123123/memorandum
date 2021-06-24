import { useSetRecoilState } from 'recoil';
import { isModalOpenState } from 'recoils/index';

const useModal = (boundaryClassName: string) => {
  const setModalOpen = useSetRecoilState(isModalOpenState);

  const closeModalHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLDivElement;

    if (target.classList.contains(boundaryClassName)) setModalOpen(false);
  };

  return closeModalHandler;
};

export default useModal;

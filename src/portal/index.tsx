import ReactDOM from 'react-dom';
import styled from 'styled-components';
import useModal from './useModal';

const Portal = ({ children }: { children: React.ReactNode }) => {
  const closeModalHandler = useModal('modal-boundary');

  const PortalWithContainer = (
    <PortalContainer className="modal-boundary" onClick={closeModalHandler}>
      {children}
    </PortalContainer>
  );

  return ReactDOM.createPortal(
    PortalWithContainer,
    document.getElementById('modal')!,
  );
};

const PortalContainer = styled.div`
  position: fixed;
  background-color: transparent;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Portal;

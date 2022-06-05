import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { PortalProps } from 'components/portal/portal.type';

const portal = document.getElementById('portal') as HTMLDivElement;

const Portal = ({ children }: PortalProps) => {
  const el = document.createElement('div');

  useEffect(() => {
    portal.appendChild(el);

    return () => {
      portal.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(children, el);
};

export default Portal;

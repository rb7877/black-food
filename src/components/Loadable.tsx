import { Suspense } from 'react';
import Loader from './Loader';

interface Props {
  children?: any;
}

const Loadable = (Component: React.FC<Props>) => ({ children }: any) =>
(
  <Suspense fallback={<Loader />}>
    <Component {...children} />
  </Suspense>
);

export default Loadable;

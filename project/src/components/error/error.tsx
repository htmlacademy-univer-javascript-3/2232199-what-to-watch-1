import {useAppSelector} from '../../hooks';
import './error.css';

function Error(): JSX.Element | null {
  const {error} = useAppSelector((state) => state);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

export default Error;

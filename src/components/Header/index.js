import { useAppContext } from '@utils/context';
import { CloseOutline } from 'antd-mobile-icons';
import logo from '../../assets/twitter-log.svg';

import style from './index.module.scss';

const Header = () => {
  const [store] = useAppContext();
  return (
    <div className={style.header}>
      {store.closeHeaderHandler && (
      <CloseOutline
        className={style.closeIcon}
        onClick={store.closeHeaderHandler}
      />
      )}
      <img src={logo} alt="twitter-logo" className={style.twitterLog} />
    </div>
  );
};

export default Header;

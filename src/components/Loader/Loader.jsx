import { Triangle } from 'react-loader-spinner';
import CSS from './index.module.css';

const Loader = () => {
  return (
    <div className={CSS.blocksWrapper}>
      <Triangle
        height='80'
        width='80'
        color='#1dcb1a'
        ariaLabel='circles-loading'
        wrapperStyle={{}}
        wrapperClass='blocks-wrapper'
        visible={true}
      />
    </div>
  );
};
export default Loader;

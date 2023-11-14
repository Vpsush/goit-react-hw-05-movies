import { Audio } from 'react-loader-spinner';
import { StyledLoader } from '../Loader/Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <div className="loader">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    </StyledLoader>
  );
};

export default Loader;

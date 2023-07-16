import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#2196f3"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  </div>
);

import Image from 'next/image';
import { useSelector } from 'react-redux';

const LeftImageSection = () => {
  const selectedColor = useSelector((state) => state.theme.themeColor);

  const imageStyle = {
    width: '100%', 
    height: '100%',
  };

  return (
    <Image
      src="/homepage/w3.jpg"
      width={900}
      height={900}
      alt="Picture of login screen"
      style={...imageStyle}
      className={selectedColor==='dark'?'dark':''}
    />
  );
};
export default LeftImageSection;

import Image from 'next/image';
import { useSelector } from 'react-redux';

const LeftImageSection = () => {
  const selectedColor = useSelector((state) => state.theme.themeColor);

  return (
    <Image
      src="/homepage/w3.jpg"
      width={900}
      height={900}
      alt="Picture of login screen"
      className={`image-style ${selectedColor === 'dark' ? 'dark' : ''}`}
    />
  );
};
export default LeftImageSection;

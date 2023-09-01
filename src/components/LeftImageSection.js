import Image from 'next/image';
import { useTheme } from 'next-themes';

const LeftImageSection = () => {
  const theme = useTheme();
  const imageStyle = {
    width: '100%', 
    height: '100%',
    border: `2px solid ${theme}`,
    boxShadow: theme === 'dark' ? '0 0 5px rgba(222, 285, 255, 0.8)' : 'none',
  };

  return (
    <Image
      src="/homepage/w3.jpg"
      width={900}
      height={900}
      alt="Picture of login screen"
      style={...imageStyle}
    />
  );
};
export default LeftImageSection;

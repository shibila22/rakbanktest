import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialMediaIcons from '@/components/SocialMediaIcons';

describe('Social Media Icons  Section ', () => {
  test('renders GoogleIcon', () => {
    render(<SocialMediaIcons />);
    const iconElement = screen.getByTestId('GoogleIcon');
    expect(iconElement).toBeInTheDocument();
  });
  test('renders FacebookIcon', () => {
    render(<SocialMediaIcons />);
    const facebookElement = screen.getByTestId('FacebookIcon');
    expect(facebookElement).toBeInTheDocument();
  });
  test('renders AppleIcon', () => {
    render(<SocialMediaIcons />);
    const iconElement = screen.getByTestId('AppleIcon');
    expect(iconElement).toBeInTheDocument();
  });
});

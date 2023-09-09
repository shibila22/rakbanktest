import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialMediaIcons from '@/components/SocialMediaIcons';
import { SocialMediaIconBox } from '@/ui/box';

describe('Social Media Icons  Section ', () => {
  describe('Rendering Icons', () => {
    test('renders GoogleIcon', () => {
      render(<SocialMediaIcons />);
      const imageElement = screen.getByAltText('google');
      expect(imageElement).toBeInTheDocument();
    });
    test('renders FacebookIcon', () => {
      render(<SocialMediaIcons />);
      const imageElement = screen.getByAltText('facebook');
      expect(imageElement).toBeInTheDocument();
    });
    test('renders AppleIcon', () => {
      render(<SocialMediaIcons />);
      const imageElement = screen.getByAltText('apple');

      expect(imageElement).toBeInTheDocument();
    });
  });

  describe('Render the image with the correct src attribute', () => {
    it('should render the google image with the correct src attribute', () => {
      render(<SocialMediaIcons />);

      const image = screen.getByTestId('google-img');
      expect(image.getAttribute('src')).toEqual(
        '/_next/image?url=%2Ficons%2Fgoogle.png&w=48&q=75'
      );
    });
    it('should render the facebook image with the correct src attribute', () => {
      render(<SocialMediaIcons />);

      const image = screen.getByTestId('facebook-img');
      expect(image.getAttribute('src')).toEqual(
        '/_next/image?url=%2Ficons%2Ffacebook.png&w=48&q=75'
      );
    });
    it('should render the apple image with the correct src attribute', () => {
      render(<SocialMediaIcons />);

      const image = screen.getByTestId('apple-img');
      expect(image.getAttribute('src')).toEqual(
        '/_next/image?url=%2Ficons%2Fapple-logo.png&w=48&q=75'
      );
    });
  });
  describe('Rendering Correct width and height of image', () => {
    it('should render the image with the correct width and height', () => {
      render(<SocialMediaIcons />);
      const image = screen.getByTestId('google-img');
      expect(image.getAttribute('width')).toEqual('20');
      expect(image.getAttribute('height')).toEqual('20');
    });
    it('should render the image with the correct width and height', () => {
      render(<SocialMediaIcons />);
      const image = screen.getByTestId('facebook-img');
      expect(image.getAttribute('width')).toEqual('20');
      expect(image.getAttribute('height')).toEqual('23');
    });
    it('should render the image with the correct width and height', () => {
      render(<SocialMediaIcons />);
      const image = screen.getByTestId('apple-img');
      expect(image.getAttribute('width')).toEqual('20');
      expect(image.getAttribute('height')).toEqual('23');
    });
  });
  describe('Rendering Icons', () => {
    test('renders GoogleIcon', () => {
      render(<SocialMediaIcons />);
      const imageElement = screen.getByTestId('google-img');
      expect(imageElement.getAttribute('alt')).toEqual('google');
    });
    test('renders FacebookIcon', () => {
      render(<SocialMediaIcons />);
      const imageElement = screen.getByTestId('facebook-img');
      expect(imageElement.getAttribute('alt')).toEqual('facebook');
    });
    test('renders AppleIcon', () => {
      render(<SocialMediaIcons />);
      const imageElement = screen.getByTestId('apple-img');
      expect(imageElement.getAttribute('alt')).toEqual('apple');
    });
  });
});

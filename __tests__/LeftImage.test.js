import React from 'react';
import { render, screen } from '@testing-library/react';
import LeftImageSection from '@/components/LeftImageSection';
import MUIThemeProvider from '@/themes/MUIThemeProvider';
import { Provider } from 'react-redux';
import { store } from '@/store/index';

describe('Left Image Section ', () => {
  test('renders the Next.js Image component', () => {
    render(
      <Provider store={store}>
        <MUIThemeProvider>
          <LeftImageSection />
        </MUIThemeProvider>
      </Provider>
    );

    const imageElement = screen.getByAltText('Picture of login screen');
    expect(imageElement).toBeInTheDocument();
  });
  test('renders the image with the correct width and height', () => {
    render(
      <Provider store={store}>
        <MUIThemeProvider>
          <LeftImageSection />
        </MUIThemeProvider>
      </Provider>
    );

    const imageElement = screen.getByAltText('Picture of login screen');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('width')).toEqual('900');
    expect(imageElement.getAttribute('height')).toEqual('900');
  });
  test('renders the image with the correct alt text', () => {
    render(
      <Provider store={store}>
        <MUIThemeProvider>
          <LeftImageSection />
        </MUIThemeProvider>
      </Provider>
    );

    const imageElement = screen.getByAltText('Picture of login screen');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('alt')).toEqual('Picture of login screen');
  });

  test('renders the image with the correct loading state', () => {
    render(
      <Provider store={store}>
        <MUIThemeProvider>
          <LeftImageSection />;
        </MUIThemeProvider>
      </Provider>
    );
    const imageElement = screen.queryByAltText('Picture of login screen');
    expect(imageElement.getAttribute('loading')).toEqual('lazy');
    expect(imageElement.getAttribute('decoding')).toEqual('async');
    expect(imageElement.getAttribute('data-nimg')).toEqual('1');
    expect(imageElement.getAttribute('style')).toEqual('color: transparent;');
  });
});

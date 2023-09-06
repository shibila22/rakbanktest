// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import CustomizedSwitches from '@/components/ThemeSwitch';
// import { Provider } from 'react-redux';
// import { store } from '@/store/index';
// import { act } from 'react-dom/test-utils';

// describe('Theme Switch Section ', () => {
//   test('renders the switch component', () => {
//     render(
//       <Provider store={store}>
//         <CustomizedSwitches />
//       </Provider>
//     );
//     const switchElement = screen.getByRole('checkbox');
//     expect(switchElement).toBeInTheDocument();
//   });

//   test('toggles the switch', () => {
//     render(
//       <Provider store={store}>
//         <CustomizedSwitches />
//       </Provider>
//     );

//     const switchElement = screen.getByRole('checkbox');
//     // Check that the switch starts in the "off" position
//     expect(switchElement).not.toBeChecked();
//     // Simulate a click event to toggle the switch
//     act(() => {
//       fireEvent.click(switchElement);
//     });
//     // Check that the switch is now in the "on" position
//     expect(switchElement).toBeChecked();
//   });
// });

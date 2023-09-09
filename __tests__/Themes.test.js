import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByText,
} from '@testing-library/react';
import CustomizedSwitches from '@/components/ThemeSwitch';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import { themeReducer } from '@/slice/theme-slice';
import configureMockStore from 'redux-mock-store';

describe('Theme Switch Section ', () => {
  test('renders the switch component', () => {
    render(
      <Provider store={store}>
        <CustomizedSwitches />
      </Provider>
    );
    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).toBeInTheDocument();
  });
  test('toggles the theme correctly', () => {
    // Render the component
    render(
      <Provider store={store}>
        <CustomizedSwitches />
      </Provider>
    );
    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).not.toBeChecked();
    fireEvent.click(switchElement);
    expect(switchElement).toBeChecked();
  });
});
describe('Redux Store Integration Test', () => {
  it('should reflect changes from the Redux store', async () => {
    store.dispatch(themeReducer('dark'));
    const { getByRole } = render(
      <Provider store={store}>
        <CustomizedSwitches />
      </Provider>
    );
    const switchElement = getByRole('checkbox');
    expect(switchElement).not.toBeChecked;
    //By using waitFor, we ensure that the test waits for the component to update and for the switch element to reflect the updated state before proceeding to the next assertion.
    await waitFor(async () => {
      store.dispatch(themeReducer('light'));
    });

    expect(switchElement).toBeChecked();
  });
});
const mockStore = configureMockStore([]);
describe('Dispatch Action Test', () => {
  it('should dispatch the correct action when the switch is clicked', () => {
    const store = mockStore({ theme: { theme: 'light' } });

    const { getByRole } = render(
      <Provider store={store}>
        <CustomizedSwitches />
      </Provider>
    );

    const switchElement = getByRole('checkbox');

    fireEvent.click(switchElement);

    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'theme/themeReducer', payload: 'dark' }]);
  });
});

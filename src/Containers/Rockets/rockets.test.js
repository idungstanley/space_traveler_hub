import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../App/configureStore';
import Rockets from './Rockets';

let component;

describe(Rockets, () => {
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
  });

  test('Reads data and displays on the page', () => {
    expect(component.getByTestId('container')).toBeInTheDocument();
  });
});

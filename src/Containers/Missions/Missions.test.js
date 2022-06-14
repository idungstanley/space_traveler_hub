import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Missions from './Missions';
import store from '../../App/configureStore';

describe('Mission component', () => {
  it('Renders', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('Mission')).toBeInTheDocument();
  });
});

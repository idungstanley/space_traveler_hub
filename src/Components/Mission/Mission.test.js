import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Mission from './Mission';
import store from '../../App/configureStore';

describe('Mission component', () => {
  it('Renders', () => {
    render(
      <Provider store={store}>
        <Mission
          reserved
          description="TestDesc"
          missionName="TestName"
          missionId="TestId"
        />
        ,
      </Provider>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('TestName')).toBeInTheDocument();
    expect(screen.getByText('TestDesc')).toBeInTheDocument();
    expect(screen.getByText('Active Member')).toBeInTheDocument();
  });
});

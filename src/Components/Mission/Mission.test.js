import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Mission from './Mission';
import store from '../../App/configureStore';

const mission = {
  missionId: '5',
  missionName: 'Test Name',
  description: 'Test Desc',
  reserved: false,
};

const {
  missionId, missionName, description, reserved,
} = mission;

let component;

describe('Mission component', () => {
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Mission
          reserved={reserved}
          description={description}
          missionName={missionName}
          missionId={missionId}
        />
        ,
      </Provider>,
    );
  });

  it('Renders with the passed props ', () => {
    expect(
      component.getByRole('button', { name: /join mission/i }),
    ).toBeInTheDocument();

    expect(component.getByText(description)).toBeInTheDocument();
    expect(component.getByText(missionName)).toBeInTheDocument();
  });
});

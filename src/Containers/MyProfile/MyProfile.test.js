import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Rockets from '../Rockets/Rockets';
import Missions from '../Missions/Missions';
import store from '../../App/configureStore';
import MyProfile from './MyProfile';

let component;

describe(MyProfile, () => {
  beforeEach(async () => {
    component = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
  });

  test('Renders', () => {
    expect(component.getByText(/missions/i)).toBeInTheDocument();
    expect(component.getByText(/rockets/i)).toBeInTheDocument();
  });

  test('When user reserves a Mission, the mission name renders on MyProfile page ', async () => {
    // Expect the page to not have Thaicom mission rendered (as we're using queryBy and we expect
    // no matches, then it should return null.):
    expect(component.queryByText('Thaicom')).toBeNull();

    // Render Missions component to reserve a mission:
    const missionsComp = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const title = await missionsComp.findByRole('heading', {
      name: 'Thaicom',
    });

    const listItem = title.parentElement;

    const button = listItem.querySelector('button');

    fireEvent.click(button);

    // Unmount the missionsComp, so it doesn't interfere with MyProfile tests
    missionsComp.unmount();

    //We expect the Thaicom mission to be in MyProfile since is reserved:
    expect(component.getByText('Thaicom')).toBeInTheDocument();
  });
});

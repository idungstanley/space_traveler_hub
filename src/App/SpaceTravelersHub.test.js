import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import SpaceTravelersHub from './SpaceTravelersHub';
import store from './configureStore';
import '@testing-library/jest-dom';

let component;

describe(SpaceTravelersHub, () => {
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <SpaceTravelersHub />
      </Provider>,
    );
  });

  test('Should Navigate throught pages', async () => {
    // Select Navigation links:
    const rocketsLink = component.getByRole('link', {
      name: 'Rockets',
    });
    const missionsLink = component.getByRole('link', {
      name: 'Missions',
    });
    const myProfileLink = component.getByRole('link', {
      name: 'My profile',
    });

    // Define keywords of each page:
    const falcon = 'Falcon 1';
    const thaicom = 'Thaicom';
    const myProfTitle = 'My Missions';

    // Expect keywords of each page to be null at
    // the beginning:
    expect(component.queryByText(falcon)).toBeNull();
    expect(component.queryByText(thaicom)).toBeNull();
    expect(component.queryByText(myProfTitle)).toBeNull();

    // Click on rockets Link
    fireEvent.click(rocketsLink);

    // Expect the keyword for rockets to be in the document:
    const rocketTitle = await component.findByRole('heading', {
      name: falcon,
    });
    expect(rocketTitle).toBeInTheDocument();

    // Click on Missions link:
    fireEvent.click(missionsLink);

    // Expect the keyword for missions to be in the document:
    const missionsTitle = await component.findByRole('heading', {
      name: thaicom,
    });
    expect(missionsTitle).toBeInTheDocument();

    // Click on My Profile link:
    fireEvent.click(myProfileLink);

    // Expect the keyword for My Profile to be in the document:
    const myProfileTitle = await component.findByRole('heading', {
      name: myProfTitle,
    });
    expect(myProfileTitle).toBeInTheDocument();
  });
});

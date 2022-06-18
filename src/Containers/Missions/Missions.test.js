import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import Missions from './Missions';
import store from '../../App/configureStore';

let component;

describe(Missions, () => {
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
  });

  it('Renders only with the first row of titles', () => {
    const list = component.getByRole('list');

    expect(list.children.length).toBe(1);
  });

  it('Reads data and populates the list', async () => {
    // Search for a Match on an Existing mission:
    const title = await component.findByRole('heading', {
      name: 'Thaicom',
    });
    // Select the list from this Node parentNode = Li, parenNode = ul.
    const list = title.parentNode.parentNode;
    // We expect the length of this list to be different than 1 (the titles);
    expect(list.children.length).not.toBe(1);
  });

  test('The badge should change when the user clicks', () => {
    // Select the list
    const list = component.getByRole('list');
    // Pick the first mission (index 0 is the titles' row)
    const listItem = list.children[1];
    // Select the badge, and expect it to be "NOT A MEMBER" since is the first render:
    const badge = listItem.querySelector('div');
    expect(badge.textContent).toMatch(/not a member/i);
    // Select the button:
    const button = listItem.querySelector('button');
    // Click the button
    fireEvent.click(button);
    // Expect the badge text to have changed to "Active member"
    expect(badge.textContent).toMatch(/active member/i);
  });

  test('See more button opens popup on mobile devices', () => {
    // Resize the screen, so the UI changes:
    act(() => {
      global.innerWidth = 750;
      global.dispatchEvent(new Event('resize'));
    });
    let popup;
    // Expect the popup to be null, (queryBy returns null if no matches are found):
    popup = component.queryByTestId('popup');
    expect(popup).toBeNull();
    // Select the list:
    const list = component.getByRole('list');
    // Pick the first mission (index 0 is the titles' row):
    const listItem = list.children[1];
    // Select the icon:
    const icon = listItem.querySelector('svg');
    // Click the icon:
    fireEvent.click(icon);
    // The popup should Appear:
    popup = component.queryByTestId('popup');
    expect(popup).toBeInTheDocument();
  });
});

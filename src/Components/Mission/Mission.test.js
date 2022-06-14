import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Mission from './Mission';

describe('Mission component', () => {
  it('Renders', () => {
    render(
      <Mission
        status="TestStatus"
        description="TestDesc"
        missionName="TestName"
      />,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('TestName')).toBeInTheDocument();
    expect(screen.getByText('TestDesc')).toBeInTheDocument();
    expect(screen.getByText('TestStatus')).toBeInTheDocument();
  });
});

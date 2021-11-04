import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Nav from './Nav';

describe('<Nav />', () => {
  test('it should mount', () => {
    render(<Nav />);

    const nav = screen.getByTestId('Nav');

    expect(nav).toBeInTheDocument();
  });

  it('it should match snapshot', () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

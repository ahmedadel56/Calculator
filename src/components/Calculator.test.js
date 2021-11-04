import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

describe('<Calculator />', () => {
  test('it should mount', () => {
    render(<Calculator />);

    const calculator = screen.getByTestId('Calculator');

    expect(calculator).toBeInTheDocument();
  });

  it('it should match snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

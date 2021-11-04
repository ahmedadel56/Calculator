import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Quotes from './Quotes';

describe('<Quotes />', () => {
  it('it should match snapshot', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


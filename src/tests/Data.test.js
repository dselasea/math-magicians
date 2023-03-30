import renderer from 'react-test-renderer';
import Data from '../components/Data';

test('Test Data Component', () => {
  const component = renderer.create(<Data />);
  const data = component.toJSON();
  expect(data).toMatchSnapshot();
});

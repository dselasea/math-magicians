import renderer from 'react-test-renderer';
import Input from '../components/Input';

const calculation = { total: 0, next: 0, operation: null };

test('Test Input Component', () => {
  const component = renderer.create(<Input calculation={calculation} />);
  const input = component.toJSON();
  expect(input).toMatchSnapshot();
});

import App from './App';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(
    <App />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders the component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});


it('should show the text', () => {
    const toggleInstance = shallow(<App />);
    const element = toggleInstance.find('div');
    expect(element.text()).toMatchSnapshot();
   });
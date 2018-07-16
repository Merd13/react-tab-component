import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../App';


configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);
    shallow(<App />);
  });

  // it('should render TabGroup', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('TabGroup')).to.have.length(1);
  // });
});

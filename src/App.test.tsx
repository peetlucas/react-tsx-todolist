import * as React from 'react';
import * as enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

enzyme.configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
    const component = enzyme.shallow(<App />);
    expect(component.exists()).toEqual(true);
});

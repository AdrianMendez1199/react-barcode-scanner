import React from 'react';
import { shallow } from 'enzyme';
import BarCodeScanner from '../src/index';

describe('<BarCodeScanner />', () => {
    const wrapper = shallow(<BarCodeScanner onUpdate={(err, result) => {}}/>);
  
    test('should render correctly', () => {
       expect(wrapper).toMatchSnapshot();
    });


    test('should match the properties', () => {
       const props =  wrapper.find('video').props();
       expect(props.id).toBe('video');
       expect(props.className).toBe('dbrScanner-video');
       expect(props.playsInline).toBe(true);
    });
})
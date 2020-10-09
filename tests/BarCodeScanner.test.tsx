import React from 'react';
import { mount, shallow } from 'enzyme';
import BarCodeScanner from '../src/index';

describe('<BarCodeScanner />', () => {
    const callback = jest.fn();
    const wrapper = mount(<BarCodeScanner onUpdate={callback} />);

    test('should render correctly', () => {
        const wrapper = shallow(<BarCodeScanner onUpdate={callback} />);
        expect(wrapper).toMatchSnapshot();
    });


    test('should match the properties', () => {
        const props = wrapper.find('video').props();
        expect(props.id).toBe('video');
        expect(props.className).toBe('dbrScanner-video');
        expect(props.playsInline).toBe(true);
        expect(callback).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });
})
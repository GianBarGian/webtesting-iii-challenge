import React from 'react';
import * as rt from 'react-testing-library';
import Controls from './Controls';

afterEach(rt.cleanup);

describe('Control component tests', () => {
    it('should provide buttons to toggle the closed and locked states', () => {
        const wrapper = rt.render(<Controls />);
        expect(wrapper.getByText(/lock/i));
        expect(wrapper.getByText(/close/i))
    })

    it('should changes buttons text to reflect the state the door will be in if clicked', () => {
        // display default value
        // click on button 
        // display changed value
        const wrapper = rt.render(<Controls />);
        rt.fireEvent.click(wrapper.getByText(/close/i));
    })
})
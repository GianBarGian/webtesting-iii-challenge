import React from 'react';
import * as rt from 'react-testing-library';
import Controls from './Controls';

describe('Control component tests', () => {
    it('should provide buttons to toggle the closed and locked states', () => {
        const wrapper = rt.render(<Controls locked={false} closed={false} toggleLocked={() => {}} toggleClosed={() => {}}/>);
        expect(wrapper.getByText(/lock/i));
        expect(wrapper.getByText(/close/i))
    })
})
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
        const wrapper = rt.render(<Controls  closed={true} locked={true}/>);
        expect(wrapper.getByText(/open/i));
        expect(wrapper.getByText(/unlock/i));
    })

    it('should disable the closed button if gate is locked', () => {
        const wrapper = rt.render(<Controls closed={true} locked={true}/>);
        expect(wrapper.getByText(/open/i).hasAttribute('disabled')).toBeTruthy();
        
    })

    it('should disable the unlock button if gate is open', () => {
        const wrapper = rt.render(<Controls closed={false} locked={false}/>);
        expect(wrapper.getByText(/lock/i).hasAttribute('disabled')).toBeTruthy();
        
    })
})
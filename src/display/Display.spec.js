import React from 'react'
import * as rt from 'react-testing-library';
import Display from './Display';

describe('Display Component', () => {
    it('displays "Closed" if the closed prop is true and "Open" if otherwise', () => {
        let wrap = rt.render(<Display closed={true} />);
        expect(wrap.getByText(/closed/i));
        wrap = rt.render(<Display closed={false} />);
        expect(wrap.getByText(/open/i));
    })

    it('displays "Locked" if the locked prop is true and "Unlocked" if otherwise', () => {
        let wrap = rt.render(<Display locked={true} />);
        expect(wrap.getByText(/locked/i));
        wrap = rt.render(<Display locked={false} />);
        expect(wrap.getByText(/unlocked/i));
    })

    it('use the red-led class when locked or closed', () => {
        let wrap = rt.render(<Display locked={true} />);
        expect(wrap.container.querySelector('.red-led')).toBeTruthy();
        wrap = rt.render(<Display closed={true} />);
        expect(wrap.container.querySelector('.red-led')).toBeTruthy();
    })

    it('use the green-led class when unlocked or open', () => {
        let wrap = rt.render(<Display locked={false} />);
        expect(wrap.container.querySelector('.green-led')).toBeTruthy();
        wrap = rt.render(<Display closed={false} />);
        expect(wrap.container.querySelector('.green-led')).toBeTruthy();
    })
})

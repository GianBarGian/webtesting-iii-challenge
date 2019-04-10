import React from 'react';
import * as rt from 'react-testing-library';

import Dashboard from './Dashboard';
import { isMainThread } from 'worker_threads';

describe('Dashboard component', () => {
    it('display Display component', () => {
        const wrap = rt.render(<Dashboard />);
        expect(wrap.getByText(/open/i))
        expect(wrap.getByText(/unlocked/i))
    })

    it('display Controls component', () => {
        const wrap = rt.render(<Dashboard />);
        expect(wrap.getByText(/clos/i))
        expect(wrap.getByText(/lock/i))
    })
})

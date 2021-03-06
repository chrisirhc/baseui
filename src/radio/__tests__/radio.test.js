/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
/* eslint-env node */
import React from 'react';
import {mount} from 'enzyme';

import {Radio, StyledRoot, StyledInput} from '../index.js';

describe('Radio', () => {
  it('calls provided handlers', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <Radio
        onBlur={spy}
        onChange={spy}
        onFocus={spy}
        onMouseEnter={spy}
        onMouseLeave={spy}
        onMouseDown={spy}
        onMouseUp={spy}
      />,
    );

    const input = wrapper.find(StyledInput);
    input.simulate('blur');
    input.simulate('focus');
    input.simulate('change');
    expect(spy).toHaveBeenCalledTimes(3);

    spy.mockClear();

    const root = wrapper.find(StyledRoot);
    root.simulate('mouseenter');
    root.simulate('mouseleave');
    root.simulate('mousedown');
    root.simulate('mouseup');
    expect(spy).toHaveBeenCalledTimes(4);
  });
});

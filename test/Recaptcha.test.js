import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Recaptcha from '../src/Recaptcha';

const emptyFunction = () => {};
const wrapper = shallow(
  <Recaptcha
    sitekey="6LedJiATAAAAAJvpLFxW9dSiEGu8rGyoOIuTsvtg"
    callback={emptyFunction}
    expiredCallback={emptyFunction}
  />
);

test('should render with `g-recaptcha` className', (t) => {

  t.is(
    wrapper.find('.g-recaptcha').length,
    1,
  );
});

test('should render without non-HTML component properties', (t) => {
  const wrapperProps = wrapper.props();

  t.falsy(wrapperProps.callback);
  t.falsy(wrapperProps.expiredCallback);
  t.falsy(wrapperProps.locale);
  t.falsy(wrapperProps.sitekey);
});

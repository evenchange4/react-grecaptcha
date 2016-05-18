import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Recaptcha from '../src/Recaptcha';

const emptyFunction = () => {};

test('should render with `g-recaptcha` className', t => {
  const wrapper = shallow(
    <Recaptcha
      sitekey="6LedJiATAAAAAJvpLFxW9dSiEGu8rGyoOIuTsvtg"
      callback={emptyFunction}
      expiredCallback={emptyFunction}
    />
  );

  t.is(
    wrapper.find('.g-recaptcha').length,
    1,
  );
});

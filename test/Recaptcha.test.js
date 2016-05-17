import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Recaptcha from '../src/Recaptcha';

const emptyFunction = () => {};

test('should render with `g-recaptcha` className', t => {
  const wrapper = shallow(
    <Recaptcha
      sitekey="6Ldx8R4TAAAAAMB-6jJol-f-po1-Bbg0ArMGJ11L"
      callback={emptyFunction}
      expiredCallback={emptyFunction}
    />
  );

  t.is(
    wrapper.find('.g-recaptcha').length,
    1,
  );
});

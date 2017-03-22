import React from 'react';
import renderer from 'react-test-renderer';
import Recaptcha from '../src/Recaptcha';

describe('<Recaptcha />', () => {
  const wrapper = renderer.create(
    <Recaptcha
      sitekey="6LedJiATAAAAAJvpLFxW9dSiEGu8rGyoOIuTsvtg"
      callback={() => {
      }}
      expiredCallback={() => {
      }}
    />,
  );

  const invisibleWrapper = renderer.create(
    <Recaptcha
      sitekey="6LedJiATAAAAAJvpLFxW9dSiEGu8rGyoOIuTsvtg"
      callback={() => {
      }}
      expiredCallback={() => {
      }}
      invisible
    />,
  );

  it('should render with `g-recaptcha` className', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render without non-HTML component properties', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render invisible version', () => {
    expect(invisibleWrapper.toJSON()).toMatchSnapshot();
  });
});

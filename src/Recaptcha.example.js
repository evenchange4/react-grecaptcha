import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Recaptcha from '.';

const SITE_KEY_LOCALHOST = '6LehviATAAAAACZ5hcTODQmVldaS5fVHAOKbw3MP';
const SITE_KEY_LOCALHOST_IN = '6LdCeh0UAAAAAK8d4SISsIi7KcykpnP7x9D2vlha';

storiesOf('Recaptcha', module)
  .add(
    'reCAPTCHA v2',
    withInfo({
      text: `Validate users with the "I'm not a robot" checkbox. https://developers.google.com/recaptcha/docs/display`,
      inline: true,
      propTables: [Recaptcha],
    })(() => (
      <Recaptcha
        sitekey={SITE_KEY_LOCALHOST}
        callback={action('callback')}
        expiredCallback={action('expiredCallback')}
      />
    )),
  )
  .add(
    'With locale',
    withInfo({
      text: `I18n https://developers.google.com/recaptcha/docs/language`,
      inline: true,
      propTables: [Recaptcha],
    })(() => (
      <Recaptcha
        sitekey={SITE_KEY_LOCALHOST}
        callback={action('callback')}
        expiredCallback={action('expiredCallback')}
        locale="zh-TW"
      />
    )),
  )
  .add(
    'With recaptcha.net',
    withInfo({
      text: `I18n https://developers.google.com/recaptcha/docs/language`,
      inline: true,
      propTables: [Recaptcha],
    })(() => (
      <Recaptcha
        sitekey={SITE_KEY_LOCALHOST}
        callback={action('callback')}
        expiredCallback={action('expiredCallback')}
        locale="zh-TW"
        useRecaptchaDotNet={Boolean(true)}
      />
    )),
  )
  .add(
    'With otherProps',
    withInfo({
      text: `Theme https://developers.google.com/recaptcha/docs/display`,
      inline: true,
      propTables: [Recaptcha],
    })(() => (
      <Recaptcha
        sitekey={SITE_KEY_LOCALHOST}
        callback={action('callback')}
        expiredCallback={action('expiredCallback')}
        data-theme="dark"
      />
    )),
  )
  .add(
    'Invisible reCAPTCHA',
    withInfo({
      text: `
        Validate users in the background. https://developers.google.com/recaptcha/docs/invisible
        window.grecaptcha.execute();
      `,
      inline: true,
      propTables: [Recaptcha],
    })(() => (
      <Recaptcha
        sitekey={SITE_KEY_LOCALHOST_IN}
        callback={action('callback')}
        expiredCallback={action('expiredCallback')}
        locale="zh-TW"
        invisible
      />
    )),
  );

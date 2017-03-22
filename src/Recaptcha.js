import React, { PropTypes } from 'react';
import c from 'classnames';
import omit from 'lodash.omit';

// Constants
const ID = '_grecaptcha.element.id';
const CALLBACK_NAME = '_grecaptcha.data-callback';
const EXPIRED_CALLBACK_NAME = '_grecaptcha.data-expired-callback';

const removeChild = elem => elem.parentNode && elem.parentNode.removeChild(elem);

class Recaptcha extends React.Component {
  static propTypes = {
    // Required
    sitekey: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
    expiredCallback: PropTypes.func.isRequired,

    // Options
    className: PropTypes.string,
    invisible: PropTypes.bool,
    locale: PropTypes.string,
  }

  static defaultProps = {
    locale: 'en',
    className: undefined,
    invisible: false,
  }

  componentDidMount() {
    const { locale, callback, expiredCallback } = this.props;

    // 1. Async lazy load
    const head = document.head || document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.id = ID;
    script.src = `https://www.google.com/recaptcha/api.js?hl=${locale}`;
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.onerror = (oError) => {
      throw new URIError(`The script ${oError.target.src} is not accessible.`);
    };
    head.appendChild(script);

    // 2. Expose callback function to window object
    window[CALLBACK_NAME] = callback;
    window[EXPIRED_CALLBACK_NAME] = expiredCallback;
  }

  componentWillUnmount() {
    removeChild(document.getElementById(ID));
  }

  render() {
    const { className, sitekey, invisible, ...otherProps } = this.props;
    const props = {
      ...omit(otherProps, ['callback', 'expiredCallback', 'locale']),
      className: c('g-recaptcha', className),
      'data-sitekey': sitekey,
      'data-callback': CALLBACK_NAME,
      'data-expired-callback': EXPIRED_CALLBACK_NAME,
      ...(invisible && { 'data-size': 'invisible' }),
    };

    return (
      <div {...props} />
    );
  }
}

export default Recaptcha;

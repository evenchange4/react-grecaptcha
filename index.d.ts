declare module 'react-grecaptcha' {
  import * as React from 'react';
  import { HTMLAttributes} from 'react';

  export interface IGRecaptcha extends HTMLAttributes<any>{
    sitekey: string;
    callback: Function;
    expiredCallback: Function;
    className?: string;
    invisible?: boolean;
    locale?: string;
  }

  export default class Recaptcha extends React.Component<IGRecaptcha, any> {
  }
}

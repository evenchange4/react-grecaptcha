import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

const context = require.context('../src/', true, /\.example\.js$/);

setAddon(infoAddon);
setOptions({
  name: 'React-grecaptcha',
  url: 'https://github.com/evenchange4/react-grecaptcha',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: true,
});

function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);

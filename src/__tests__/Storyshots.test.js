import initStoryshots from '@storybook/addon-storyshots';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

/**
 * Hint: mock for snapshot
 * ref: https://github.com/storybooks/storybook/issues/1011#issuecomment-322698049
 *
 * @author Michael Hsu
 */

const addonInfo = require('@storybook/addon-info'); // eslint-disable-line
addonInfo.withInfo = () => storyFn => storyFn;
const sbReact = require('@storybook/react'); // eslint-disable-line
sbReact.addDecorator = () => {};

// Using this function means we'll see the change in the css in the snapshot
// diff instead of just the change in classname
const styledSnapshot = ({ story, context }) => {
  const storyElement = story.render(context);
  const tree = mount(storyElement);
  expect(toJson(tree)).toMatchSnapshot();
};

initStoryshots({
  test: styledSnapshot,
});

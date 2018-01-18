import initStoryshots from '@storybook/addon-storyshots';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

const styledSnapshot = ({ story, context }) => {
  const storyElement = story.render(context);
  const tree = mount(storyElement);
  expect(toJson(tree)).toMatchSnapshot();
};

initStoryshots({
  test: styledSnapshot,
});

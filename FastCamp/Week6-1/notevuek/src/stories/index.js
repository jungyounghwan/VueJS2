import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton.vue';
import MyButtonDocument from './MyButtonDocument.vue';
import Todo from './Todo.vue';
import Welcome from './Welcome.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click.native="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with documentation', () => ({
    components: { MyButtonDocument },
    template: '<my-button-document></my-button-document>'
  }))
  .add('with todo', () => ({
    components: { Todo },
    template: '<Todo></Todo>'
  }));

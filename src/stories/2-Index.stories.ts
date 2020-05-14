import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { MyLibComponent } from '../../projects/my-lib/src/lib/my-lib.component';

storiesOf('Card', module)
  .add('empty', () => ({
    component: MyLibComponent,
    props: {},
  }))
  .add('with title', () => ({
    component: MyLibComponent,
    props: {
      title: 'Hello card!',
    },
  }))
  .add('with title and subtitle', () => ({
    component: MyLibComponent,
    props: {
      title: 'Hello card!',
      subtitle: 'Well hello there 👋',
    },
  }))
  .add(
    'with notes',
    withNotes('Just a few notes about this story...')(() => ({
      component: MyLibComponent,
      props: {},
    }))
  )
  .add('with action', () => ({
    component: MyLibComponent,
    props: {
      title: 'A card...',
      subtitle: 'Waiting to be clicked-on',
      btnClicked: action('👊 Button was clicked'),
    },
  }));

import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /list-rentals', async function(assert) {
    await visit('/list-rentals');

    assert.equal(currentURL(), '/list-rentals');
  });
});

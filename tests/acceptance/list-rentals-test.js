import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('Acceptance Test 1: visiting / index', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
  });
});

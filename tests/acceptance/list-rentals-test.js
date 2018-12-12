import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('Acceptance Test 1: visiting / index', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
  });

  test('should show rentals as the home page', async function (assert) {
  });

  test('should link to information about the company.', async function (assert) {
  });

  test('should link to contact information.', async function (assert) {
  });

  test('should list available rentals.', async function (assert) {
  });

  test('should filter the list of rentals by city.', async function (assert) {
  });

  test('should show details for a selected rental', async function (assert) {
  });

});

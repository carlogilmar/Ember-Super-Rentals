import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('Test 1: Should show rentals as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/rentals');
  });

	test('Test 2: should link to information about the company.', async function (assert) {
		await visit('/');
		await click(".menu-about");
		assert.equal(currentURL(), '/about', 'should navigate to about');
	});

  test('Test 3: should link to contact information.', async function (assert) {
		await visit('/');
		await click(".menu-contact");
		assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('Test 4: should list available rentals.', async function (assert) {
		await visit('/');
		assert.equal(
			this.element.querySelectorAll('.listing').length,
			3,
			'should display 3 listings');
	});

  //test('should filter the list of rentals by city.', async function (assert) {
  //});

  //test('should show details for a selected rental', async function (assert) {
  //});

});

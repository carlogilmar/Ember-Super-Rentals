import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  click,
  currentURL,
  visit,
  fillIn,
  triggerKeyEvent } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

const ITEMS = [{city: 'San Francisco'}, {city: 'Portland'}, {city: 'Seattle'}];
const FILTERED_ITEMS = [{city: 'San Francisco'}];

module('Integration | Component | list-filter', function(hooks) {
  setupRenderingTest(hooks);

  test('should initially load all listings', async function (assert) {
    // we want our actions to return promises,
    //since they are potentially fetching data asynchronously
    this.set('filterByCity', () => resolve({ results: ITEMS }));
    // with an integration test,
    // you can set up and use your component in the same way your application
    // will use it.
    await render(hbs`
      {{#list-filter filter=(action filterByCity) as |results|}}
      <ul>
      {{#each results as |item|}}
      <li class="city">
      {{item.city}}
      </li>
      {{/each}}
      </ul>
      {{/list-filter}}
      `);
    return settled().then(() => {
      assert.equal(this.element.querySelectorAll('.city').length, 3);
      assert.equal(this.element.querySelector('.city').textContent.trim(), 'San Francisco');
    });
  });

  test('should filter the list of rentals by city', async function(assert) {
    await visit('/');
    await fillIn('.list-filter input', 'seattle');
    await triggerKeyEvent('.list-filter input', 'keyup', 69);
    assert.equal(this.element.querySelectorAll('.results .listing').length, 1, 'should display 1 listing');
    assert.ok(this.element.querySelector('.listing .location').textContent.includes('Seattle'), 'should contain 1 listing with location Seattle');
  });
});

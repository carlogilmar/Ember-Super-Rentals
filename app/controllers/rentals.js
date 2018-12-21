import Controller from '@ember/controller';

export default Controller.extend({
  filterByCity(param) {
    if (param !== '') {
      return this.store.query('rental', { city: param });
    } else {
      return this.store.findAll('rental');
    }
  }
});

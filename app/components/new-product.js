import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  
  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },

    saveProduct1() {
      var params = {
        title: this.get('title'),
        cost: this.get('cost'),
        description: this.get('description'),
        image: this.get('image')
      };
      this.set('addNewProduct', false);
      this.sendAction('saveProduct2', params);
    }
  }
});

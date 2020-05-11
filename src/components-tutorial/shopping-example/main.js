//Create a new component for product-details with a prop of details. 

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: '#product-template',
  data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
          {
            variantId: 2234,
            variantColor: 'green',
            variantImage:  'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
            variantQuantity: 10     
          },
          {
            variantId: 2235,
            variantColor: 'blue',
            variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
            variantQuantity: 0     
          }
        ],
        cart: 0
    }
  },
    methods: {
      addToCart: function() {
          this.cart++;
      },
      removeFromCart: function() {
        this.cart--;
      },
      updateProduct: function(index) {  
          this.selectedVariant = index
      }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product  
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
          return this.premium ? 'Free' : '2.99€';
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
      premium: true
    }
})
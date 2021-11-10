var app = new Vue({
    el: '#app',
    data: {
      name: 'Manuel!',
      image: 'img/red.jpg',
      color: 'red'
    },

    methods: {
      colorRed() {
         this.color = 'red';
         this.image = 'img/red.jpg';
      },
      colorGreen() {
         this.color = 'green';
         this.image = 'img/green.jpg';
      },
      colorBlue() {
         this.color = 'blue';
         this.image = 'img/blue.jpg';
      }
      
    }
    
  });
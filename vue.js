var todo = new Vue({
    el: '#TODOlist',
    data:{
      id: 0
      ,
      vstup: ''
      ,
      items: [
      ]
    },
    methods: {
        Pr_ukol: function(){ 
        this.items.push({message: this.vstup});
        id++;
        this.vstup = '';

      },
    }
  })
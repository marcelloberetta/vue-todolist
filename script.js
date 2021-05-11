
var app = new Vue(
   {
       el: '#root',
       
       data: {
           pushText: '',
           todos: [
               "Mangiare",
               "Portare il gatto a fare un giro",
               "Controllare la lezione",
               "Dormire"
           ],

       },

       
       methods: {
         
           pushTextOnArray () {
               if ( this.pushText.length > 0 ) {
                   this.todos.push( this.pushText );
               }
               this.pushText = "";
           },

          
           deleteThisFromArray ( index ) {
               const arrayTodos = this.todos;
               arrayTodos.splice( index, 1 );
           }

       }
   }
);




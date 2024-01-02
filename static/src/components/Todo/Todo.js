/** @odoo-module **/

import  { Component, useState, xml } from '@odoo/owl'

export class Todo extends Component {
    static template = 'owl.Todo'
    // 1st Prop Validation
    // static props = ['id','description','done']

    // 2nd Prop Validation
    // static props = { task: {type: Object},
    //       element: { id : Number, description:String, done: Boolean}}  // Method 2  - Prop Validation

    // Different Kind of props to test
     static props = { todo: {type: Object, shape:{ id: Number, description:String, done:Boolean}}}

    setup(){
        this.todo = { id: 3, description: "buy milk", done: false };
    }
}

export class TodoList extends Component {
    static props = { todos: {type: Array,
        element : { type: Object, shape:{ id: Number, description:String, done:Boolean}}}}


    static template = xml`
                    <div class="row">
                        <p><input t-on-keyup="ev => addTask(ev)" placeholder="Enter a new task" /></p>
                        <t t-foreach="props.todos" t-as="task" t-key="task.id">
                            <Todo todo="task"/>
                        </t>
                    </div>`;

    static components = {Todo}

    // TODO: Testing Purposes
    //    todos = [
    //        {id: 1, description: "buy milk", done: true},
    //        { id: 2, description: "clean house", done: false}
    //    ];
    state = useState({todos: []})

    setup(){
        this.todos = useState([])
    }

     addTask(ev){
       let newTodo = {};

       if (ev.keyCode === 13){
           newTodo = {
               id: 6,
               description: ev.target.value,
               done: false
           }

           console.log("EV",ev.keyCode, newTodo, "NEW CONTENT", ev.target.value);

           // Update the list
           this.state.todos = [
              ...this.state.todos, newTodo
          ]

          // Clear the contents
          ev.target.value = "";
       }
    }
}

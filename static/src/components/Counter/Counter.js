/** @odoo-module **/

import {Component, useState} from '@odoo/owl';
import { registry } from '@web/core/registry';
import {TodoList} from '../Todo/Todo'

export class Counter extends Component {
    static template = 'owl_scratch.Counter';
    static components = {TodoList}

    setup(){
        this.state = useState({ value: 0 });
     //   this.todos =  useState([]);
    }

    increment(){
        this.state.value++;
    }
}

registry.category('actions').add('owl.OwlScratch', Counter)
import { Task } from './classes/task.js.js'

let app = Vue.createApp({
    data() {
        return {
            todos: [],
            task: '',
            size: '',
            severity: ''
        }
    },
    methods: {
        addTask(event) {
            event.preventDefault();
            this.todos.push(
                new Task(
                    event.target.task.value,
                    event.target.size.value,
                    event.target.severity.value
                )
            );
        },
    }
});
app.mount('#app');
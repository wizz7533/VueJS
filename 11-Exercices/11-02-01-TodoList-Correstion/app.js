let app = Vue.createApp({
    data() {
        return {
            todos: []
        }
    },
    methods: {
        adTask(event) {
            let text = event.target.task.value;
            this.todos.push(texte);
            event.preventDefault();

        }

    }
});
app.mount('#app');
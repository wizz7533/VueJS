import bodyComponent from './body.js';

let app = Vue.createApp({
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    },
    watch: {

    },
    created: function() {
        console.log("Creation de l'application");
    }
});
app.component('v-header', {
    name: 'Header',
    data() {
        return {
            titre: 'Mon premier composant'
        }
    },
    template: `
        <h1>{{ titre }}</h1>
        <v-body></v-body>
    `,
    components: {
        'v-body': bodyComponent
    }
});

app.component('v-footer', {
    name: 'Footer',
    template: `
        <footer>
            <p>Denis' footer</p>
            <ul>
                <li><a href="#">item</a><a href="#">item 2</a><a href="#">item 3</a></li>
            </ul>
        </footer>
        `
});
app.mount('#app');
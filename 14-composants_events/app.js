import bodyComponent from './body.js';

let app = Vue.createApp({
    data() {
        return {
            message: 'Hello World !'
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

// Composant Global : disponible n'importe où dans l'application
app.component('v-header', {
    name: 'Header',
    props: {
        bgColor: {
            type: String
        },
        nbElement: {
            type: Number,
            default: 5
        }
    },
    data() {
        return {
            titre: 'Mon premier composant'
        }
    },
    template: `
    <header>    
        <h1>{{ titre }}</h1>
        <v-body></v-body>
    </header>
    `,
    components: {
        'v-body': bodyComponent
    }
});

// Composant Global
app.component('v-footer', {
    name: 'Footer',
    //La propriété msg fait désormais partie des variables du composant footer
    props: ['msg', 'visible'],
    template: `
        <footer v-if="visible">
        <p>Message: {{ msg }}</p>
            <p><mark>Denis'</mark> footer</p>
            <ul>
                <li><a href="#">item</a><a href="#">item 2</a><a href="#">item 3</a></li>
            </ul>
        </footer>
        `
});

app.mount('#app');
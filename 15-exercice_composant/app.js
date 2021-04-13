let app = Vue.createApp({
    data() {
        return {

        }
    },
    methods: {},
    computed: {},
    watch: {},
});

// Composant Global
app.component('the-header', {
    name: 'The-Header',
    props: {

    },

    data() {
        return {
            titre: "BaseBall is not a crime",
            lienImg: " ./images/dog.jpg ",
            alt: "photo d'un dog",
        }
    },
    methods: {

    },
    template: `
    <header>    
        <h1>{{ titre }}</h1>
        <img class="my-image" :src="lienImg" :alt="alt" style="width : 400px; height: 300px;"/>
    </header>
    `
});

app.component('the-navigation', {
    name: 'The-Navigation',
    props: {

    },

    data() {
        return {

        }
    },
    methods: {

    },
    template: `
    <nav >
        <ul>
            <li ><a href="#">Lien1</a></li>
            <li ><a href="#">Lien2</a></li>
            <li ><a href="#">Lien3</a></li>
        </ul>
    </nav>
    `
});

app.component('the-body', {
    name: 'The-Body',
    data() {
        return {
            title: "Mon bon h2"
        }
    },
    props: {
        // title: this.title
    },
    methods: {
        modifier() {
            this.title = "Pas si bon";
            this.$emit('my-modificator', this.title);
        }

    },
    template: `
        <h2>{{ title }}</h2>
        <v-article @click="modifier()"></v-article>
    `,
    components: {
        'v-article': {
            name: 'Article',
            props: {

            },
            data() {
                return {

                }
            },
            template: `
            <button>Mettre à jour</button>
            `
                // <button :title="{{title}} @my-modificator="{{this.title}} >Mettre à jour</button>
        }
    }
});

app.mount('#app');
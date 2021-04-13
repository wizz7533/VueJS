import VArticle from './varticle.js';

const TheBody = {
    name: 'Header',
    data() {
        return {
            title: 'Gestionnaire de films',
            movies: []
        }
    },
    methods: {
        setTitle(event) {
            this.title = event;
        },
        addMovie(event) {
            let title = event.target.title.value;
            let description = event.target.description.value;
            let year = event.target.year.value;

            let movie = {
                title,
                description,
                year
            }

            this.movies.push(movie);
        },
        removeMovie(index) {
            this.movies.splice(index, 1);
        }
    },
    template: `
        <header>
            <h2>{{title}}</h2>
            <v-article v-on:my-update-title="title = $event">
            </v-article>
        </header>
    `,
    components: {
        VArticle
    }
}

export default TheBody;
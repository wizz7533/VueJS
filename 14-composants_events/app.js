let app = Vue.createApp({
    data() {
        return {
            parentCount: 0,
        }
    },
    methods: {
        incrementerParent(event) {
            console.log("Event: ", event);
            console.log("Type of Event: ", typeof event);
            // Pas de event.target.value
            // Car c'est notre propres evenement
            // et il renvoie un simple nombre
            this.parentCount = event;
        }

    },
    computed: {},
    watch: {},
});

// Composant Global
app.component('v-card', {
    name: 'Card',
    // La propriete msg fait desormais partie des variables du composant footer
    props: ['compteur'],
    // On ne doit pas modifier la props => elle est en lecture seule
    // On doit la copier avant de l'utiliser dans le composant
    data() {
        return {
            childCount: this.compteur
        }
    },
    methods: {
        incrementer() {
            this.childCount++;
            // Déclenchement d'un évènement personnalisé
            // la fonction emit prend 2 arguments:
            // 1- le nom de l'évènement ( je peux mettre le nom que je veux)
            // 2- La valeur / variable/objet ... à transmettre ( le corps de l'évènement)
            this.$emit('my-incrementer-compteur', this.childCount);
        }
    },
    template: `
        <div>
            <p>Compteur Enfant: {{ childCount }}</p>
            <button @click="incrementer()">Incrementer</button>
        </div>
    `
});

app.mount('#app');
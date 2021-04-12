let app = Vue.createApp({
    data() {
        return {
            prenom: "Ella"
        }
    },
    methods: {
        sayHello(message) {
            console.log(message);
        },
        changerPrenom() {
            this.prenom = "Sarah";
        },
        editPrenom(evenement) {
            this.prenom = evenement.target.value;

        },
        afficherValeur(evenement) {
            console.log(evenement.target.value);
        }
    }
});
app.mount('#app');
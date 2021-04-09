let app = Vue.createApp({
    data() {
        return {
            prenoms: ['Maude', 'Rick', 'Alain'],
            utilisateurs: [
                { nom: 'Doe', prenom: 'John' },
                { nom: 'Zarella', prenom: 'Maude' }
            ],
        }
    }
}).mount('#app');
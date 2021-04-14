<template>
    <div>
        <p>Compteur Enfant: {{ childCount }}</p>
        <v-gchildcount :compteur="childCount" @my-incrementer-gccompteur="incrementerChild"></v-gchildcount>
    </div>
</template>

<script>
import GrandChildCompteur from './GrandChildCompteur.vue';
// export default { data() {}, methods: {}, computed: {}}
const ChildCompteur = {
    name: 'ChildCompteur',
    data() {
        return {
            childCount: 0,
        }
    },
    props: ['compteur'],
    methods: {
        incrementerChild(event) {
            this.childCount= event;
            // Déclenchement d'un évènement personnalisé
            // la fonction emit prend 2 arguments:
            // 1- le nom de l'évènement ( je peux mettre le nom que je veux)
            // 2- La valeur / variable/objet ... à transmettre ( le corps de l'évènement)
            this.$emit('my-incrementer-compteur', this.childCount);
        }
    },
    components: {
        'v-gchildcount': GrandChildCompteur
    },
    computed: {}
}
export default ChildCompteur;
</script>

<style>

</style>
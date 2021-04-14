<template>
    <div>
        <p>Compteur Petit Enfant: {{ GrandChildCount }}</p>
        <button @click="incrementergc()">Incrementer</button>
    </div>
</template>

<script>
// export default { data() {}, methods: {}, computed: {}}
const GrandChildCompteur = {
    name: 'GrandChildCompteur',
    data() {
        return {
            GrandChildCount: this.compteur
        }
    },
    props: ['compteur'],
    methods: {
        incrementergc() {
            this.GrandChildCount++;
            // Déclenchement d'un évènement personnalisé
            // la fonction emit prend 2 arguments:
            // 1- le nom de l'évènement ( je peux mettre le nom que je veux)
            // 2- La valeur / variable/objet ... à transmettre ( le corps de l'évènement)
            this.$emit('my-incrementer-gccompteur', this.GrandChildCount);
        }
    },
    computed: {}
}
export default GrandChildCompteur;
</script>

<style>

</style>
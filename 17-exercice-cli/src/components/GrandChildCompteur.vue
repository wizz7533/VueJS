<template>
    <div>
        <p>Compteur Petit Enfant: {{ GrandChildCount }}</p>
        <button @click="incrementergc()">Incrementer</button>
    </div>
</template>

<script>

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
            this.$emit('my-incrementer-gccompteur', this.GrandChildCount);
        }
    },
    computed: {}
}
export default GrandChildCompteur;
</script>

<style>

</style>
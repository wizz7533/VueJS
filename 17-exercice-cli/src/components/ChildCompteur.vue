<template>
    <div>
        <p>Compteur Enfant: {{ childCount }}</p>
        <v-gchildcount :compteur="childCount" @my-incrementer-gccompteur="incrementerChild"></v-gchildcount>
    </div>
</template>

<script>
import GrandChildCompteur from './GrandChildCompteur.vue';

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
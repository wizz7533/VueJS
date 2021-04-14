<template>
    <div>
        <p class="parentCount">Parent Compteur {{ parentCount }}</p>
        <v-childcount :compteur="parentCount" @my-incrementer-compteur="incrementerParent"></v-childcount>
    </div>
</template>

<script>
import ChildCompteur from './ChildCompteur.vue';
// export default { data() {}, methods: {}, computed: {}}
const ClickCount = {
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
    components: {
        'v-childcount': ChildCompteur
    },
    computed: {}
}


export default ClickCount;
</script>

<style scoped>
p {
    background-color: yellow;
}
</style>
<template>
    <div>
        <p class="parentCount">Parent Compteur {{ parentCount }}</p>
        <v-childcount :compteur="parentCount" @my-incrementer-compteur="incrementerParent"></v-childcount>
    </div>
</template>

<script>
import ChildCompteur from './ChildCompteur.vue';

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
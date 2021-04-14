<template>
    <div>
        <h4>DeepCount: {{ deepCount }}</h4>
        <button @click="increment()">Incrementer</button>
    </div>
</template>

<script>
import countStore from '../../store/count.js';
    export default {
        // props: ['childCount'],
        data() {
            return {
                // deepCount: this.childCount
                state: countStore.state
            }
        },
        methods: {
            increment() {
                this.deepCount++;
                this.$emit('update:childcount', this.deepCount);
            }
        },
        computed:{
            deepCount() {
                const compteur = this.state.count;
                return compteur;
            }
        }
    }
</script>

<style scoped>
</style>
<template>
    <header>
        <h1>{{ headerTitle }}</h1>
        <!-- <TheNavigationHeader @send-search="$emit('send-search-parent', $event)"> -->
        <TheNavigationHeader @send-search="sendSearchToApp($event)">
        </TheNavigationHeader>
    </header>
</template>

<script>
// export default { data() {}, methods: {}, computed: {}}
import TheNavigationHeader from './TheNavigationHeader.vue';

const TheHeader = {
    name: 'Header',
    data() {
        return {
            headerTitle: 'Filmothèque'
        }
    },
    methods: {
        sendSearchToApp(event) {
            this.$emit('send-search-parent', event);
        }
    },
    components: {
        TheNavigationHeader
    }
}

export default TheHeader;
</script>

<style scoped>
    

</style>
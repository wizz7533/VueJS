<template>
  <div>
    <v-title></v-title>
    <the-parent-count></the-parent-count>
    <v-header @send-search-parent="updateSearch($event)">

    </v-header>
    <the-body :search="search"></the-body>
  </div>
</template>

<script>
import Title from './components/Title.vue';
import TheHeader from './components/TheHeader.vue';
import TheBody from './components/TheBody.vue';
import ClickCount from './components/CompteurDeClicks.vue';

export default {
  name: 'App',
  data() {
    return {
        search: ''
    }
  },
  methods: {
      updateSearch(event) {
          // console.log("App: ", event);
          this.search = event;
      }
  },
  components: {
    //  'Title': Title,
    //  Title,
    'v-title': Title,
    'v-header': TheHeader,
    'the-body': TheBody,
    'the-parent-count': ClickCount
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

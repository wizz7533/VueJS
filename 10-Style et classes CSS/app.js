let app = Vue.createApp({
    data() {
        return {
            isActive: true,
            mesClasses: {
                active: true
            },
            monStyle: {
                'font-size': '18px',
                color: 'red',
                backgroundColor: '#000'
            }
        }
    },
    methods: {

    }
});
app.mount('#app');
let app = Vue.createApp({
    data() {
        return {
            imgUrl: ''
        }
    },
    methods: {
        changeImage(nombre) {
            if (nombre == 1) {
                this.imgUrl = "./images/dog.jpg"
            } else if (nombre == 2) {
                this.imgUrl = "./images/cat.jpg"
            } else if (nombre == 3) {
                this.imgUrl = "./images/rabbit.jpg"
            } else {
                imgUrl = " "
            };
        }

    }
});
app.mount('#app');
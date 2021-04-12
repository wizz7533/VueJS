let app = Vue.createApp({
    data() {
        return {
            imgUrl: '',
            imgAlt: ''
        }
    },
    methods: {
        changeImage(nombre) {
            if (nombre == 1) {
                this.imgUrl = "./images/dog.jpg"
                this.imgAlt = "A dog"
            } else if (nombre == 2) {
                this.imgUrl = "./images/cat.jpg"
                this.imgAlt = "A cat"
            } else if (nombre == 3) {
                this.imgUrl = "./images/rabbit.jpg"
                this.imgAlt = "A rabbit"
            } else {
                imgUrl = " "
            };
        }

    }
});
app.mount('#app');
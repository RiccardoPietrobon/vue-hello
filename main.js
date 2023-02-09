//console.log(Vue);

const app = Vue.createApp({

    data() {
        return {
            message: `Ciao Mario!`,
            link_img: "https://upload.wikimedia.org/wikipedia/it/5/50/Mario_Nintendo.png"
        }
    }

});

app.mount('#root');


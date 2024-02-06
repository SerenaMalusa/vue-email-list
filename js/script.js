const { createApp } = Vue;

const app = createApp({
    data() {
      return {
        email: '',
        }
    }, 
    methods: {
        getEmailAPI() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((reply) => {
                    const result = reply.data.response;
                    console.log(result);
                    this.email = result;
                });
        }
    },

    mounted() {
        // console.log(this.message);
        this.getEmailAPI();
    }
});

app.mount('#app');


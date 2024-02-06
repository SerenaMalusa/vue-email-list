const { createApp } = Vue;

const app = createApp({
    data() {
      return {
        emails: [],
        }
    }, 
    methods: {
        getEmailAPI(i) {            
            
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((reply) => {
                        const result = reply.data.response;
                        // console.log(result);
                        this.emails.push(result);
                        // console.log(this.emails[i],result);
                    });
                                   
        },
        get10Emails() {
            for(let i = 0; i < 10; i++) {
                this.getEmailAPI(i);
            } 
        }
    },

    mounted() {
        // console.log(this.message);
        this.get10Emails();
    }
});

app.mount('#app');


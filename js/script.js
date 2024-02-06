const { createApp } = Vue;

const app = createApp({
    data() {
      return {
        message: 'Hello Vue!'
        }
    }, 
    mounted() {
        
        console.log(this.message);
        
    }
});

app.mount('#app');


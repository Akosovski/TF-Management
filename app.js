const app = Vue.createApp({
    data(){
        return {
            firstName: 'Akosovski',
            lastName: 'Sovalanov',
            email: 'akosovski@gmail.com',
            gender: 'male',
            picture: 'https://avatars.githubusercontent.com/u/66517802?v=4',
        }
    },
    methods: {
        getUser() {
            this.firstName = 'Anna',
            this.lastName = 'Prochniak',
            this.email = 'annaprochniak@gmail.com',
            this.gender = 'female',
            this.picture = 'https://starsbiopedia.com/wp-content/uploads/2022/06/Anna-Prochniak-Bio.jpg'
        },
    },
})

app.mount('#app')
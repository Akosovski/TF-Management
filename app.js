const app = Vue.createApp({
    data(){
        return {
            firstName: 'Akosovski',
            lastName: 'Sovalanov',
            email: 'akosovski@gmail.com',
            gender: 'male',
            picture: 'https://avatars.githubusercontent.com/u/66517802?v=4',
        }
    }
})

app.mount('#app')
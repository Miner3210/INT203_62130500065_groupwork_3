const app = {
    data() {
        return {
            items: [{ message: 'Foo' }, { message: '<img src="./images/1.jpg"></img>' }]
        }
            
        }
    }


Vue.createApp(app).mount('#app')
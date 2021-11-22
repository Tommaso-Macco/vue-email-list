var app = new Vue({
    el: '#app',
    data: {
        emailList: [],
    },
    mounted() {
        // creo la costante self che prende il collegamento data di vue grazie al this
        const self = this;
        for (let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(oggetto){
                self.emailList.push(oggetto.data.response)
            });
        }
        console.log(self.emailList);
    }
});
let app = new Vue({
    el : '#app',
    data : {
        counter : 0,
        message : 'Select a user',
        users : [ {name : 'User'}, {name : "Admin"}],
        content : '',
        comment : '',
        value : false,
        values : [],

        value_2 : 'hello',
        values_2 : 'hello',

        age : 20,

        message_2 : '',

    },
    methods : {
        addCounter() {
            this.counter +=1;
        },
        subCounter() {
            this.counter -=1;
        }
        ,sayHi(name) {
            this.message = `Hi, ${name}`;
        }
    },
});
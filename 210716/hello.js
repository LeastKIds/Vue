// let app = new Vue({
//     el:'#app',
//     data : {
//         user_id : 'user123',
//         user_grade : 'Silver',
//         age : 20
//     },
//     computed : {
//         user_info() {
//             return `${this.user_id}(${this.user_grade})`;
//         },
//
//         age_info()  {
//             if(this.age>=20)
//                 return 'adult';
//             else if(this.age >= 12 && this.age < 20)
//                 return 'Teen';
//             else
//                 return 'Kid';
//         }
//     }
// });

// Vue.component('hello', {
//     props : ['name', 'text'],
//     template: '<p>{{ message }}</p>',
//     data : function() {
//         return { message : `${this.text}, ${this.name}`};
//     }
// });
//
// let app = new Vue({
//     el:'#app',
//     components: {
//         'local-hello' : {
//             template : '<p>This is local component</p>'
//         }
//     }
// })

Vue.component('add', {
    template : '<button @click="add">{{ count }}</button>',
    data() {
        return { count : 0 }
    },
    methods : {
        add() {
            this.count +=1;
            this.$emit('event-add',1);
        }
    }
})

let app = new Vue({
    el : '#app',
    data : {
        totalCount : 0
    },
    methods: {
        updateTotal(count) {
            this.totalCount += count
        }
    }
});


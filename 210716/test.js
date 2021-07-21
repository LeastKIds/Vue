Vue.component('component', {
    template : `<div><input type="text" v-model="nick" placeholder="작성자"> <br>
        <input type="text" v-model="comment" placeholder="내용">
        <button @click="updateChat">등록</button><br/>

        <ul>
            <li v-for="msg in messages">
                <p>{{ msg.nick }} : {{ msg.comment }}</p>
            </li>
        </ul>
        <add @click="updateChat"></add></div>`,
    data () {
        return {
            messages : [],
            nick : null,
            comment : null,
        }
    },
    methods : {
        updateChat() {
            console.log(this.nick);
            console.log(this.comment);

            const message = {
                nick : this.nick,
                comment : this.comment,
            };

            this.messages.unshift(message);

            this.nick=null;
            this.comment=null;
        }
    }

})


let app = new Vue({
    el : '#app',ß
})
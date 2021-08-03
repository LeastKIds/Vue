import axios from 'axios';

export default {
    state : () => ({
        books : [],
        book : []
    }),
    mutations: {
        updateBooks(state, books) {
            state.books = books;
        },
        information(state, book) {
            state.book = book;
        }
    },
    actions : {
        getBooks({commit}) {
            axios.get('/api/books')
                .then(response => {
                    console.log(response.data);
                    commit('updateBooks', response.data);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getBookInformation({commit}, bookId) {
            const url = '/api/books/'+bookId;
            axios.get(url)
                .then(response => {
                    // console.log(response.data);
                    commit('information', response.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
}
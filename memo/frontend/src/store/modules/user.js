import axios from 'axios';

export default {
    state : () => ({
        asscessToken : null,
        userid : null,
    }),
    getters : {
      isAuth(state) {
          if(state.accessToken==null)
              return false;
          return true;
      }
    },
    mutations : {
      signin(state, payload) {
          state.accessToken = payload.accessToken;
          localStorage.setItem('accessToken',state.accessToken);
      },
        signout(state) {
          state.accessToken = null;
          localStorage.removeItem('accessToken');
          location.reload();
        },
        getAccessToken(state){
          state.accessToken = localStorage.getItem('accessToken');
        },
        loginFailed(state) {
          state.accessToken = null;
          localStorage.removeItem('accessToken');
        },
    },
    actions : {
        signin({commit}, payload) {
            const data = {userid : payload.email, password : payload.password};
            return axios.post('/api/auth/login',data)
                .then(response => {
                    console.log('signin status : ' + response.status);
                    if(response.status === 200)
                        commit('signin', {accessToken:response.data.token});
                }). catch( (err) => {
                    commit('loginFailed');
                    console.log('Store error')
                    return Promise.reject(err)
                });
        }
    }
};
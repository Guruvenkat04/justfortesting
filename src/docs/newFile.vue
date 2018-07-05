<template>
    <div>
      <container-fluid>
        <row class="cont-row">
          <div style="margin: auto;">
        <p class="starting-text">Welcome to JustOps</p>
        </div>
         <div class="Get-button">
          <btn id="firebaseui-auth-container" class="Getstarted-btn" v-on:click.native="signin">SignIn With Google</btn></a>
          </div>
        </row>
      </container-fluid>
     </div>
</template>
<script src="https://apis.google.com/js/platform.js?onload=init" async defer></script>
<script src="https://apis.google.com/js/platform.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.1.0/firebase.js"></script>
<script src="https://cdn.firebase.com/libs/firebaseui/3.1.0/firebaseui.js"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.1.0/firebaseui.css"/>
<script>
import Container from '../components/Container.vue';
import Row from '../components/Row.vue';
import Column from '../components/Col.vue';
import Navbar from '../components/Navbar.vue';
import NavbarItem from '../components/NavbarItem.vue';
import NavbarNav from '../components/NavbarNav.vue';
import Btn from '../components/Button.vue';
import Vue from 'vue';
import firebase from 'firebase';
import VueGAPI from 'vue-gapi';

var config = {
  apiKey: "AIzaSyDMeVNgtNvWQ3D0V5T0jMit_kSksxvILCA",
  authDomain: "samplefirebase-480a4.firebaseapp.com",
  databaseURL: "https://samplefirebase-480a4.firebaseio.com",
  projectId: "samplefirebase-480a4",
  storageBucket: "samplefirebase-480a4.appspot.com",
  messagingSenderId: "828434726649"
};
firebase.initializeApp(config);
const apiConfig = {
  apiKey: 'AIzaSyDAAWaXtqMyfZcuOH6OyELBLhj__P4oaOs',
  clientId: '1068536332853-rso0jcbb6hc4qe1dau7b63l97ih04ggr.apps.googleusercontent.com',
  discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  scope: 'https://www.googleapis.com/auth/spreadsheets'
}; 
// Use the plugin and pass along the configuration
Vue.use(VueGAPI, apiConfig);
// var script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = 'https://apis.google.com/js/api.js';
// script.onload = (e) => {
//  script.type = 'text/javascript';
    // script.src = 'https://apis.google.com/js/api.js';
    // script.onload = (e) => {
    //   gapi.load('client:auth2', () => {
    //     gapi.client.init({
    //       apiKey: 'AIzaSyDAAWaXtqMyfZcuOH6OyELBLhj__P4oaOs',
    //             clientId: '1068536332853-hf72jnfj8d42siqagoa38v6u7hf3lc6k.apps.googleusercontent.com',
    //             discoveryDocs: config.google.discovery_docs,
    //             scope: config.google.scope,
    //         }).then(() => {
    //       store.commit('currentUserProfile', null)
    //       store.commit('authenticated', false)
    //       resolve()         
    //     })
    //       });
    // }
    // document.getElementsByTagName('head')[0].appendChild(script);
// }
// // bind this to your single page app...
// document.getElementsByTagName('head')[0].appendChild(script);
export default {
  name: 'HomePage',
  components: {
    Container,
    Column,
    Row,
    Navbar,
    NavbarItem,
    NavbarNav,
    Btn,
  },
  mounted() {
    var provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider);
    firebase.auth().getRedirectResult()
      .then(function(result) {
        console.log(result);
        // var token = result.credential.accessToken;
        // // console.log(token);
        // var user = result.user;
        // console.log(user.displayName);
      });    
    // var googleUser = gapi.auth2.getAuthInstance().currentUser.get();
    // var isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
    // if (isSignedIn) {
    //   var idToken = googleUser.getAuthResponse().id_token;
    //   var creds = firebase.auth.GoogleAuthProvider.credential(idToken);
    //   firebase.auth().signInWithCredential(creds)
    //   .then(user => {
    //     var googleProfile = googleUser.getBasicProfile();
    //     if (user) {
    //       console.log("user");
    //     };
    //   });
    // }
  },
  methods: {
    signin(){
      console.log("jhfjkdf");
      this.$getGapiClient()
        .then(gapi => {
          console.log("hello");
          var provider = new firebase.auth.GoogleAuthProvider();
          console.log(provider);
          firebase.auth().signInWithRedirect(provider); 
          firebase.auth().getRedirectResult()
          .then(function(result) {
            console.log(result);
          });
        });
    }
  }
};
</script>

<style scoped>
.btn {
    padding: 0.84rem 2.14rem;
    font-size: 0.81rem;
    transition: all 0.2s ease-in-out;
    margin: 0.375rem;
    border: 0;
    border-radius: 1.125rem;
    cursor: pointer;
    text-transform: uppercase;
    white-space: normal;
    word-wrap: break-word;
    color: #ffffff !important;
}
.row{
   margin-right: 0px;
   margin-left: 0px;
}
.Getstarted-btn{
  background: #FFFFFF !important;
  margin: auto !important;
  width: 140% !important;
}
.ripple-parent {
  position: inherit;
}
.starting-text{
  font-weight: bold;
  color: #FFFFFF !important;
  font-size: 24px !important;
  text-align: center !important;
 /* margin-top: 5% !important;
  margin-bottom: 3% !important;*/
  margin-left: auto !important;
  margin-right: auto !important;
}
.btn-default {
    background-color: #ffffff !important;
    color: #13411d !important;
}
.cont-row{
  background: #258039 !important;
  height: 430px !important;
}
.Get-button{
  margin: 0% 43% !important;
  text-transform: none !important;
}
.mig-text{
  font-family: "Robato";
  font-size: 20px !important;
  margin-bottom: 5% !important;
}
.mig-title{
  font-weight: bold !important;
  width: 100% !important;
  font-size: 35px !important;
  text-align: center !important;
  margin-top: 5% !important;
  margin-bottom: 3% !important;
}
@media only screen and (min-width:500px ) and (max-width: 700px){
.mig-title{
  width: 100% !important;
  text-align: center !important;
  font-size: 25px !important; 
}
.mig-text{
 float: left !important;
  width: 100% !important;
  margin-left: 5% !important;
}
.Get-button{
  margin: 0% 30% !important;
}
}
@media (max-width: 499px)
{
 .Get-button{
  margin:  20% 26% !important;
}
.mig-title{
  width: 100% !important;
  text-align: center !important;
  font-size: 25px !important; 
}
.mig-title{
  float: left !important;
  width: 100% !important;
  margin-left: 5% !important;
  font-size: 25px !important;
  margin-right: 8% !important;
}
.mig-text{
 float: left !important;
  width: 100% !important;
  margin-left: 5% !important;
}
}

</style>

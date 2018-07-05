<template>
  <div id="app">
      <nav :class="className" :is="tag" :style="navStyle">
     <a :href="href" class="navbar-brand" >{{name}}
      <img src="../assets/justopslogo.svg" style="width: 15%;">
    </a>
    </nav>
    <navbar dark position="top" class="default-color" scrolling>
      <navbar-collapse>
        <navbar-nav right>
          <navbar-item waves-fixed><a class="navbarItem" href="#/howitworks">How it Works</a></navbar-item>
          <navbar-item waves-fixed><a class="navbarItem" href="#/pricing">Pricing</a></navbar-item>
          <navbar-item waves-fixed v-if="loggedIn === '0'"><a class="navbarItem" href="#/signin" v-if="loggedIn === '0'">Log In</a></navbar-item>
          <div>
          <navbar-item waves-fixed v-if="loggedIn === '0'"><a class="navbarItem" href="#/signup" v-if="loggedIn === '0'">Sign Up</a>
          </navbar-item>
          <!-- <navbar-item waves-fixed v-b-tooltip.hover title="Sign out" v-else> <a href="#" v-on:click="logout" class="link naveUser"><span><b>{{ userName   }}</b></span></a></navbar-item> -->
          <dropdown btn-group v-else>
          <dropdown-toggle @click.native="toggleDropdown(0)" class="naveUser">{{ userName   }}</dropdown-toggle>
          <dropdown-menu v-show="active[0]" class="collapse-item">
          <dropdown-item><a href="#/profile">Profile</a></dropdown-item>
          <dropdown-item><a href="#/activity">Activity</a></dropdown-item>
          <dropdown-item ><a v-on:click="logout">Log Out</a></dropdown-item>
          </dropdown-menu>
          </dropdown>
          </div>
        </navbar-nav>
      </navbar-collapse>
    </navbar>
 <!--    <navbar dark position="top" class="default-color1"  href="#/" scrolling v-show="header2">
      <navbar-collapse>
        <navbar-nav right>
          <navbar-item waves-fixed><a class="navbarItem2" href="#/howitworks">How it Works</a></navbar-item>
          <navbar-item waves-fixed><a class="navbarItem2" href="#/pricing">Pricing</a></navbar-item>
          <navbar-item waves-fixed><a class="navbarItem2" href="#/signin">Log In</a></navbar-item>
          <navbar-item waves-fixed><a class="navbarItem2" href="#/signup">Sign Up</a></navbar-item>
        </navbar-nav>
      </navbar-collapse>
    </navbar> -->
    <main :style="{marginTop: '0px'}">
     <!--  <router-view></router-view> -->
    </main>
   <!--  <Ftr color="default-color">
      <p class="footer-copyright mb-0 py-3 text-center">
        &copy; {{new Date().getFullYear()}} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </p>
    </Ftr> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NavbarItem from '@/components/NavbarItem.vue';
import NavbarNav from '@/components/NavbarNav.vue';
import NavbarCollapse from '@/components/NavbarCollapse.vue';
import Ftr from '@/components/Footer.vue';
import EdgHd from '@/components/EdgeHeader.vue';
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import Dropdown from '../components/Dropdown';
import DropdownItem from '../components/DropdownItem';
import DropdownMenu from '../components/DropdownMenu';
import DropdownToggle from '../components/DropdownToggle';
import Btn from '../components/Button';
import MdInput from '../components/MdInput.vue';
import MdTextarea from '../components/MdTextarea.vue';
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAdGNDI0COpfc1Hz009rqioZdklYtsm55E',
    libraries: 'places',
    // libraries: 'places', //// If you need to use place input
  }
});
export default {
  name: 'app',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Ftr,
    EdgHd,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Btn,
    'mdinput': MdInput,
    'mdtextarea': MdTextarea,
  },
  data() {
    return { 
      loggedIn: localStorage.getItem('loggedIn') || '0',
      userName:"",
      active: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false
      },
    };
  },
  methods:{
    logout() {
      localStorage.clear();
      window.location.reload(true);
      // this.$notify.success('Logout Successfully!!'); 
      // localStorage.setItem('sonarUrl', 0);     
      this.$router.push('/');
    },
    toggleDropdown(index) {
      for (let i = 0; i < Object.keys(this.active).length; i++) {
        if (index !== i) {
          this.active[i] = false;
        }
      }
      this.active[index] = !this.active[index];
    },
    allDropdownsClose(target) {
      for (let i = 0; i < Object.keys(this.active).length; i++) {
        this.active[i] = false;
      }
    },
    onClick(e) {
      let parent = e.target;
      let body = document.getElementsByTagName('body')[0];
      while (parent !== body) {
        if (parent.classList.contains('dropdown') || parent.classList.contains('btn-group')) {
          return;
        }
        parent = parent.parentNode;
      }
      this.allDropdownsClose(e.target);
    }
  },
  mounted() {
    document.addEventListener('click', this.onClick);
  },
  destroyed() {
    document.removeEventListener('click', this.onClick);
  },
  beforeMount() {
    this.userName = localStorage.getItem('firstName') || '';
    this.loggedIn = localStorage.getItem('loggedIn') || '0';
  },
};

</script>

<style>
.flyout {
	display:flex;
	flex-direction: column;
	/*min-height:100vh;*/
	justify-content: space-between;
}
.default-color{
  background-color: #FFFFFF !important;
}
.navbarItem{
  color: #000000 !important;
  font-weight: normal !important;
}
.fixed-top{
  position: unset !important;
}
.naveUser{
  color: #000000 !important;
}
/*.default-color1{
  background-color: #f95623 !important;
}
.navbarItem2{
  color: #FFFFFF !important;
}*/
.btn-default.dropdown-toggle:hover, .btn-default.dropdown-toggle:focus {
  background-color: transparent !important;
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0) !important;
}
.btn-default.dropdown-toggle:focus {
  background-color: transparent !important;
}
.btn:focus, .btn.focus {
  box-shadow: 0 0 0 0rem rgba(0, 0, 0, 0) !important;
}
.btn-group > .btn:hover{
  z-index: 0 !important;
}
.btn-group > .btn:focus{
  z-index: 0 !important;
}
.btn-default.dropdown-toggle{
  background-color: transparent !important;
  font-size: 14px !important;
  padding: 0.8em !important;
}
.btn-default.dropdown-toggle{
  background-color: transparent !important;
  font-size: 14px !important;
  padding: 0.8em !important;
}
.btn{
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0) !important;
}
</style>

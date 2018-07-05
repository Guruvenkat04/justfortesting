<template>
  <div id="app" class="flyout">
   <!--  <navbar dark position="top" class="default-color"  href="#/" scrolling>
      <navbar-collapse>
        <navbar-nav right>
          <navbar-item waves-fixed><a class="navbarItem1" href="#/howitworks" v-on:click="navBar">How it Works</a></navbar-item>
          <navbar-item waves-fixed><a class="navbarItem1" href="#/pricing" v-on:click="navBar">Pricing</a></navbar-item>
          <navbar-item waves-fixed><a class="navbarItem1" href="#/signin" v-on:click="navBar">Log In</a></navbar-item>
          <navbar-item waves-fixed><a class="navbarItem1" href="#/signup" v-on:clicke="navBar">Sign Up</a></navbar-item>
        </navbar-nav>
      </navbar-collapse>
    </navbar> -->
   <!--  <navbar dark position="top" class="default-color1"  href="#/" scrolling v-show="header2">
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
      <router-view></router-view>
    </main>
    <!-- <Ftr color="default-color">
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

export default {
  name: 'app',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Ftr,
    EdgHd,
  },
};

</script>

<style>
.flyout {
	display:flex;
	flex-direction: column;
	min-height:100vh;
	justify-content: space-between;
}
/*.default-color{
  background-color: #FFFFFF !important;
}
.navbarItem1{
  color: #000000 !important;
}
.default-color1{
  background-color: #f95623 !important;
}
.navbarItem2{
  color: #FFFFFF !important;
}*/
</style>

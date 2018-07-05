<template>
<div> 
  <homeheader></homeheader>
  <div class="container-fluid contFlu w-100 pl-0 pr-0">
    <row class="bannerRow w-100">
<img id="bannerImage" class="bannerImage w-100" src="../assets/homepage.png">
<p class="simplify font-weight-bold">SIMPLIFY YOUR CI/CD</p><br/><br/>
<p class="simplifytext font-weight-bold">All DevOps tools integrated in oneplace to simplify the process</p>
<!-- <button class="btnGetstart">Create Account</button> -->
</row>
<div>
<button type="button" class="btnGetstart btn btn-success" id="btnGetStart" v-on:click="getstart" v-if="loggedIn === '1'" >Get Started</button>
<button type="button" class="btnGetstart btn btn-success" id="btnCreateAccount" v-on:click="googlesignup"  v-else >Create Account</button>
<button type="button" id="scheduleDemo" class="btnGet btn btn-success ">Schedule Demo</button>
</div>
  </div>
<!-- <row class="brandLogos w-100">
  <column class="zendImg" md="3">
  <img src="../assets/zendesklogo.png" class="float-left brandLogoZen" />
</column>
<column md="2">
   <img src="../assets/Herokulogo.png"  class="brandLogoHero"/>
 </column>
 <column md="2">
  <img src="../assets/exotellogo.png" class="brandLogoExot"/>
</column>
<column md="2">
  <img src="../assets/freshsalelogo.png" class="brandLogoFresh" />
</column>
<column md="3">
  <img src="../assets/zohologo.png" class="float-right brandLogoZoho" /> 
</column>
</row> -->
<container class="solutionCont">
  <row class="w-100">
    <p class="m-auto font-weight-bold p-5 solutionHead">ALL IN ONE SOLUTION</p>
  </row>
<row class="guidRow mb-5">
  <column md="6" sm="12" class="float-left frillCol">
      <div class="deployGuid text-center">
    <img src="../assets/icon1.png" class="deployImg float-left"/>
    <h3 class="FrillsHead d-inline-block font-weight-bold">No Frills CI/CD</h3>
      </div><br/>
    <div class="d-inline-block text-center ml-0">
    <p class="frillsCond ml-3 d-inline-block justify">Not a tech expert? No issues,<br/>
      Just follow simple steps to<br/>achieve effective DevOps</p>
    </div>
  </column>

  <column md="6" sm="12" class="float-right autotestCol"> 
    <div class="nodirecServer">
    <img src="../assets/icon2.png" class="serverImg float-left ml-5"/>
    <h3 class="serverHead ml-4 d-inline-block font-weight-bold">Automatic Test Env.</h3>
    </div><br/>
    <div class="d-inline-block text-center">
     <p class="evnCond d-inline-block justify">Not a tech expert? No issues,<br/>Just follow simple steps to<br/>achieve effective DevOps
    </p>
    </div>
  </column>
</row>
<row class="mb-5 secondCond">
  <column md="6" sm="12" class="float-left rapidcol">
     <div class="easyInt">
    <img src="../assets/icons3.png" class="easyIntImg float-left mr-3" style="margin-left: 5em;" />
    <h3 class="rapidHead font-weight-bold">Rapid Releases</h3>
</div><br/>
     <div class="d-inline-block text-center">
   <p class="rapidCont d-inline-block justify">Not a tech expert? No issues,<br/>Just follow simple steps to<br/>achieve effective DevOps
    </p>
  </div>
  </column>
  <column md="6" sm="12" class="float-right instantCol">
     <div>
    <img src="../assets/icon4.png" class="instImg float-left" />
    <h3 class="instHead d-inline-block font-weight-bold" style="margin-left: 0.8em;">Instant Notifications</h3>
</div><br/>
     <div class="d-inline-block text-center">
    <p class="instCont d-inline-block ml-5">
      <span>No strings attached to the number of</span><br/>
      <span>builds and users</span>
    </p>
  </div>
  </column>
</row>
</container>
<div class="container-fluid footerCon text-center">
  <row>
    <p class="footerContent m-auto p-3 font-weight-bold">14days of free trial will all premium features unlocked</p>
    </row>
    <row>
    <btn v-on:click.native="googlesignup" v-if="loggedIn === '0'" class="signUPGoogle m-auto font-weight-bold">Sign Up with Google</btn> 
    <btn v-else class="signUPGoogle m-auto font-weight-bold" id="gettingStarted" v-on:click.native="getstart">Get Started</btn>
  </row>
  </div> 
<div class="container-fluid ">
  <row class="w-100">
  <div class="justops text-center w-100"><h3 class="justworks">HOW JUSTOPS WORKS?</h3></div>
</row>
<row class="w-100">
  <video class="videoFile m-auto w-80" id="jusOpsVideo" controls>
    <source src="../assets/sample.mp4" type="video/mp4">
    <source src="../assets/sample.ogg" type="video/ogg">
    Your browser does not support the video tag.
  </video>
</row>
</div>
<!-- <div class="container-fluid footer text-center footer">
    <p class="footer m-auto p-4 font-weight-bold">Copyright Cogzidel 2017-2018</p>
  </div>  -->
   <footerPage class="footerView"></footerPage>
</div>

</template>
<script>
import Btn from '../components/Button';
import Column from '../components/Col';
import Row from '../components/Row';
import Container from '../components/Container';
import homeheader from '../docs/homeheader.vue';

export default {
  name: 'JustDeploy',
  components: {
    Btn,
    Column,
    Row,
    Container,
    homeheader,
  },
  data(){
    return {
      sonarUrl : '', 
    };
  },
  mounted(){
    console.log(localStorage.getItem('sonarUrl'));
    if (localStorage.getItem('sonarUrl') == 2){
      localStorage.setItem('sonarUrl', 0);
      location.reload(true);
    }
  },
};
</script>
<style scoped>
.solutionCont{
  margin-top: 5em !important;
}
.footerView{
  margin-top: 20em !important;
  width: 100% !important;
}
.simplify{
  position: relative;
  bottom: 11.5em;
  margin-left: 39%;
  font-size: 26px !important;
  color: #FFFFFF !important;
}
.simplifytext{
  position: relative;
  left: 28%;
  font-size: 22px !important;
  color: #FFFFFF !important;
  bottom: 14em;
}
.btnGetstart{
  background-color: #8bc34aff !important;
  color: #FFFFFF !important;
  font-size: 16px !important;
  position: relative !important;
  bottom: 13em !important;
  left: 27% !important;
/*  text-transform: none;*/
}
.btnGetstart:active{
  background-color: #8bc34aff !important;
  color: #FFFFFF !important;
}
.btnGet{
  background-color: #ffffff !important;
  color: #8bc34aff !important;
  font-size: 16px !important;
  position: relative !important;
  bottom: 13em !important;
  left: 40% !important;
}
.btnGet:active{
  background-color: #ffffff !important;
  color: #8bc34aff !important;
}
.FrillsHead{
  margin-right: 7em !important;
}
.instHead{
  margin-left: 0.8em;
}
.ublinitImg{
  margin-left: 3em !important;
}
.frillsCond{
  text-align: left !important;
}
.evnCond{
  margin-left: 1.5em !important;
  text-align: left !important;
}
.rapidCont{
  text-align: left !important;
}
.instCont{
margin-left: 1.5em !important;
text-align: left !important;
}
.instImg{
  margin-left: 3.5em !important;
}
.solutionHead{
  font-size: 30px !important;
}
.justworks{
  font-size: 27px;
  font-weight: bold;
  padding: 3rem;
}
.videoFile{
  width: 80% !important;
}
.footer{
  background-color: #ff5722ff !important;
}

.footerContent{
  font-size: 20px !important;
  color: #ffffff !important;
  }
  .deployImg{
    margin-left: 5em !important;
  }
.signUPGoogle{
    width: 15em !important;
    font-size: 16px !important;
    text-transform: none !important;
    background-color: #8bc34aff !important;
    color: #ffffff !important;
}
.footerCon{
  background-color: #ff5722ff !important;
  height: 150px !important;
  padding: 0px 0px !important;
}
.brandLogoZen{
  padding: 2em 0em 0em 4em;
}
.brandLogoHero{
  padding: 2em;
}
.brandLogoExot{
  padding: 2em 0em 0em 4em;
}
.brandLogoFresh{
  padding: 2em 0em 0em 3em;
}
.brandLogoZoho{
  float: right !important;
  padding: 2em 5em 0em 0em;
}
.contFlu{
  background-color: #ff5722ff !important;
  height: 410px !important;
}
.textHome{
  font-size: 24px !important;
   position: absolute !important;
   color: #FFFFFF !important;
    margin-top: 10% !important;
    margin-left: 12% !important;
}
.container{
    padding-right: 0px !important; 
    padding-left: 0px !important; 
}
.col-sm-6,.col-md-6{
    padding-right: 0px !important; 
    padding-left: 0px !important; 
}
.row{
  margin-right: 0px !important; 
  margin-left: 0px !important; 
}
@media (min-width: 576px) and (max-width: 767.98px) {
.bannerImage{
  width: 100% !important;
  height: 100% !important;
}
.simplifytext{
   word-wrap: break-word !important;
  text-align: center !important;
  left: 25% !important;
  width: 50% !important;
  font-size: 17px !important;
}
.simplify{
  font-size: 20px !important;
  margin-top: 4em !important;
  margin-left: 33% !important;
}
.btnGet{
  bottom: 20em !important;
  left: 21% !important;
  font-size: 12px !important;
}
.btnGetstart{
  font-size: 12px !important;
  bottom: 20em !important;
  left: 21% !important;
}
.contFlu{
  height: 400px !important;
}
.solutionCont{
  margin-top: 0em !important;
}
.solutionHead{
  font-size: 25px !important;
}
.deployImg{
  margin-left: 5em !important;
}
.frillsCond{
  margin-left: 3rem !important;
}
.FrillsHead{
  margin-right: 4em !important;
}
.serverImg{
  margin-left: 5rem !important;
}
.serverHead{
  margin-left: 2.5rem !important;
}
.evnCond{
  margin-left: 3.2em !important;
}
.instHead{
  margin-left: 1.2em !important;
}
.instImg{
    margin-left: 5.5em !important;
}
.instCont{
    margin-left: 2.5em !important;
}
.instantCol{
  margin-top: 1rem !important;
  width: 100% !important;
}
.autotestCol{
  margin-top: 1rem !important;
  width: 100% !important;
}
.frillCol{
  width: 100% !important;
}
.rapidHead{
  margin-left: 7em !important;
}
.rapidCont{
  margin-left: 2em !important;
}
.secondCond{
  margin-bottom: 1rem !important;
}
.justworks{
  padding: 2rem !important;
  font-size: 22px !important;
}
.footerView{
  margin-top: 4em !important;
}
.rapidcol{
  width: 100% !important;
}
.footerCon{
  width: 100% !important;
  background-color: #ff5722ff !important;
}
container-fluid{
  background-color: #ff5722ff !important;
}
}
@media (min-width: 768px) and (max-width: 991.98px){
.contFlu{
  height: 360px !important;
}
.solutionCont{
  margin-top: 0em !important;
}
.bannerImage{
  width: 100% !important;
  height: 100% !important;
}
.simplify{
  bottom: 8.5em !important;
  margin-left: 36% !important;
  font-size: 20px !important;
}
.simplifytext{
  width: 50% !important;
  left: 25% !important;
  bottom: 8em !important;
  font-size: 20px !important;
  word-wrap: break-word !important;
  text-align: center !important;
}
.btnGetstart{
  bottom: 8em !important;
  left: 19% !important;
}
.bannerImage{
  width: 100% !important;
  height: 100% !important;
}
.btnGet{
  bottom: 8em !important;
  left: 24% !important;
}
.deployImg{
  margin-left: 1em !important;
}
.FrillsHead{
  margin-right: 1.9em !important;
}
.frillsCond{  
  margin-left: 1rem !important;
}
.serverImg{
  margin-left: 1em !important;
}
.serverHead{
  margin-left: 0.5rem !important;
}
.evnCond{
  margin-left: 0.5em !important;
}
.easyIntImg{
  margin-left: 1em !important;
  margin-right: 1rem !important;
}
.instImg{
  margin-left: 1em !important;
}
.instHead{
  margin-left: 0.2em !important;
}
.instCont{
  margin-left: 6.3em !important;
}
.footerView {
  margin-top: 10em !important;
  width: auto !important;
}
.footerCon{
  width: 100% !important;
  background-color: #ff5722ff !important;
}
}
@media (min-width: 992px) and (max-width: 1199.98px){
.solutionCont{
  margin-top: 0em !important;
}
  .bannerImage{
  width: 100% !important;
  height: 100% !important;
}
.simplify{
  bottom: 11.5em !important;
  margin-left: 39% !important;
  font-size: 20px !important;
}
.simplifytext{
  width: auto !important;
  left: 23% !important;
  bottom: 11em !important;
  font-size: 20px !important;
}
.btnGetstart{
  bottom: 10em !important;
  left: 25% !important;
}
.btnGet{
  bottom: 10em !important;
  left: 30% !important;
}
.deployImg{
  margin-left: 2em !important;
}
.FrillsHead{
  margin-right: 6em !important;
}
.frillsCond{  
  margin-left: 0.5rem !important;
}
.serverImg{
  margin-left: 6em !important;
}
.serverHead{
  margin-left: 1rem !important;
}
.evnCond{
  margin-left: 1em !important;
}
.easyIntImg{
  margin-left: 2em !important;
  margin-right: 0.5rem !important;
}
.instImg{
  margin-left: 6em !important;
}
.instHead{
  margin-left: 0.5em !important;
}
.instCont{
  margin-left: 1em !important;
}
}
</style>
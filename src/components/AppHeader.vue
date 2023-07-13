<template>
  <div>
    <ServerError v-if="ServerError" />
    <v-layout wrap py-1 px-2 px-sm-0 hidden-sm-and-down>
      <v-flex xs2 text-center align-self-center  @click="$router.push('/')" style="cursor:pointer;">
          <v-img
                src="./../assets/nikeLogo.png"
                height="30px"
                contain
              ></v-img>
      </v-flex>
      <v-spacer class="hidden-xs-only"></v-spacer>
    
      <v-flex xs12 sm5 py-4>
        <v-layout  
          wrap
          justify-space-between
          class="ibmsemibold smallm"
          v-if="navItems"
        >
          <v-flex v-for="(item, i) in navItems" :key="i">
            <router-link :to="item.route">
           <span class="regular1" style="cursor:pointer; text-decoration: none!important;color: black!important;">{{
                item.name
              }}</span>
              </router-link>
          </v-flex>
            </v-layout>
      </v-flex>
      <v-spacer class="hidden-xs-only"></v-spacer>

      <v-flex xs12 sm3 py-4>
        <v-layout  
          wrap
          justify-space-between
          class="ibmsemibold smallm"
          v-if="navItems"
        >
          <v-flex xs6>
           <span  class="regular1" style="color: black!important;cursor:pointer">SEARCH</span>
          </v-flex>
          <v-flex xs6>
           <span  class="regular1" style="color: black!important;cursor:pointer">MY CART</span>
          </v-flex>
           </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
    <v-layout wrap py-1 px-2 px-sm-0 hidden-md-and-up>
      <v-flex xs1> 
         <v-app-bar-nav-icon @click.native="sideNav = !sideNav">
        <v-icon color="#3F033B">mdi-menu</v-icon>
      </v-app-bar-nav-icon>
    </v-flex>
      <v-flex xs10 class="bold1" @click="$router.push('/')">NIKE</v-flex>
      <v-navigation-drawer v-model="sideNav" fixed temporary 
          overlay-color="white" >
          <!---------------------------------- SuperAdmin sidebar-------------------------------------------->
          <v-layout wrap >
            <v-flex xs12 text-left text-uppercase align-self-center v-if="navItems">
           <v-layout wrap justify-center v-for="(main, i) in navItems" :key="i" pt-6>
            <router-link :to="main.route">
            <v-flex xs6 align-self-center pl-2 pb-3>
              <span  class="title3" style="text-decoration: none;color: black;">
                {{ main.name }}
                            </span>
            </v-flex>
            </router-link>
           </v-layout>
            </v-flex>
          </v-layout>
        </v-navigation-drawer>
    </v-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sideNav:false,
      hover: false,
      appLoading: false,
      ServerError: false,
      user: {},
      navItems: [
        { name: "MAN", route: "/products", type: "link" },
        { name: "WOMEN", route: "/products", type: "link" },
        { name: "KIDS", route: "/products", type: "link" },
        { name: "COLLECTIONS", route: "/products", type: "link" },
        { name: "CONTACT", route: "/products", type: "link" },
      ],
    };
  },
};
</script>

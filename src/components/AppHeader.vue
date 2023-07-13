<template>
  <div>
    <ServerError v-if="ServerError" />
    <v-layout wrap py-1>
      <v-flex xs2 text-center align-self-center  @click="$router.push('/')" style="cursor:pointer;">
          <v-img
                src="./../assets/nikeLogo.png"
                height="30px"
                contain
              ></v-img>
      </v-flex>
      <v-spacer class="hidden-xs-only"></v-spacer>
    
      <v-flex xs5 py-4>
        <v-layout  
          wrap
          justify-space-between
          class="ibmsemibold smallm"
          v-if="navItems"
        >
          <v-flex v-for="(item, i) in navItems" :key="i">
            <router-link :to="item.route">
           <span style="color: black !important; cursor:pointer">{{
                item.name
              }}</span>
              </router-link>
          </v-flex>
            </v-layout>
      </v-flex>
      <v-spacer class="hidden-xs-only"></v-spacer>

      <v-flex xs3 py-4>
        <v-layout  
          wrap
          justify-space-between
          class="ibmsemibold smallm"
          v-if="navItems"
        >
          <v-flex xs6>
           <span style="color: black !important; cursor:pointer">SEARCH</span>
          </v-flex>
          <v-flex xs6>
           <span style="color: black !important; cursor:pointer">MY CART</span>
          </v-flex>
           </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
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

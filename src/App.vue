<template>
 <div>
    <v-app id="app">
      <AppHeader />
      <router-view
        style="min-height: 80vh"
      />
    </v-app>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import "./assets/styles/fonts.css";
import "./assets/styles/appStyle.css";

export default {
  components: {
    AppHeader,
  },

  data: () => ({
    //
  }),
};
</script>

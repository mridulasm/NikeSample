<template>
  <div>
    <v-layout wrap pa-2>
    <v-flex xs12 sm5 py-2 v-for="(item,i) in list3" :key="i" text-left px-2>
      {{ item.name }} ({{ item.count }})
    </v-flex>
              </v-layout>
              <v-layout wrap pa-2>
                <v-flex xs6 pb-2 px-2 text-left align-self-center>
                  <span class="title3">Categories</span>
                </v-flex>
                <v-flex xs5 pb-2 text-left align-self-center px-1>
    <v-divider style="color: grey;"></v-divider>
    </v-flex>
    <v-flex xs12 sm5 py-2 v-for="(item,i) in list1" :key="i" text-left px-2>
      {{ item.name }} ({{ item.count }})
    </v-flex>
              </v-layout>
              <v-layout wrap pa-2>
                <v-flex xs6 pb-2 px-2 text-left align-self-center>
                  <span class="title3">Seasons</span>
                </v-flex>
                <v-flex xs6 align-self-center px-1>
    <v-divider style="color: grey;"></v-divider>
    </v-flex>
    <v-flex xs12 sm5 py-2 v-for="(item,i) in list2" :key="i" text-left px-2>
      {{ item.name }} ({{ item.count }})
    </v-flex>
              </v-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list1:[
        {name:"Air Max", count:65},
        {name:"Air Force", count:35},
        {name:"VapourMax", count:180},
        {name:"Huarache", count:55},
        {name:"Air Lebryon", count:50},
        {name:"Air Jordan", count:10},
      ],
      list2:[
        {name:"Summer", count:172},
        {name:"Spring", count:121},
        {name:"Winter", count:180},
        {name:"Monsoon", count:55},
      ],
      list3:[
        {name:"New Items", count:256},
        {name:"Sell-out", count:35},
      ]
    };
  },
};
</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}
.expanel {
  display: flex !important;
}
.expanel2 {
  display: block !important;
}
</style>

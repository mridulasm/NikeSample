<template>
  <div>
    <v-layout wrap justify-center py-4 px-14>
      <v-flex xs6 sm6 md2 align-self-center text-left>
        <span class="boldfont">Men shoes</span>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs6 sm6 md2 pr-4 align-self-center>
        <v-select
          v-model="filtertype"
          :items="filtertypes"
          label="Sort by"
          flat
          tile
          color="eeeeee"
          hide-details="auto"
          dense
          @change="sortProducts()"
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout wrap class="expanel">
      <v-flex
        :style="Draw ? 'width:20% ' : 'width:3% '"
        style="transition: 0.5s"
        class="hidden-sm-and-down"
      >
        <div class="text-left">
          <v-app-bar-nav-icon @click="Draw = !Draw"></v-app-bar-nav-icon>
        </div>
        <div v-if="Draw == true">
         <sidebar/>
        </div>
      </v-flex>
      <v-flex
        grow
        :style="Draw ? 'width:80% ' : 'width:97% '"
        style="transition: 0.5s"
      >
        <v-layout wrap px-16>
          <v-flex
            xs12
            sm3
            pa-4
            v-for="(item, i) in productList"
            :key="i"
            style="transition: 0.5s"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                tile
                @click="$router.push('/ProductDetail?id=' + item.id)"
                :elevation="hover ? 12 : 0"
                style="transition: 0.5s"
                height="100%"
              >
                <v-layout wrap pa-0 fill-height>
                  <v-flex xs12 style="background-color: #f7f7f7">
                    <v-img
                      height="300px"
                      contain
                      v-if="item.image[0]"
                      :src="item.image[0]"
                      :style="hover ? 'opacity: 0.5' : 'opacity : 1'"
                      style="cursor: pointer"
                    >
                    </v-img>
                    <v-img
                      v-else
                      contain
                      src="./../assets/noimage.png"
                      style="cursor: pointer"
                      :style="hover ? 'opacity: 0.8' : 'opacity : 1'"
                    >
                      <v-layout wrap justify-end fill-height>
                        <v-flex align-self-end> </v-flex>
                      </v-layout>
                    </v-img>
                  </v-flex>
                  <v-flex
                    xs12
                    text-left
                    pa-2
                    class="semiboldfont small text-truncate"
                    @click="changeRoute(item)"
                    style="cursor: pointer"
                  >
                    {{ item.name }}
                  </v-flex>

                  <v-flex
                    xs12
                    text-left
                    px-2
                    class="regularfont cgrey"
                    style="cursor: pointer"
                  >
                    <span v-if="item.price">Rs:{{ item.price }}</span>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import axios from "axios";
import sidebar from "./sidebar"
export default {
  components: {
    sidebar
  },
  data() {
    return {
      productList: [],
      filtertype: "",
      filtertypes: [
        "Price, low to high",
        "Price, high to low",
        "Alphabetically A-Z",
        "Alphabetically Z-A",
      ],
      Draw: false,
      transparent: "rgba(255, 255, 255, 0)",
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
  mounted() {
    this.getData();
  },
  methods: {
    sortProducts() {
      if (this.filtertype === "Price, low to high") {
        this.productList.sort((a, b) => a.price - b.price);
      } else if (this.filtertype === "Price, high to low") {
        this.productList.sort((a, b) => b.price - a.price);
      } else if (this.filtertype === "Alphabetically A-Z") {
        this.productList.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.filtertype === "Alphabetically Z-A") {
        this.productList.sort((a, b) => b.name.localeCompare(a.name));
      }
    },
    getData() {
      this.appLoading = true;
      axios({
        method: "GET",
        url: "https://nike-api-8953a-default-rtdb.asia-southeast1.firebasedatabase.app/shoes.json",
      })
        .then((response) => {
          if (response.data) {
            this.productList = response.data;
          } else {
            this.products = [];
          }
        })
        .catch((err) => {
          this.appLoading = false;
          this.ServerError = true;
          console.log(err);
        });
    },
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

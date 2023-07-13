<template>
  <div>
    <v-layout wrap pt-5 v-if="productDetails" px-4>
      <v-flex xs12>
        <v-layout wrap justify-center>
          <v-flex xs12 md7 align-self-start px-4>
            <!--------------------- image --------------------->
            <v-layout wrap justify-center>
              <v-flex xs12 align-self-center pb-sm-15>
                <v-card elevation="0" tile height="100%">
                  <div class="ribbon-2">New Arrival</div> 

                  <v-layout
                    wrap
                    justify-center
                    fill-height
                    v-if="productDetails.image"
                  >
                    <v-flex
                      xs12
                      sm9
                      align-self-center
                      pt-6
                      v-if="productDetails.image.length > 0"
                      style="background-color: #f7f7f7f7;"
                    >
                      <div v-if="!curImage" class="container">
                        <v-img height="420px" width="520px" contain
                          :src=" productDetails.image[0]"
                        >
                        </v-img>
                      </div>
                      <div v-if="curImage" class="container"> <v-img contain height="420px" width="520px"
                          :src="curImage"
                        >
                        </v-img>
                      </div>
                    </v-flex>
                    <v-flex xs12 sm3 pb-3>
                      <v-card tile flat>
                        
                        <v-layout wrap justify-center pt-4>
                          <v-flex
                            xs12 pa-2
                            v-for="(item, i) in productDetails.image"
                            :key="i"
                          >
                            <v-card
                              :ripple="false"
                              @click="showImage(item)"
                              flat
                              tile> 
                              <v-layout wrap justify-center>
                                <v-flex pa-1 xs12 style="background-color: #f7f7f7;">
                                  <v-img
                                    :src=" item"
                                    height="100px"
                                    width="100%"
                                    contain
                                    alt="Image">
                                  </v-img>
                                </v-flex>
                              </v-layout>
                             
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
            <!-------------------------------------------------->
          </v-flex>
          <v-flex xs12 md5 pt-3 px-2 align-self-center>
            <v-layout wrap>
              <v-flex xs12 lg10>
                <v-layout wrap class="text-left" pl-sm-15 pl-md-0 px-2 v-if="productDetails">
                  <v-flex xs12 class="title3">Style : {{ productDetails.style }}</v-flex>
                  <v-flex xs12 py-4>
                     <span class="mainhead">
                      {{ productDetails.name }}
                    </span>
                  </v-flex>
                  <v-flex xs12 class="title3" py-2 style="text-align: justify;">{{ productDetails.description }}</v-flex>
                  <v-flex py-4 xs12 sm4 align-self-center><v-btn color="black" dark block  class="btn1"><v-icon class="lightfont">mdi-cart-outline</v-icon>  Add to cart</v-btn></v-flex>
                  <v-flex py-4 xs12 sm4 class="title3"  px-3 align-self-center>$ : {{ productDetails.price }}</v-flex>
               
                </v-layout>
                <v-layout wrap>
                  <v-flex xs12 pt-2>
                    <v-divider></v-divider>
                  </v-flex>
                </v-layout>
                <v-layout wrap>
                  <v-flex xs12 sm2 py-4 text-left>
                    <span class="title3">
                     Rating
                    </span>
                   
                  </v-flex>
                  <v-flex xs12 sm6 py-4>
                    <v-rating
                              
                              background-color="black"
                              color="black"
                              v-model="rating"
                            ></v-rating>
</v-flex>
                </v-layout>
               
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout wrap>
          <v-flex xs12 pa-4>
         <productsSlider
         v-bind:name="'You may also like'"
              v-bind:products="similarProducts"/>
          </v-flex>
        </v-layout>
        <v-layout wrap>
          <v-flex xs12 pa-4>
       <Advertisement/>
      </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
import productsSlider from "./productsSlider"
import Advertisement from "./Advertisement"
export default {
  components: {
    Advertisement,
    productsSlider
  },
  data() {
    return {
      productList:[],
      curImage: null,
      similarProducts: [],
      productDetails: {},
      photos: [],
      productId: null,
      rating: 4,
    };
  },
  mounted() {
      this.getData();
  },
  methods: {
    getData() {
      this.appLoading = true;
       
      this.productId=this.$route.query.id,
      axios({
        method: "get",
        url: "https://nike-api-8953a-default-rtdb.asia-southeast1.firebasedatabase.app/shoes.json",
      })
        .then((response) => {
          this.productList = response.data;
          let k = this.productList.filter(x => x.id.toString() === this.productId.toString());
          this.productDetails = k[0];
          this.curImage = this.productDetails.image[0]
          let similarpdt = this.productList.filter(x => x.id.toString() != this.productId.toString());
          this.similarProducts = similarpdt;
          this.appLoading = false;
        })
        .catch((err) => {
          this.appLoading = false;
          this.ServerError = true;
          console.log(err);
        });
    },
    showImage(item) {
      this.curImage = item;
    },
  },
};
</script>

<style scoped>
 /* ribbon */
.ribbon-2 {
  --f: 10px; /* control the folded part*/
  --r: 15px; /* control the ribbon shape */
  --t: 10px; /* the top offset */
  color:white;
  position: absolute;
  z-index: 1000;
  inset: var(--t) calc(-1*var(--f)) auto auto;
  padding: 0 10px var(--f) calc(10px + var(--r));
  clip-path: 
    polygon(0 0,100% 0,100% calc(100% - var(--f)),calc(100% - var(--f)) 100%,
      calc(100% - var(--f)) calc(100% - var(--f)),0 calc(100% - var(--f)),
      var(--r) calc(50% - var(--f)/2));
  background: #000000;
  box-shadow: 0 calc(-1*var(--f)) 0 inset #0005;
}


</style>
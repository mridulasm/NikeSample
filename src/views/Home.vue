<template>
  <div style="height: 100vh">
    <v-layout wrap fill-height>
      <v-flex xs12 sm3 align-self-center pl-lg-16>
        <v-layout wrap justify-left pl-lg-10 style="color: grey">
          <v-flex xs12 pb-2>
            <span class="SemiBold1">{{ slides[currentIndex].model }}</span>
          </v-flex>
          <v-flex xs12>
            <span class="regular1">Colours</span>
          </v-flex>
          <v-flex xs12 sm8 py-3 align-self-center>
            <v-layout justify-space-between>
              <v-flex>
                <v-icon color="red">mdi-circle</v-icon>
              </v-flex>
              <v-flex>
                <v-icon color="green">mdi-circle</v-icon>
              </v-flex>
              <v-flex> <v-icon color="black">mdi-circle</v-icon> </v-flex
              ><v-flex> <v-icon color="yellow">mdi-circle</v-icon> </v-flex
              ><v-flex> <v-icon color="orange">mdi-circle</v-icon> </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12>
            <span class="medium1">${{ slides[currentIndex].price }}</span>
          </v-flex>
          <v-flex xs12 py-3>
            <span class="regular1">Sizes</span>
          </v-flex>

          <v-flex xs12 pb-3>
            <span class="light1">S , SM , MD , XL , XXL</span>
          </v-flex>
          <v-flex xs12 pt-4>
            <v-btn dark color="black" width="200px" class="light1"> BUY NOW </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs12 sm6 align-self-center>
        <v-carousel
          ref="carousel"
          :cycle="true"
          interval="4000"
          hide-delimiter-background
          v-model="currentIndex"
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="(item, i) in slides"
            :key="i"
            :src="item.name"
          ></v-carousel-item>
        </v-carousel>
      </v-flex>

      <v-flex xs12 sm3>
        <v-layout fill-height wrap justify-end>
          <v-flex xs12 align-self-center>
            <v-layout wrap>
              <v-flex xs12 py-3 align-self-center text-center>
                <v-btn large icon>
                  <v-icon color="grey" @click="moveCarousel('next')">
                    mdi-chevron-up</v-icon
                  >
                </v-btn>
              </v-flex>
              <v-flex xs12 py-3 align-self-center text-center>
                <v-avatar>
                  <img :src="src1" alt="John" />
                </v-avatar>
              </v-flex>
              <v-flex py-3 xs12 align-self-center text-center>
                <v-avatar>
                  <img :src="src2" alt="John" />
                </v-avatar>
              </v-flex>
              <v-flex py-3 xs12 align-self-center text-center>
                <v-avatar>
                  <img :src="src3" alt="John" />
                </v-avatar>
              </v-flex>
              <v-flex xs12 py-3 align-self-center text-center>
                <v-btn large icon>
                  <v-icon color="grey" @click="moveCarousel('prev')">
                    mdi-chevron-down</v-icon
                  >
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,

      slides: [
        {
          name: "https://i.pinimg.com/originals/51/2b/4b/512b4b870390fac58da5206e88d228d6.png",
          model: "Nike Air Max 2013 Premium",
          price: "820",
        },
        {
          name: "https://img.freepik.com/premium-photo/running-shoes-white-background_10541-635.jpg",
          model: "NIKE Unisexs Versitile Basketball Shoe",
          price: "120",
        },
        {
          name: "https://media.istockphoto.com/id/1382165918/photo/white-sport-sneaker-on-a-white-isolated-background-woman-and-mens-fashion-sport-shoe-sneakers.jpg?s=612x612&w=0&k=20&c=Wk05MDDm0Cvj6FTBDngvnbJ9Tk4it8DrudgfdCo_xsk=",
          model: "Nike Pegasus 40 Premium",
          price: "270",
        },
      ],

      src1: "https://i.pinimg.com/originals/51/2b/4b/512b4b870390fac58da5206e88d228d6.png",
      src2: "https://img.freepik.com/premium-photo/running-shoes-white-background_10541-635.jpg",
      src3: "https://media.istockphoto.com/id/1382165918/photo/white-sport-sneaker-on-a-white-isolated-background-woman-and-mens-fashion-sport-shoe-sneakers.jpg?s=612x612&w=0&k=20&c=Wk05MDDm0Cvj6FTBDngvnbJ9Tk4it8DrudgfdCo_xsk=",
    };
  },

  watch: {
    currentIndex() {
      this.slectImg(this.currentIndex);
    },
  },
  methods: {
    slectImg(val) {
      if (val == 0) {
        this.src1 = this.slides[this.slides.length - 1].name;
        this.src2 = this.slides[0].name;
        this.src3 = this.slides[1].name;
      }
      if (val == this.slides.length - 1) {
        this.src1 = this.slides[1].name;
        this.src2 = this.slides[this.slides.length - 1].name;
        this.src3 = this.slides[0].name;
      } else {
        this.src1 = this.slides[val - 1].name;
        this.src2 = this.slides[val].name;
        this.src3 = this.slides[val + 1].name;
      }
    },
    moveCarousel(direction) {
      if (direction === "prev") {
        this.$refs.carousel.prev();
      } else if (direction === "next") {
        this.$refs.carousel.next();
      }
    },
  },
};
</script>
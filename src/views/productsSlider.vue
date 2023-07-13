<template>
  <div>
    <v-layout wrap justify-start>
      <v-flex xs12 text-left>
        <span style="font-family: poppinssemibold; font-size: 20px; color: #000000">
          {{ name }}
        </span>
      </v-flex>
    </v-layout>
    <v-layout wrap justify-start>
      <v-flex xs12 sm12 md12 1g12 xl12 pa-2>
        <v-slide-group :show-arrows="true">
          <v-slide-item v-for="(item, i) in products" :key="i">
            <v-layout wrap justify-start>
              <v-flex xs12 px-1>
                <v-hover v-slot="{ hover }">
                <v-card
                tile  @click="$router.push('/ProductDetail?id=' +item.id)"
                :elevation="hover ? 12 : 0"
                style="transition:.5s"
                  :max-width="widthOfCard"
                 
                >
                <v-layout wrap pa-0 fill-height>
                  <v-flex xs12 style="background-color: #f7f7f7;">
                    <v-img
                    height="200px" width="150px" contain
                      v-if="item.image[0]"
                      :src="item.image[0]"
                      :style="hover ? 'opacity: 0.5' : 'opacity : 1'"
                      style="cursor: pointer"
                    >
                    </v-img>
                    <v-img
                      v-else contain
                      src="./../assets/noimage.png"
                      style="cursor: pointer"
                      :style="hover ? 'opacity: 0.8' : 'opacity : 1'"
                    >
                      <v-layout wrap justify-end fill-height>
                        <v-flex align-self-end>
                        </v-flex>
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
                    class=" regularfont cgrey"
                    style="cursor: pointer"
                  >
                 <span  v-if="item.price">Rs:{{ item.price }}</span>
                  </v-flex>
                </v-layout>
                </v-card>
              </v-hover>
              </v-flex>
            </v-layout>
          </v-slide-item>
        </v-slide-group>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  props: ["name", "products"],
  data() {
    return {
      widthOfCard: "200px",
    };
  }, 
};
</script>
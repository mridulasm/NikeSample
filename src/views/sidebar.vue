<v-layout wrap pa-2>
    <v-flex v-for="(item,i) in list3" :key="i" text-left px-2>
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
    <v-flex v-for="(item,i) in list1" :key="i" text-left px-2>
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
    <v-flex v-for="(item,i) in list2" :key="i" text-left px-2>
      {{ item.name }} ({{ item.count }})
    </v-flex>
              </v-layout>
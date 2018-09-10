<template>
  <div>
    <!-- VnavigationDrawer -->
    <v-navigation-drawer fixed
         temporary v-model="sideNav">
       <v-list>
        <v-list-tile >
          <v-list-tile-action>
           <v-icon>face</v-icon>
         </v-list-tile-action>
         <v-list-tile-content>
           Crea tu cuenta
         </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
           <v-icon>lock_open</v-icon>
         </v-list-tile-action>
         <v-list-tile-content>
           Ingresa
         </v-list-tile-content>
        </v-list-tile>
       </v-list> 
    </v-navigation-drawer>
    <!-- /VnavigationDrawer -->
    <!-- VToolbar Principal -->
    <v-toolbar height="50%" dark color="blue darken-1" fixed >
      <v-toolbar-side-icon 
      @click.stop="sideNav = !sideNav"
      >
     </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link 
        to="/" 
        style="cursor: pointer; text-decoration: none; color: white;">
          WebTerminal
       </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template >
        <v-autocomplete
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            v-model="select"
            cache-items
            class="mx-3 hidden-sm-and-down"
            clearable
            flat
            hide-no-data
            hide-details
            label="Seleccione el Origen"
            solo-inverted
            prepend-inner-icon="add_location">
        </v-autocomplete>
        <v-icon class="hidden-sm-and-down">arrow_forward</v-icon>
        <v-autocomplete
                :loading="loading"
                :items="items"
                :search-input.sync="search"
                v-model="select"
                cache-items
                class="mx-3 hidden-sm-and-down"
                flat
                hide-no-data
                hide-details
                label="Seleccione el Destino"
                solo-inverted
                prepend-inner-icon="place">
        </v-autocomplete>
      </template>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          <v-icon left>face</v-icon>
          Registrate
        </v-btn>
        <v-btn flat>
          <v-icon left>lock_open</v-icon>
          Ingresa
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- VToolbar Principal -->
    <!-- Mini ToolBar para cuadros de busqueda en Sm devices -->
      <v-toolbar  color="transparent" height="180%" class="hidden-md-and-up" card prominent >
          <v-card width="100%" class="mt-5 hidden-md-and-up" dark color="blue darken-1" >
              <v-layout class="mb-1" >
                <v-autocomplete
                    :loading="loading"
                    :items="items"
                    :search-input.sync="search"
                    v-model="select"
                    cache-items
                    class="mx-2 pt-2 "
                    clearable
                    flat
                    hide-no-data
                    hide-details
                    label="Seleccione el Origen"
                    solo-inverted
                    prepend-inner-icon="add_location">
                </v-autocomplete>
              </v-layout>
              <v-divider></v-divider>
              <v-layout class="mt-1">
                
                  <v-autocomplete 
                          :loading="loading"
                          :items="items"
                          :search-input.sync="search"
                          v-model="select"
                          cache-items
                          class="mx-2 pb-2"
                          flat
                          hide-no-data
                          hide-details
                          label="Seleccione el Destino"
                          solo-inverted
                          prepend-inner-icon="place">
                  </v-autocomplete>
                
              </v-layout>
          </v-card>
          </v-toolbar>
        <!-- /Mini ToolBar para cuadros de busqueda en Sm devices -->

    
  </div>
</template>


<script>
  export default {
    data () {
      return {
        sideNav: false,
        loading: false,
        items: [],
        search: null,
        select: null,
        states: [
          'Alabama',
          'Alaska',
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
          'Federated States of Micronesia',
          'Florida',
          'Georgia',
          'Guam',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Marshall Islands',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Northern Mariana Islands',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Palau',
          'Pennsylvania',
          'Puerto Rico',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virgin Island',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming'
        ]
      }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      }
    },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      }
    }
  };
</script>


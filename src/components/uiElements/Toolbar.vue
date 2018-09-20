<template>
  <div>
    <!-- VnavigationDrawer -->
    <v-navigation-drawer fixed
         temporary v-model="sideNav">
       <v-list>
        <v-list-tile v-for="(item, index) in menuItems" :key="index" :to="item.link">
          <v-list-tile-action >
           <v-icon>{{item.icon}}</v-icon>
         </v-list-tile-action>
         <v-list-tile-content>
           {{item.title}}
         </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
          <v-list-tile-action >
           <v-icon>exit_to_app</v-icon>
         </v-list-tile-action>
         <v-list-tile-content>
           Salir
         </v-list-tile-content>
        </v-list-tile>
       </v-list> 
    </v-navigation-drawer>
    <!-- /VnavigationDrawer -->
    <!-- VToolbar Principal -->
    <v-toolbar height="50%" dark color="blue darken-1" fixed >
      <v-toolbar-side-icon class="hidden-lg-and-up"
      @click.stop="sideNav = !sideNav"
      >
     </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link 
        to="/" 
        style="cursor: pointer; text-decoration: none; color: white;" 
        class="flex headline font-weight-light font-italic mr-1">
          WebTerminal
       </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template >
        <v-autocomplete
            :loading="loading"
            :items="items"
            :search-input.sync="searchOrigen"
            v-model="selectOrigen"
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
            :search-input.sync="searchDestino"
            v-model="selectDestino"
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
      <v-toolbar-items  class="hidden-md-and-down">
          <v-btn v-if="!userIsAuthenticated" v-for="(item, index) in menuItems" :key="index" flat :to="item.link" >
            <v-icon left>{{item.icon}}</v-icon> {{item.title}}
          </v-btn>

          <v-menu offset-y v-if="userIsAuthenticated" >
            <v-btn
              slot="activator"
              flat>
              <v-icon left>perm_identity</v-icon>
                Usuario
              <v-icon >arrow_drop_down</v-icon>
            </v-btn>

            <v-list>
              <v-list-tile
                v-for="(item, index) in menuItems"
                :key="index"
                :to="item.link">
                <v-icon>{{item.icon}}</v-icon>
                <v-list-tile-title>&nbsp;&nbsp;{{ item.title }}</v-list-tile-title>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
                <v-icon left>exit_to_app</v-icon>&nbsp;&nbsp;Salir
              </v-list-tile>
            </v-list>
          </v-menu>

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
              :search-input.sync="searchOrigen"
              v-model="selectOrigen"
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
              :search-input.sync="searchDestino"
              v-model="selectDestino"
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
        searchOrigen: null,
        searchDestino: null,
        selectOrigen: null,
        selectDestino: null,
        states: [
          'Maturin',
          'Barcelona',
          'Puerto La Cruz',
          'Puerto Ordaz',
          'Ciudad Bolivar',
        ],
        menuAuthenticated: [
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me 2' }
        ]
      }
    },
    computed:{
      menuItems(){
        let menuItems = [
          { icon: 'perm_identity', title: 'Registrate', link: '/registroUsuario'},
          { icon: 'how_to_reg', title: 'Ingresa', link: '/inicioUsuario'}
        ]
        if(this.userIsAuthenticated)
          menuItems = [
            { icon: 'perm_identity', title: 'Perfil', link: '/perfil'},
            { icon: 'how_to_reg', title: 'Dashboard', link: '/dashboard'}
          ]
        return menuItems
      },
      userIsAuthenticated(){
        return this.$store.getters.user !== null &&
                this.$store.getters.user !== undefined
      }
    },
    watch: {
      searchOrigen (val) {
        val && val !== this.selectOrigen && this.querySelections(val)
      },
      searchDestino (val) {
        val && val !== this.selectDestino && this.querySelections(val)
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
      },
      onLogout(){
        this.$store.dispatch('logout')
      }
    }
  };
</script>


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
    <v-toolbar prominent height="50%" dark color="blue darken-1" fixed >
      <v-toolbar-side-icon class="hidden-md-and-up"
      @click.stop="sideNav = !sideNav"
      >
     </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link 
        to="/" 
        style="cursor: pointer; text-decoration: none; color: white;" 
        class="flex headline font-weight-light font-italic mr-1 ">
          WebTerminal
       </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template >
        <v-autocomplete
            style="width:8%"
            :loading="loading"
            :items="items"
            :search-input.sync="searchOrigen"
            v-model="selectOrigen"
            cache-items
            class="mx-2 mt-2 hidden-sm-and-down"
            clearable
            flat
            hide-no-data
            hide-details
            label="Origen"
            solo-inverted
            prepend-inner-icon="add_location">
        </v-autocomplete>
        <v-icon class="hidden-sm-and-down">arrow_forward</v-icon>
        <v-autocomplete
            style="width:8%"
            :loading="loading"
            :items="items"
            :search-input.sync="searchDestino"
            v-model="selectDestino"
            cache-items
            class="mx-2 mt-2 hidden-sm-and-down"
            flat
            hide-no-data
            hide-details
            label="Destino"
            solo-inverted
            prepend-inner-icon="place">
        </v-autocomplete>
      </template>
      <v-layout row wrap class="hidden-sm-and-down">
          <v-flex xs6>
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
              lazy
              full-width
              width="290px">
                <v-text-field
                  hint="DD/MM/YYYY format"
                  class="ml-1 mt-3"
                  slot="activator"
                  persistent-hint
                  v-model="computedDateFormatted"
                  background-color="primary"
                  flat
                  label="Fecha de Viaje"
                  solo-inverted
                  readonly
                  prepend-inner-icon="event">
                </v-text-field>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                </v-date-picker>
            </v-dialog>
          </v-flex>
        </v-layout>
      <v-toolbar-items  class="hidden-md-and-down">
        
      </v-toolbar-items>
      <v-tabs class="hidden-sm-and-down"
      slot="extension"
      color="transparent"
      slider-color="blue-grey"
      >
      <v-spacer></v-spacer>
      <v-divider class="mx-1" inset vertical></v-divider>
      <template v-for="(item, index) in menuItems">
        <v-btn  :key="index" :to="item.link" flat  >
          <v-icon left>{{item.icon}}</v-icon> {{item.title}}
        </v-btn>
        <v-divider :key="index" class="mx-1" inset vertical></v-divider>
      </template>
      <v-btn  v-if="userIsAuthenticated" @click="onLogout" flat >
          <v-icon left>exit_to_app</v-icon> Salir
      </v-btn>
      
    </v-tabs>
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
        date: null,
        dateFormatted: null,
        modal: false,
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
            { icon: 'how_to_reg', title: 'Dashboard', link: '/dashboard'},
          ]
        return menuItems
      },
      userIsAuthenticated(){
        return this.$store.getters.user !== null &&
                this.$store.getters.user !== undefined
      },
      computedDateFormatted () {
        return this.formatDate(this.date)
      }
    },
    watch: {
      searchOrigen (val) {
        val && val !== this.selectOrigen && this.querySelections(val)
      },
      searchDestino (val) {
        val && val !== this.selectDestino && this.querySelections(val)
      },
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
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
      },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
    }
  };
</script>


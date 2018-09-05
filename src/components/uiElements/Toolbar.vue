<template>
  <div>
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
    <v-toolbar  dark color="blue darken-1">
      <v-toolbar-side-icon 
      @click.stop="sideNav = !sideNav"
      class="hidden-sm-and-up">
     </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link 
        to="/" 
        style="cursor: pointer; text-decoration: none; color: white;">
          WebTerminal
       </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          <v-icon left>face</v-icon>
          Crea tu cuenta
        </v-btn>
        <v-btn flat>
          <v-icon left>lock_open</v-icon>
          Ingresa
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sideNav: false
    }  
  }
};
</script>




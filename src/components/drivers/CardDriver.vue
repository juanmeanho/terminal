<template>
  <v-layout row wrap class="mt-4" >
    <v-flex xs10 offset-xs1 elevation-18>
      <v-card >
        <v-img
          class="white--text"
          height="300px"
          src="http://www.ifriedegg.com/Images%20third/FusHMain.jpg">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Servicio Disponible</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>

        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6>
              <v-list >
                <template v-for="(item, index) in items">
                  <v-subheader
                    v-if="item.header"
                    :key="item.header">
                    
                  </v-subheader>
                  <v-divider
                    v-else-if="item.divider"
                    :inset="item.inset"
                    :key="index"
                  ></v-divider>
                  <v-list-tile
                    v-else
                    :key="item.title"
                    avatar>
                    <v-list-tile-avatar>
                      <div>
                        <v-btn color="indigo" fab small dark>
                          <v-icon>{{ item.icon }}</v-icon>
                        </v-btn>
                      </div>
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                      <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-flex>
          
            <v-flex xs12 sm12 md6 lg6>
              <v-container>
                <v-layout row>
                  <v-flex elevation-15>

                    <v-card  color="blue lighten-1" class="white--text">
                      <v-layout row wrap >
                        <v-flex>
                          <v-card-title primary-title>
                            <div>
                              <div class="headline">Michael Schumacher</div>
                              <div>Ford Festiva 2011</div>
                            </div>
                          </v-card-title>
                          <v-card-text>
                            <v-chip small color="teal darken-5" text-color="white">
                              <v-avatar class="teal lighten-2"><h3>6</h3></v-avatar>
                                 Viajes Completados
                            </v-chip>
                            <br>
                            <v-chip small color="teal darken-5" text-color="white">
                              <v-avatar class="teal lighten-2"><h3>6</h3></v-avatar>
                                 Viajes Completados
                            </v-chip>
                          </v-card-text>
                        </v-flex>
                        <v-flex xs5 class="mt-1">
                          <v-img
                            src="https://i0.1616.ro/media/2/2701/33647/17592310/1/mark-wahlberg.jpg?width=860"
                            height="125px"
                            contain
                          ></v-img>
                        </v-flex>
                      </v-layout>
                      <v-divider light></v-divider>
                      <v-card-actions class="pa-3">
                        <v-btn>Perfil</v-btn>
                        <v-spacer></v-spacer>
                        <v-icon>star</v-icon>
                        <v-icon>star</v-icon>
                        <v-icon>star</v-icon>
                        <v-icon>star</v-icon>
                        <v-icon>star</v-icon>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>

            </v-flex>
          </v-layout>
        </v-container>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn flat color="orange">Viajar</v-btn>
          <v-btn flat color="orange">Ver mas...</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Comentarios <br>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>



<script>
  export default {
    data () {
      return {
        show: false,
        items: [          {
            icon: 'time_to_leave',
            title: 'Miami - Orlando',
            subtitle: " &mdash; Ruta."

          },
          { divider: true, inset: true },
          {
            icon: 'date_range',
            title: '22/09/2018',
            subtitle: "&mdash; Fecha de Salida."
          },
          { divider: true, inset: true },
          {
            icon: 'av_timer',
            title: '10:00 AM',
            subtitle: "&mdash; Hora de Salida"
          },
          { divider: true, inset: true },
          {
            icon: 'event_seat',
            title: '4',
            subtitle: "&mdash; Puestos Disponibles"
          },
          { divider: true, inset: true },
          {
            icon: 'monetization_on',
            title: '$250',
            subtitle: "&mdash; Tarifa"
          }
        ]
      }
    }
  }
</script>

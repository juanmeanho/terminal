<template>
  <v-layout row wrap class="mt-4" >
    <v-flex xs10 offset-xs1 elevation-18>
      <v-card >
        <div align="center">
          <v-img
            class="white--text"
            height="250px"
            src="https://images.locanto.com.co/3256433596/Vendo-carro-USADO-ECONOMICO-Fiat-Paliot-mod-97-Ahorrador_2.jpg">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <!--<span class="headline">Servicio Disponible</span>-->
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
        </div>

        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6 class="mt-2">
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
          
            <v-flex xs12 sm12 md6 lg6 >
              <v-container>
                <v-layout row>
                  <v-flex elevation-15>

                    <v-card  color="blue lighten-1" class="white--text">
                      <v-layout row wrap >
                        <v-flex>
                          <v-card-title primary-title>
                            <div>
                              <div class="headline" style="font-weight:700">Michael Schumacher</div>
                              <div style="font-weight:700">Ford Festiva 2011<v-icon>time_to_leave</v-icon></div>
                            </div>
                          </v-card-title>
                          <v-card-text>
                            <v-chip small color="teal darken-5" text-color="white">
                              <v-avatar><h3>6</h3></v-avatar>
                                 Viajes Completados
                            </v-chip>
                            <br>
                            <v-chip  small color="blue darken-2" text-color="white">
                              <v-avatar><v-icon>ac_unit</v-icon></v-avatar>
                                 Aire Acondiconado
                            </v-chip>
                            <br>
                            <v-chip small color="teal darken-5" text-color="white">
                              <v-avatar><h3>4</h3></v-avatar>
                                 Puertas
                            </v-chip>
                            <br>
                            <v-chip  small color="blue darken-2" text-color="white">
                              <v-avatar><v-icon>card_travel</v-icon></v-avatar>
                                 Maletero
                            </v-chip>
                          </v-card-text>
                        </v-flex>
                        <v-flex only-xs12 class="mt-4">
                          <v-img
                            src="https://i0.1616.ro/media/2/2701/33647/17592310/1/mark-wahlberg.jpg?width=860"
                            height="125px"
                            contain
                          ></v-img>
                          <v-container>
                            <v-layout row wrap>
                              <v-flex xs12 md12  class="text-xs-center">
                                <v-icon>star</v-icon>
                                <v-icon>star</v-icon>
                                <v-icon>star</v-icon>
                                <v-icon>star</v-icon>
                                <v-icon>star</v-icon>
                                <v-divider></v-divider>
                                <v-btn class="mt-2">Perfil</v-btn>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-flex>
                      </v-layout>
                      <v-divider light></v-divider>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn block color="success">Reserva tu puesto</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>



<script>
  export default {
    data () {
      return {

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

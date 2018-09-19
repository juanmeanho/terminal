<template>
<v-container >
  <v-layout>
    <v-flex xs12 sm10 lg8 offset-sm1 offset-lg2 >
      <!-- VCard Principal-->
      <v-card v-show="true" hover elevation-10 class="mb-3" v-for="(item, index) in datosConductorServicio" :key="index" > 
        <v-img
          class="white--text"
          height="230px"
          :src="item.imageUrl">
            <v-layout align-center justify-end row fill-height>
              <v-flex xs12>
                <!-- Vcard Transparente-->
                <v-card  style="background-color:rgba(0,0,0,0.35)" class="pt-1 mr-2 pl-1 ml-2">
                  <v-layout>
                    <v-chip label color="pink darken-1" text-color="white" style="font-weight:700">
                      <v-avatar>
                        <v-icon>time_to_leave</v-icon>
                      </v-avatar>
                        <h3>{{item.origen }}  - {{item.destino}}</h3>
                    </v-chip>
                    <v-spacer></v-spacer>
                    <v-btn slot="activator" @click="eliminarCard(index)" color="gray" icon><v-icon elevation-10>close</v-icon></v-btn>
                  </v-layout>
                  <v-chip label color="indigo" text-color="white">
                    <v-avatar>
                      <v-icon>date_range</v-icon>
                    </v-avatar>
                      <h3>{{item.fechaSalida}}</h3>
                  </v-chip><br>
                  <v-chip label color="indigo" text-color="white">
                    <v-avatar>
                      <v-icon>av_timer</v-icon>
                    </v-avatar>
                      <h3>{{item.horaSalida}}</h3>
                  </v-chip><br>
                  <v-chip label color="indigo" text-color="white">
                    <v-badge overlap color="pink darken-1">
                      <span slot="badge">{{item.asientosDisponibles}}</span>
                    <v-avatar>
                      <v-icon>airline_seat_recline_normal</v-icon>
                    </v-avatar>
                    </v-badge>
                      <h3> Disponibles</h3>
                  </v-chip><br>
                  <v-chip label color="green" text-color="white">
                    <v-avatar>
                      <v-icon>monetization_on</v-icon>
                    </v-avatar>
                      <h3>{{item.tarifa}} BsS</h3>
                  </v-chip>
                  
                </v-card>
                <!-- /Vcard Transparente-->
              </v-flex>
            </v-layout>
        </v-img>
        <!--/-->
        <v-layout column  justify-center class="hidden-xs-only">
          <!-- VExpansionPanel -->
          <v-expansion-panel popout>
            <v-expansion-panel-content >
              <v-layout slot="header" align-center row spacer>

                <v-flex xs5 sm2 md1>
                  <v-avatar slot="activator" size="52px">
                    <img
                      :src="item.avatarConductor"
                      alt="Avatar">
                  </v-avatar>
                </v-flex>
      
                <v-flex sm5 md5>
                  <div class="text-xs-center">
                    <strong>{{item.nombreConductor}}</strong>
                  </div>
                  <div class="text-xs-center">
                    <v-rating color="orange lighten-3" readonly small :value="item.stars" ></v-rating>
                  </div>
                </v-flex>
                
                <v-flex no-wrap xs5 sm3 md4>
                  <div class="text-xs-center">
                    <strong >{{item.modeloVehiculo}} {{item.marcaVehiculo}} {{item.anioVehiculo}}</strong><br>
                    <v-chip
                    color="blue lighten-4"
                    class="ml-0"
                    label
                    small>
                    <v-icon v-if="item.aireAcondicionado">check</v-icon>
                    <v-icon v-else>clear</v-icon>
                    Aire Acondicionado
                  </v-chip>
                  </div>
                </v-flex>
                <v-flex md5 class="hidden-sm-and-down">
                  <div class="text-xs-center">
                  <strong >&mdash;
                  {{item.serviciosRealizados}} Servicios Realizados <br>
                  &mdash; {{item.numComentarios}} Comentarios</strong>
                  </div>
                </v-flex>
              </v-layout>
              <!-- VCard Datos de Conductor y servicio (ExpansionPanel) LG Devices -->
              <v-card>
                <v-divider></v-divider>
                <v-card-text>                    
                  <!--/-->
                    <v-layout>
                      <v-flex elevation-6 lg6 md6 sm6 class="mr-1">
                              <v-toolbar height="40%" color="blue" dark>
                                 <v-icon>description</v-icon>
                                <v-toolbar-title>Datos del Conductor</v-toolbar-title>
                                <v-spacer></v-spacer>
                              </v-toolbar>
                              <!-- VList Conductor (Expansion Panel) -->
                              <v-list>
                                <template >
                                  <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon  dark>perm_identity</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.nombreConductor}}</v-list-tile-title>
                                      <v-list-tile-sub-title >&mdash;Conductor</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                  <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>time_to_leave</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.modeloVehiculo}} {{item.marcaVehiculo}} {{item.anioVehiculo}} {{item.numPuertas}} Puertas </v-list-tile-title>
                                      <v-list-tile-sub-title >&mdash;Vehículo</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                     <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>navigation</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.serviciosRealizados}}</v-list-tile-title>
                                      <v-list-tile-sub-title >&mdash;Servicios Completados</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                  <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>chat_bubble</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.numComentarios}}</v-list-tile-title>
                                      <v-list-tile-sub-title >&mdash;Comentarios</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>

                                   <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>chat_bubble</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >Lorem Impsum</v-list-tile-title>
                                      <v-list-tile-sub-title >&mdash;Lorem Impsum</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>

                                   <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>chat_bubble</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >Lorem Impsum</v-list-tile-title>
                                      <v-list-tile-sub-title >&mdash;Lorem Impsum</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>
                                   <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>chat_bubble</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >Lorem Impsum</v-list-tile-title>
                                      <v-list-tile-sub-title >&mdash;Lorem Impsum</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>
                                    <div class="text-xs-center">
                                      <v-btn color="success">Ver Perfil</v-btn>
                                    </div>
                                </template>
                              </v-list>
                              <!-- /VList Conductor (Expansion Panel) -->
                      </v-flex>
                      <v-flex elevation-6 lg6 md6 sm6 class="ml-1">
                              <v-toolbar height="40%" color="blue" dark>
                                <v-icon>description</v-icon>
                          <v-toolbar-title>Datos del Servicio</v-toolbar-title>
                            <v-spacer></v-spacer>
                          </v-toolbar>
                              <!-- VList Servicio (Expansion Panel) -->
                          <v-list>
                                <template >
                                  <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon  dark>place</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.origen}} - {{item.destino}}</v-list-tile-title>
                                      <v-list-tile-sub-title >&mdash;Ruta</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                  <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>date_range</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.fechaSalida}}</v-list-tile-title>
                                      <v-list-tile-sub-title >&mdash;Fecha de Salida</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                     <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>access_time</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.horaSalida}}</v-list-tile-title>
                                      <v-list-tile-sub-title >&mdash;Hora de Salida</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                  <v-divider></v-divider>


                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>airline_seat_recline_normal</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.asientosDisponibles}}</v-list-tile-title>
                                      <v-list-tile-sub-title >&mdash;Asientos Disponibles</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>person_add</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.ptoSalida}}</v-list-tile-title>
                                      <v-list-tile-sub-title >&mdash;Punto de Salida</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>


                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>monetization_on</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.tarifa}} BsS</v-list-tile-title>
                                      <v-list-tile-sub-title >&mdash;Tarifa</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>credit_card</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.formaDePago}}</v-list-tile-title>
                                      <v-list-tile-sub-title >&mdash;Forma de Pago</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>
                                    <div class="text-xs-center">
                                      <v-btn color="success" >Reservar</v-btn>
                                    </div>
                                  
                                </template>
                              </v-list>
                              <!-- /VList Servicio (Expansion Panel) -->
                      </v-flex>
                    </v-layout>
                  <!--/-->
                </v-card-text>
              </v-card>
              <!-- VCard Datos de Conductor y servicio (ExpansionPanel) LG Devices -->
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!-- /VExpansionPanel -->
        </v-layout>
        <!--/-->
        <v-container   class="hidden-sm-and-up">
          <v-layout >
              <v-flex>
                <!-- VCard Preview Datos Conductor SM Devices-->
                <v-card>
                  <v-flex class="text-xs-center">
                    <v-avatar slot="activator" size="52px">
                      <img
        :src="item.avatarConductor"
                          alt="Avatar">
                    </v-avatar>
                  </v-flex>
                  <v-flex>
                    <div class="text-xs-center">
                      <strong>{{item.nombreConductor}}</strong>
                    </div>
                    <div class="text-xs-center">
                      <v-rating color="orange lighten-3" readonly small :value="item.stars" ></v-rating>
                    </div>
                  </v-flex>
                  <v-divider></v-divider>
                <v-flex>
                  <div class="text-xs-center mt-1" >
                    <strong >{{item.modeloVehiculo}} {{item.marcaVehiculo}} {{item.anioVehiculo}}</strong><br>
                    <v-chip
                    color="blue lighten-4"
                    class="ml-0"
                    label
                    small>
                    <v-icon v-if="item.aireAcondicionado">check</v-icon>
                    <v-icon v-else>clear</v-icon>
                    Aire Acondicionado
                  </v-chip><br>
                  <strong class="mt-1">&mdash;
                  {{item.serviociosRealizados}} Viajes Realizados <br>
                  &mdash; {{item.numComentarios}} Comentarios</strong>
                  </div>
                </v-flex>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="show = !show">
                    <v-icon>{{item.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-slide-y-transition>
                  <v-card-text v-show="show">
                    <v-layout>
                      <v-flex elevation-6 lg6 class="mb-2">
                         <v-toolbar height="40%" color="blue" dark>
                                 <v-icon>description</v-icon>
                                <v-toolbar-title>Datos del Conductor</v-toolbar-title>
                                <v-spacer></v-spacer>
                              </v-toolbar>
                              <!-- VList Detalles Conductor en Vcard Sm Devices-->
                              <v-list>
                                <template >
                                  <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon  dark>perm_identity</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.nombreConductor}}</v-list-tile-title>
                                      <v-list-tile-sub-title >Conductor</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                  <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>time_to_leave</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.modeloVehiculo}} {{item.marcaVehiculo}} {{item.anioVehiculo}} </v-list-tile-title>
                                      <v-list-tile-sub-title >Vehículo</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                     <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>navigation</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.serviciosRealizados}}</v-list-tile-title>
                                      <v-list-tile-sub-title >Servicios Completados</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                  <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>chat_bubble</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.numComentarios}}</v-list-tile-title>
                                      <v-list-tile-sub-title >Comentarios</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>

                                    <div class="text-xs-center">
                                      <v-btn color="success">Ver Perfill</v-btn>
                                    </div>      
                                </template>
                              </v-list>
                              <!-- /VList Detalles Conductor en Vcard Sm Devices-->
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex elevation-6 lg6 class="ml-0">
                        <v-toolbar height="40%" color="blue" dark>
                                <v-icon>description</v-icon>
                          <v-toolbar-title>Datos del Servicio</v-toolbar-title>
                            <v-spacer></v-spacer>
                          </v-toolbar>
                          <!-- VList Detalles Servicio en Vcard Sm Devices-->
                          <v-list>
                                <template >
                                  <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon  dark>place</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.origen}} - {{item.destino}}</v-list-tile-title>
                                      <v-list-tile-sub-title >Ruta</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                  <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>date_range</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.fechaSalida}}</v-list-tile-title>
                                      <v-list-tile-sub-title >Fecha de Salida</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                     <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>access_time</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.horaSalida}}</v-list-tile-title>
                                      <v-list-tile-sub-title >Hora de Salida</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                  <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>airline_seat_recline_normal</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.asientosDisponibles}}</v-list-tile-title>
                                      <v-list-tile-sub-title >Asientos Disponibles</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>person_add</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.ptoSalida}}</v-list-tile-title>
                                      <v-list-tile-sub-title >Punto de Salida</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>monetization_on</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.tarifa}} Bss p/p</v-list-tile-title>
                                      <v-list-tile-sub-title >Tarifa </v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>

                                  <v-list-tile>
                                    <v-list-tile-avatar>
                                      <v-btn small fab dark color="indigo">
                                        <v-icon small dark>credit_card</v-icon>
                                      </v-btn>
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title >{{item.formaDePago}}</v-list-tile-title>
                                      <v-list-tile-sub-title >Forma de Pago</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>

                                    <div class="text-xs-center hidden-sm-and-down" >
                                      <v-btn color="success">Reservar</v-btn>
                                    </div>
                                  
                                </template>
                              </v-list>
                              <!-- /VList Detalles Conductor en Vcard Sm Devices-->
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-slide-y-transition>
              </v-card>
              <!-- /VCard Preview Datos Conductor SM Devices-->
            </v-flex>
          </v-layout>
        </v-container>
        <!--/-->  
        <v-card-actions>
          <v-btn block color="success">Reserva tu Asiento</v-btn>
        </v-card-actions>
      </v-card>
      <!-- /VCard Principal-->
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
      }
    },
    methods:{
      eliminarCard(index){
        this.$delete(this.datosConductorServicio, index)
      }
    },
    computed: {
      datosConductorServicio(){
        return this.$store.getters.serviciosTodos
      }
    }
  };
</script>


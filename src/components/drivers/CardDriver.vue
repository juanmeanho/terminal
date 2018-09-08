<template>
  <v-layout>
    <v-flex xs10 sm10 lg8 offset-sm1 offset-xs1 offset-lg2  class="mt-3">
      <v-card>
        <v-img
          class="white--text"
          height="230px"
          src="https://img.clasf.co.ve/2017/02/13/Ford-Fiesta-Move-20170213085925.jpg">
            <v-layout align-center justify-end row fill-height>
              <v-flex lg3 md4 >
                <v-card style="background-color:rgba(0,0,0,0.35)" class="pt-1 mr-2 pl-1 ml-2">
                  <v-chip color="pink darken-1" text-color="white" style="font-weight:700">
                    <v-avatar>
                      <v-icon>time_to_leave</v-icon>
                    </v-avatar>
                      <h3>Miami - Orlando</h3>
                  </v-chip><br>
                  <v-chip color="indigo" text-color="white">
                    <v-avatar>
                      <v-icon>date_range</v-icon>
                    </v-avatar>
                      <h3>Sáb. 20/10/2018</h3>
                  </v-chip><br>
                  <v-chip color="indigo" text-color="white">
                    <v-avatar>
                      <v-icon>av_timer</v-icon>
                    </v-avatar>
                      <h3>10.00 am</h3>
                  </v-chip><br>
                  <v-chip color="indigo" text-color="white">
                    <v-badge overlap color="pink darken-1">
                      <span slot="badge">3</span>
                    <v-avatar>
                      <v-icon>airline_seat_recline_normal</v-icon>
                    </v-avatar>
                    </v-badge>
                      <h3> Asientos</h3>
                  </v-chip><br>
                  <v-chip color="green" text-color="white">
                    <v-avatar>
                      <v-icon>monetization_on</v-icon>
                    </v-avatar>
                      <h3>200 BsS</h3>
                  </v-chip>
                </v-card>
              </v-flex>
            </v-layout>
        </v-img>
        <!--/-->
        <v-layout column  justify-center class="hidden-xs-only">
          <v-expansion-panel popout>
            <v-expansion-panel-content >
              <v-layout slot="header" align-center row spacer>

                <v-flex xs5 sm2 md1>
                  <v-avatar slot="activator" size="52px">
                    <img
    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                      alt="Avatar">
                  </v-avatar>
                </v-flex>
      
                <v-flex sm5 md5>
                  <div class="text-xs-center">
                    <strong>Juan Meaño</strong>
                  </div>
                  <div class="text-xs-center">
                    <v-rating color="orange lighten-3" readonly small ></v-rating>
                  </div>
                </v-flex>
                
                <v-flex no-wrap xs5 sm3 md4>
                  <div class="text-xs-center">
                    <strong >Ford Fiesta 2011</strong><br>
                    <v-chip
                    color="blue lighten-4"
                    class="ml-0"
                    label
                    small>
                    <v-icon>check</v-icon>
                    Aire Acondicionado
                  </v-chip>
                  </div>
                </v-flex>
      
                <v-flex md5 class="hidden-sm-and-down">
                  <div class="text-xs-center">
                  <strong >&mdash;
                  7 Viajes Realizados <br>
                  &mdash; 25 Comentarios</strong>
                  </div>
                </v-flex>
              </v-layout>
      
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
                                      <v-list-tile-title >Juan Meaño</v-list-tile-title>
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
                                      <v-list-tile-title >Ford Aveo 2010 4 Puertas </v-list-tile-title>
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
                                      <v-list-tile-title >23</v-list-tile-title>
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
                                      <v-list-tile-title >25</v-list-tile-title>
                                      <v-list-tile-sub-title >Comentarios</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>

                                    <div class="text-xs-center">
                                      <v-btn color="success">Ver Perfil</v-btn>
                                    </div>
                                  
                                </template>
                              </v-list>
                      </v-flex>

                      <v-flex elevation-6 lg6 md6 sm6 class="ml-1">
                              <v-toolbar height="40%" color="blue" dark>
                                <v-icon>description</v-icon>
                          <v-toolbar-title>Datos del Servicio</v-toolbar-title>
                            <v-spacer></v-spacer>
                          </v-toolbar>

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
                                      <v-list-tile-title >Miami - Orlando</v-list-tile-title>
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
                                      <v-list-tile-title >Sábado 20/10/1999</v-list-tile-title>
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
                                      <v-list-tile-title >10:00 AM</v-list-tile-title>
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
                                      <v-list-tile-title >2</v-list-tile-title>
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
                                      <v-list-tile-title >Te  busca/Terminal</v-list-tile-title>
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
                                      <v-list-tile-title >2</v-list-tile-title>
                                      <v-list-tile-sub-title >Tarifa 200 Bss p/p</v-list-tile-sub-title>
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
                                      <v-list-tile-title >Transferencia</v-list-tile-title>
                                      <v-list-tile-sub-title >Forma de Pago</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>



                                    <div class="text-xs-center">
                                      <v-btn color="success">Reservar</v-btn>
                                    </div>
                                  
                                </template>
                              </v-list>

                      </v-flex>
                    </v-layout>
                  <!--/-->
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-layout>
        <!--/-->
        <v-container class="hidden-sm-and-up">
          <v-layout >
              <v-flex>
                <v-card>
                  <v-flex class="text-xs-center">
                    <v-avatar slot="activator" size="52px">
                      <img
        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                          alt="Avatar">
                    </v-avatar>
                  </v-flex>

                  <v-flex>
                    <div class="text-xs-center">
                      <strong>Juan Meaño</strong>
                    </div>
                    <div class="text-xs-center">
                      <v-rating color="orange lighten-3" readonly small ></v-rating>
                    </div>
                  </v-flex>
                  <v-divider></v-divider>

                <v-flex>
                  <div class="text-xs-center mt-1" >
                    <strong >Ford Fiesta 2011</strong><br>
                    <v-chip
                    color="blue lighten-4"
                    class="ml-0"
                    label
                    small>
                    <v-icon>check</v-icon>
                    Aire Acondicionado
                  </v-chip><br>
                  <strong class="mt-1">&mdash;
                  7 Viajes Realizados <br>
                  &mdash; 25 Comentarios</strong>
                  </div>
                </v-flex>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-slide-y-transition>
                  <v-card-text v-show="show">
                    <!--/-->
                  
                    <v-layout>
                      <v-flex elevation-6 lg6 class="mb-2">
                         <v-toolbar height="40%" color="blue" dark>
                                 <v-icon>description</v-icon>
                                <v-toolbar-title>Datos del Conductor</v-toolbar-title>
                                <v-spacer></v-spacer>
                              </v-toolbar>

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
                                      <v-list-tile-title >Juan Meaño</v-list-tile-title>
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
                                      <v-list-tile-title >Ford Aveo 2010 4 Puertas </v-list-tile-title>
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
                                      <v-list-tile-title >23</v-list-tile-title>
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
                                      <v-list-tile-title >25</v-list-tile-title>
                                      <v-list-tile-sub-title >Comentarios</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>

                                    <div class="text-xs-center">
                                      <v-btn color="success">Ver Perfil</v-btn>
                                    </div>
                                  
                                </template>
                              </v-list>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex elevation-6 lg6 class="ml-0">
                        <v-toolbar height="40%" color="blue" dark>
                                <v-icon>description</v-icon>
                          <v-toolbar-title>Datos del Servicio</v-toolbar-title>
                            <v-spacer></v-spacer>
                          </v-toolbar>

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
                                      <v-list-tile-title >Miami - Orlando</v-list-tile-title>
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
                                      <v-list-tile-title >Sábado 20/10/1999</v-list-tile-title>
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
                                      <v-list-tile-title >10:00 AM</v-list-tile-title>
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
                                      <v-list-tile-title >2</v-list-tile-title>
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
                                      <v-list-tile-title >Te  busca/Terminal</v-list-tile-title>
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
                                      <v-list-tile-title >2</v-list-tile-title>
                                      <v-list-tile-sub-title >Tarifa 200 Bss p/p</v-list-tile-sub-title>
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
                                      <v-list-tile-title >Transferencia</v-list-tile-title>
                                      <v-list-tile-sub-title >Forma de Pago</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                   <v-divider></v-divider>



                                    <div class="text-xs-center">
                                      <v-btn color="success">Reservar</v-btn>
                                    </div>
                                  
                                </template>
                              </v-list>
                      </v-flex>
                    </v-layout>
                  <!--/-->
                  </v-card-text>
                </v-slide-y-transition>
              </v-card>
            </v-flex>
            
          </v-layout>
        </v-container>
        <!--/-->  
        <v-card-actions>
          <v-btn block color="success">Reserva tu Asiento</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      show: false
    })
  }
</script>


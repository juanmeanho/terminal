<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2 class="mt-4">
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
                      <v-icon>event_seat</v-icon>
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
                      <v-flex elevation-6 lg6 class="mr-1">
                        <v-card flat style="border-radius:50px;">
                          
                          <v-card-title>
                            <div>
                              <span class="grey--text">Detalles del Conductor</span><br>
                              <v-divider></v-divider>
                              <span>Vehículo: Ford Fiesta 2011</span><br>
                              <span>Viajes Realizados: 7</span><br>
                              <span>Comentarios: 25</span>
                            </div>
                          </v-card-title>
                          <v-card-actions>
                            <v-btn flat color="orange">Ver Comentarios</v-btn>                          </v-card-actions>
                        </v-card>
                      </v-flex>

                      <v-flex elevation-6 lg6 class="ml-1">
                        <v-card>
                          
                          <v-card-title>
                            <div>
                              <span class="grey--text">Detalles del Servicio</span><br>
                              <v-divider></v-divider>
                              <span>Ruta: Miami - Orlando</span><br>
                              <span>Fecha de Salida: Sábado 20/10/2018</span><br>
                              <span>Hora de Salida: 10:00 am</span><br>
                              <span>Puestos Disponibles: 3</span><br>                             
                              <span>Punto de Salida: Terminal/Buscá en Casa</span><br>
                              <span>Tarifa: 200 BsS</span><br>
                              <span>Forma de Pago: Transferencia</span>
                              
                            </div>
                          </v-card-title>
                          <v-card-actions>
                            <v-btn flat color="orange">Ver Otra Cosa</v-btn>
                          </v-card-actions>
                        </v-card>
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
                        <v-card flat style="border-radius:50px;">
                          
                          <v-card-title>
                            <div>
                              <span class="grey--text">Detalles del Conductor</span><br>
                              <v-divider></v-divider>
                              <span>Vehículo: Ford Fiesta 2011</span><br>
                              <span>Viajes Realizados: 7</span><br>
                              <span>Comentarios: 25</span>
                            </div>
                          </v-card-title>
                          <v-card-actions>
                            <v-btn flat color="orange">Ver Comentarios</v-btn>                          </v-card-actions>
                        </v-card>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex elevation-6 lg6 class="ml-0">
                        <v-card>
                          
                          <v-card-title>
                            <div>
                              <span class="grey--text">Detalles del Servicio</span><br>
                              <v-divider></v-divider>
                              <span>Ruta: Miami - Orlando</span><br>
                              <span>Fecha de Salida: Sábado 20/10/2018</span><br>
                              <span>Hora de Salida: 10:00 am</span><br>
                              <span>Puestos Disponibles: 3</span><br>                             
                              <span>Punto de Salida: Terminal/Buscá en Casa</span><br>
                              <span>Tarifa: 200 BsS</span><br>
                              <span>Forma de Pago: Transferencia</span>
                              
                            </div>
                          </v-card-title>
                          <v-card-actions>
                            <v-btn flat color="orange">Ver Otra Cosa</v-btn>
                          </v-card-actions>
                        </v-card>
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


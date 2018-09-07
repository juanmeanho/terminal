<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 class="mt-4">
      <v-card>
        <v-img
          class="white--text"
          height="230px"
          src="http://static.carroya.com/vehiculos/1767639/1767639_1_m.jpg">
            <v-layout align-center justify-end row fill-height>
              <v-flex xs4 >
                <v-card style="background-color:rgba(0,0,0,0.35)" class="pt-1 mr-1 pl-1 ml-1">
                  <v-chip color="pink darken-1" text-color="white" style="font-weight:700">
                    <v-avatar>
                      <v-icon>time_to_leave</v-icon>
                    </v-avatar>
                      <h3>Caracas - Maturín</h3>
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
<template>
    <v-container>
        <v-layout >
            <v-flex xs12 md10 offset-ms1 offset-md1 elevation-10 lg10 offset-lg1>
                <!-- Vcard Principal registro Usuario -->
                <v-card>
                    <v-layout class="mx-2 mt-2">
                        <v-flex>
                        <!-- Vcards Informacion de Registro -->
                            <v-card class="mr-1">
                                <v-card-text primary-title>
                                <div class="text-xs-center">
                                    <h3 class="headline mb-0 font-weight-medium font-italic">Inicio Kangaroo Valley Safari</h3>
                                    <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
                                </div>
                                </v-card-text>
                            </v-card>
                        </v-flex> 
                        <!-- /Vcards Informacion de Registro -->
                    </v-layout>
                    <v-container>
                        <v-layout>
                            <v-flex >
                                <!-- Vcard bottomNav -->
                                <v-card flat>
                                    
                                    <v-btn block color="blue darken-4" dark height="20px">
                                            <facebook-box class="mt-1 mr-1"></facebook-box> Conecta con Facebook
                                    </v-btn>

                                    <v-btn block color="red darken-4" dark height="20px">
                                            <gmail-box class="mt-1 mr-1"></gmail-box> Conecta con Gmail</v-btn>
                                    <br>
                                    
                                    <v-layout>
                                        <v-flex class="pt-1">
                                            <v-divider></v-divider>
                                        </v-flex>

                                        <v-flex>
                                            <p class="text-xs-center font-weight-regular font-italic"> O inicia sesión con tu correo electrónico</p>                                        </v-flex>
                                        
                                        <v-flex>
                                            <v-divider></v-divider>
                                        </v-flex>
                                    </v-layout>
                                </v-card>
                                <!-- Vcard bottomNav -->
                            <v-form  ref="form" v-model="valid" lazy-validation>
                                
                                <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="E-mail"
                                    required>
                                </v-text-field>
                                <v-text-field
									name="password"
									label="Password"
									id="password"
									v-model="password"
									type="password"
									required>
                                </v-text-field>
                                
                                <v-btn
                                :disabled="!valid"
                                @click="submit"
                                block
                                color="primary"
                                >
                                submit
                                </v-btn>
                            </v-form>
                        </v-flex>
                    </v-layout>
                </v-container>
                <!-- /Vcard Registro Principal usuario-->
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  //import axios from 'axios'

  export default {
    data: () => ({
        bottomNav: 0,
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        email: '',
        password: '',
        confirmPassword: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4'
        ],
        checkbox: false
        }),

    methods: {
      submit () {
        
      }
    },
    computed: {
        comparePasswords(){
				return this.password !== this.confirmPassword ? 'Password no match' : ''
            },
        color () {
            switch (this.bottomNav) {
            case 0: return 'teal'
            case 1: return 'indigo'
            }
      }
    },
  }
</script>
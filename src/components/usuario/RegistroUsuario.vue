<template>
    <v-container>
        <v-layout >
            <v-flex xs12 md10 offset-ms1 offset-md1 elevation-10 lg10 offset-lg1>
                <v-card>
                    <v-card-title>Registro de Usuario</v-card-title>
                    <v-container>
                        <v-layout>
                            <v-flex >
                                <v-card>
                                    <v-bottom-nav
                                    height="70px"
                                    :active.sync="bottomNav"
                                    :color="color"
                                    :value="true"
                                    >
                                    <v-btn dark>
                                        <span><h3>Viajar</h3></span>
                                        <v-icon large>directions_walk</v-icon>
                                    </v-btn>

                                    <v-btn dark>
                                        <span><h3>Conducir</h3></span>
                                        <v-icon large>time_to_leave</v-icon>
                                    </v-btn>
                                    </v-bottom-nav>
                                </v-card>
                            <v-form  ref="form" v-model="valid" lazy-validation>
                                <v-text-field
                                v-model="name"
                                :rules="nameRules"
                                :counter="10"
                                label="Name"
                                required
                                ></v-text-field>
                                <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                                ></v-text-field>
                                <v-text-field
									name="password"
									label="Password"
									id="password"
									v-model="password"
									type="password"
									required
								></v-text-field>
                                <v-text-field
									name="confirmPassword"
									label="Confirm Password"
									id="confirmPassword"
									v-model="confirmPassword"
									type="password"
									:rules="[comparePasswords]"
								></v-text-field>
                                <v-checkbox
                                v-model="checkbox"
                                :rules="[v => !!v || 'You must agree to continue!']"
                                label="Do you agree?"
                                required
                                ></v-checkbox>

                                <v-btn
                                :disabled="!valid"
                                @click="submit"
                                >
                                submit
                                </v-btn>
                                <v-btn @click="clear">clear</v-btn>
                            </v-form>
                        </v-flex>
                    </v-layout>
                </v-container>
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
        
      },
      clear () {
        this.$refs.form.reset()
      }
    },
    computed: {
        comparePasswords(){
				return this.password !== this.confirmPassword ? 'Password no match' : ''
            },
        color () {
            switch (this.bottomNav) {
            case 0: return 'indigo'
            case 1: return 'teal'
            }
      }
    },
  }
</script>
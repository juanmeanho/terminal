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
                                    <h3 class="headline mb-0 font-weight-medium font-italic">Registro Kangaroo Valley Safari</h3>
                                    <div>{{ $data }}Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
                                </div>
                                </v-card-text>
                            </v-card>
                        </v-flex> 
                        <!-- /Vcards Informacion de Registro -->
                    </v-layout>
                    <v-container>
                        <v-layout>
                            <v-flex >
                            <v-form @submit.prevent="submit" lazy-validation>
                                <!-- Vcard bottomNav -->
                                <v-card flat>
                                    <v-bottom-nav
                                        class="mb-2"
                                        height="70px"
                                        :active.sync="bottomNav"
                                        :color="color"
                                        :value="true">
                                            <v-btn dark>
                                                <span v-show="false"><h3>Viajar</h3></span>
                                                <v-icon large>directions_walk</v-icon>
                                            </v-btn>

                                            <v-btn dark>
                                                <span v-show="false"><h3>Conducir</h3></span>
                                                <v-icon large>time_to_leave</v-icon>
                                            </v-btn>
                                    </v-bottom-nav>

                                    <v-divider></v-divider>
                                    <v-btn v-show="false" block color="blue darken-4" dark height="20px">
                                            <facebook-box class="mt-1 mr-1"></facebook-box> Conecta con Facebook
                                    </v-btn>

                                    <v-btn v-show="false" block color="red darken-4" dark height="20px">
                                            <gmail-box class="mt-1 mr-1"></gmail-box> Conecta con Gmail</v-btn>
                                    <br>
                                    
                                    <v-layout>
                                        <v-flex class="pt-1">
                                            <v-divider></v-divider>
                                        </v-flex>

                                        <v-flex>
                                            <p class="text-xs-center font-weight-regular font-italic">Registrate con tu correo electrónico</p>                                        </v-flex>
                                        
                                        <v-flex>
                                            <v-divider></v-divider>
                                        </v-flex>
                                    </v-layout>
                                </v-card>
                                <!-- Vcard bottomNav -->
                                <v-layout wrap>
                                    <v-text-field
                                        v-model="name"
                                        :error-messages="nameErrors"
                                        label="Nombres"
                                        required
                                        @input="$v.name.$touch()"
                                        @blur="$v.name.$touch()"
                                        class="mr-1">
                                    </v-text-field>
                                     <v-text-field
                                        v-model="lastname"
                                        :error-messages="lastnameErrors"
                                        label="Apellidos"
                                        required
                                        @input="$v.lastname.$touch()"
                                        @blur="$v.lastname.$touch()">
                                    </v-text-field>  
                                </v-layout>
                                <v-layout wrap>
                                    <v-text-field
                                        v-model="cedula"
                                        :error-messages="cedulaErrors"
                                        label="Número de Cédula"
                                        required
                                        @input="$v.cedula.$touch()"
                                        @blur="$v.cedula.$touch()"
                                        class="mr-1">
                                    </v-text-field>
                                    <v-autocomplete
                                        :loading="loading"
                                        :items="itemsSelect"
                                        :error-messages="ciudadOrigenErrors"
                                        :search-input.sync="search"
                                        v-model="ciudadOrigen"
                                        cache-items
                                        label="Ciudad"
                                        @input="$v.ciudadOrigen.$touch()"
                                        @blur="$v.ciudadOrigen.$touch()"
                                        required>
                                    </v-autocomplete>
                                </v-layout>
                                <v-layout wrap>
                                    <v-text-field
                                        v-model="email"
                                        :error-messages="emailErrors"
                                        label="E-mail"
                                        @input="$v.email.$touch()"
                                        @blur="$v.email.$touch()"
                                        required>
                                    </v-text-field>
                                </v-layout>
                                <v-layout wrap>
                                    <v-text-field
                                        class="mr-1"
                                        v-model="password"
                                        name="password"
                                        label="Password"
                                        :error-messages="passwordErrors"
                                        type="password"
                                        @input="$v.password.$touch()"
                                        @blur="$v.password.$touch()"
                                        >
                                    </v-text-field>
                                    <v-text-field
                                        v-model="confirmPassword"
                                        label="Confirmar Password"
                                        :error-messages="confirmPasswordErrors"
                                        @input="$v.confirmPassword.$touch()"
                                        @blur="$v.confirmPassword.$touch()"
                                        class="ml-1"
                                        name="confirmPassword"
                                        type="password"
                                        required>
                                    </v-text-field>
                                </v-layout>
                                <p>He leído los terminos
                                </p>
                                
                                <v-btn
                                :disabled="submitStatus === 'PENDING'"
                                type="submit"
                                block
                                color="primary"
                                >
                                submit
                                </v-btn>
                                <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
                                <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
                                <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
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
    import { validationMixin } from 'vuelidate'
    import { required, minLength, maxLength, numeric, email, sameAs } from 'vuelidate/lib/validators';

  export default {
    mixins: [validationMixin],
    data: () => ({
        states: [
            'Maturin',
            'Caracas'
        ],
        loading: false,
        itemsSelect: [],
        search: null,
        ciudadOrigen: null,
        bottomNav: 0,
        submitStatus: null,
        name: '',
        lastname: '',
        cedula: '',
        email: '',
        password: '',
        confirmPassword: '',
        checkbox: false
        }),
    validations: {
        name: {
            required,
            minLength: minLength(5)
        },
        lastname: {
            required,
            minLength: minLength(5)
        },
        cedula: {
            numeric,
            required,
            minLength: minLength(7),
            maxLength: maxLength(8)
        },
        ciudadOrigen: {
            required
        },
        email: {
            required,
            email
        },
        password: {
            minLength: minLength(8),
            required
        },
        confirmPassword: {
            matchText: sameAs('password'),
            minLength: minLength(8),
            required
        },

    },
    methods: {
        submit() {
            console.log({email: this.email,
                        ciudad:this.ciudadOrigen,
                        cedula: this.cedula,
                        name: this. name, 
                        lastname: this.lastname,
                        password: this.password,
                        tipoUsuario: this.bottomNav})   

            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                this.$store.dispatch('signUserUp', {email: this.email, password: this.password})

                this.submitStatus = 'PENDING'
                setTimeout(() => {
                this.submitStatus = 'OK'
                }, 500)
            }
        },
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.itemsSelect = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      }
    },
    computed: {
        color () {
            switch (this.bottomNav) {
                case 0: return 'teal'
                case 1: return 'indigo'
            }
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.minLength && errors.push('El nombre debe tener al menos 5 carácteres')
        !this.$v.name.required && errors.push('El Nombre es obligatorio')
        return errors
      },
      lastnameErrors () {
        const errors = []
        if (!this.$v.lastname.$dirty) return errors
        !this.$v.lastname.minLength && errors.push('El Apellido debe tener al menos 5 carácteres')
        !this.$v.lastname.required && errors.push('El Apellido es obligatorio')
        return errors
      },
      cedulaErrors () {
        const errors = []
        if (!this.$v.cedula.$dirty) return errors
        !this.$v.cedula.minLength && errors.push('La cédula debe tener al menos 7 carácteres')
        !this.$v.cedula.required && errors.push('El número de cédula es obligatorio')
        !this.$v.cedula.numeric && errors.push('Campo solo númerico')
        !this.$v.cedula.maxLength && errors.push('La cédula debe tener menos de 8 carácteres')
        return errors
      },
      ciudadOrigenErrors () {
        const errors = []
        if (!this.$v.ciudadOrigen.$dirty) return errors
            !this.$v.ciudadOrigen.required && errors.push('Campo obligatorio')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
            !this.$v.email.required && errors.push('El Email es obligatorio')
            !this.$v.email.email && errors.push('El Email es Incorrecto')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
            !this.$v.password.minLength && errors.push('El password debe tener al menos 8 carácteres')
            !this.$v.password.required && errors.push('El password es obligatorio')
        return errors
      },
      confirmPasswordErrors () {
        const errors = []
        if (!this.$v.confirmPassword.$dirty) return errors
            !this.$v.confirmPassword.matchText && errors.push('Passwords no coinciden')
        return errors
      },
    },
    watch: {
      search (val) {
        val && val !== this.itemsSelect && this.querySelections(val)
      }
    },
  }
</script>
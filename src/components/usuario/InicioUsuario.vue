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
                            <v-form @submit.prevent="onSignIn" lazy-validation>
                                <!-- Vcard bottomNav -->
                                <v-card flat>
                                </v-card>
                                <!-- Vcard bottomNav -->
                                
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
                                </v-layout>
                                
                                <v-btn
                                :disabled="submitStatus === 'PENDING'"
                                type="submit"
                                block
                                color="primary">
                                Iniciar Sesión
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
    import { required, minLength, maxLength, numeric, email, sameAs } from 'vuelidate/lib/validators';

  export default {
    data: () => ({
        states: [
            'Maturin',
            'Caracas'
        ],
        loading: false,
        itemsSelect: [],
        search: null,
        ciudadOrigen: null,
        submitStatus: null,
        email: '',
        password: '',
        }),
    validations: {
        email: {
            required,
            email
        },
        password: {
            minLength: minLength(8),
            required
        },
    },
    methods: {
        onSignIn() {
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
                this.$store.dispatch('signUserIn', {email: this.email, password: this.password})

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
        //validaciones del formulario
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
      user(){
          return this.$store.getters.user
      }
    },
    watch: {
      search (val) {
        val && val !== this.itemsSelect && this.querySelections(val)
      },//redirigir despues de iniciar sesion
      user(value){
          if(value !== null && value !== undefined)
            this.$router.push('/')
      }
    },
  }
</script>
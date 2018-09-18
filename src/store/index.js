import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'


Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		serviciosTodos: [
          { imageUrl: "https://img.clasf.co.ve/2017/02/13/Ford-Fiesta-Move-20170213085925.jpg",
            origen: 'Miami',
            destino: 'Bóston',
            fechaSalida: '22/10/2018',
            horaSalida: '10:00 am',
            asientosDisponibles: 3,
            tarifa: 200,
            ptoSalida: 'A domicilio',
            formaDePago: 'Transferencia',
            avatarConductor: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            nombreConductor: 'Joao Gonzales',
            modeloVehiculo: 'Elantra',
            marcaVehiculo: 'Hyundai',
            anioVehiculo: '2006',
            numPuertas: 4,
            aireAcondicionado: true,
            stars: 4,
            numComentarios: 20,
            serviciosRealizados: 26 },
          { imageUrl: "https://http2.mlstatic.com/ford-grand-marquis-D_NQ_NP_768989-MLV26432156577_112017-F.jpg",
            origen: 'Seatle',
            destino: 'Misissipi',
            fechaSalida: '02/09/2018',
            horaSalida: '3:00 pm',
            asientosDisponibles: 1,
            tarifa: 150,
            ptoSalida: 'Terminal de Oriente',
            formaDePago: 'Transferencia',
            avatarConductor: 'http://www.upsocl.com/wp-content/uploads/immujer/2015/01/iStock_000055230302_Large.jpg',
            nombreConductor: 'Quentin Tarantino',
            modeloVehiculo: 'Yaris',
            marcaVehiculo: 'Toyota',
            anioVehiculo: '2012',
            numPuertas: 4,
            aireAcondicionado: false,
            stars: 3,
            numComentarios: 2,
            serviciosRealizados: 5 },
          { imageUrl: "https://i.ytimg.com/vi/U2GjdLlvkj8/maxresdefault.jpg",
            origen: 'Los Angeles',
            destino: 'Caripito',
            fechaSalida: '31/12/2018',
            horaSalida: '12:00 am',
            asientosDisponibles: 4,
            tarifa: 80,
            ptoSalida: 'A domicilio',
            formaDePago: 'Transferencia',
            avatarConductor: 'http://www.lapi.com.mx/image.ashx?s=57067&sl=es&im=83276&st=p',
            nombreConductor: 'Carlos Malave',
            modeloVehiculo: 'Accent',
            marcaVehiculo: 'Hyundai',
            anioVehiculo: '1996',
            numPuertas: 4,
            aireAcondicionado: true,
            stars: 1,
            numComentarios: 0,
            serviciosRealizados: 1 },
        ],
        user:{
        	id: 'asdfseafs'
        }
	},
	mutations: {
		setUser(state, payload){
			state.user = payload
		}
	},
	actions: {
		signUserUp({commit}, payload) {
			firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
			.then(
				user => {
					const newUser = {
						id: user.uid,
					}
					commit('setUser', newUser)
				}
			).catch(
				error => {
					console.log(error)
				}
			)
		}
	},
	getters: {
		serviciosTodos(state){
			return state.serviciosTodos.sort((servicioA, servicioB) => {
				return servicioA.tarifa > servicioB.tarifa
			})
		},
		servicioIndividual(state){
			return (servicioId) => {
				return state.serviciosTodos.find((servicio) => {
					return servicio.id === servicioId
				})
			}
		}
	}
})
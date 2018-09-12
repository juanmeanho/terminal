import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RegistroUsuario from '@/components/usuario/RegistroUsuario'
import InicioUsuario from '@/components/usuario/InicioUsuario'
import RegistroConductor from '@/components/conductor/RegistroConductor'
import InicioConductor from '@/components/conductor/InicioConductor'

Vue.use(Router)

export default new Router({
	routes:[
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/registroUsuario',
			name: 'RegistroUsuario',
			component: RegistroUsuario
		},
		{
			path: '/inicioUsuario',
			name: 'InicioUsuario',
			component: InicioUsuario
		},
		{
			path: '/registroConductor',
			name: 'RegistroConductor',
			component: RegistroConductor
		},
		{
			path: '/inicioConductor',
			name: 'InicioConductor',
			component: InicioConductor
		}
	],
	mode: 'history'
})
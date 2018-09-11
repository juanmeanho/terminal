import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RegisterDriver from '@/components/drivers/RegisterDriver'

Vue.use(Router)

export default new Router({
	routes:[
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/registerDriver',
			name: 'RegisterDriver',
			component: RegisterDriver
		}
	],
	mode: 'history'
})
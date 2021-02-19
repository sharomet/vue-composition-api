import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

export default [
  {
		path: '/',
		component: () => import('@/layouts/DefaultLayout'),
		children: [
			{
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'about',
        name: 'about',
        component: About
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/Users.vue')
      },
		],
	}
]
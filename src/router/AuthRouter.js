import Login from '@/views/auth/Login'

export default [
  {
		path: '/auth',
		component: () => import('@/layouts/AuthLayout'),
		children: [
			{
				path: '',
				redirect: {
          name: 'login'
				}
			},
			{
				path: 'login',
				name: 'login',
				component: Login
			}
		],
	}
]
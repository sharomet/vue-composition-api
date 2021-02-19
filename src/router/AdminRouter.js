import Dashboard from '@/views/admin/Dashboard'

export default [
  {
		path: '/admin',
		component: () => import('@/layouts/AdminLayout'),
		children: [
			{
        path: '',
        name: 'dashboard',
        component: Dashboard
      }
		],
	}
]
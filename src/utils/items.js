// @/navigation/items.js
import vueIcon from '@/assets/vue.svg'
export const navItems = [
  { type: 'section', title: 'Main Menu', image: vueIcon },
  { 
    type: 'group', 
    title: 'Admin', 
    icon: 'mdi-cog',
    children: [
      { to: '/users', title: 'Users', meta: { permissions: ['admin'] } },
      { to: '/settings', title: 'Settings' }
    ]
  },
  { 
    type: 'link', 
    to: '/dashboard', 
    title: 'Dashboard', 
    icon: 'mdi-home' 
  },
  { 
    type: 'link', 
    to: '/reports', 
    title: 'Reports', 
    icon: 'mdi-chart-bar' 
  }
];

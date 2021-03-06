import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/step',
      alias: '/',
      component: () => import('@components/Steps'),
      children: [
        {
          path: '1',
          alias: '',
          name: 'Step 1',
          component: () => import('@components/Steps/Step1')
        },
        {
          path: '2',
          name: 'Step 2',
          component: () => import('@components/Steps/Step2')
        },
        {
          path: '3',
          name: 'Step 3',
          component: () => import('@components/Steps/Step3')
        },
        {
          path: '4',
          name: 'Step 4',
          component: () => import('@components/Steps/Step4')
        },
        {
          path: '5',
          name: 'Step 5',
          component: () => import('@components/Steps/Step5')
        },
        {
          path: '6',
          name: 'Step 6',
          component: () => import('@components/Steps/Step6')
        }
      ]
    }
  ]
})

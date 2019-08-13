import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestLife from '@/components/TestLife'
import Directive from '@/components/Directive'
import Filters from '@/components/Filters'
import ModelTest from '@/components/ModelTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/life',
      name: 'TestLife',
      component: TestLife
    },
    {
      path: '/directive',
      name: 'Directive',
      component: Directive
    },
    {
      path: '/filter',
      name: 'Filters',
      component: Filters
    },
    {
      path: '/model',
      name: 'ModelTest',
      component: ModelTest
    },
  ]
})

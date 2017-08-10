import Vue from 'vue'
import Router from 'vue-router'

import Homepage from'../pages/homepage/homepage.vue'
import Evaluation from '../pages/evaluation/evaluation.vue'
import Special from '../pages/spacial/spacial.vue'
import Ranking from '../pages/ranking/ranking.vue'
import Category from '../pages/category/category.vue'
import Appraise from '../components/appraise.vue'
import News from '../components/news.vue'
import All from'../components/all.vue'
import Miniprograms from'../components/miniprograms.vue'
import Interpretation from '../components/interpretation.vue'
import Lightapp from '../components/lightapp.vue'
import Test from '../test/test.vue'
import Appdetail from'../components/appdetail.vue'
import Morefresh from'../components/morefresh.vue'
import Commentdetail from '../components/commentdetail.vue'
import Search from '../pages/search/search.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/evaluation',
      name: 'Evaluation',
      component: Evaluation,
      children:[{
        path:'01',
        component:Appraise
      },{
        path:'02',
        component:News,
        children:[{
          path:'01',
          component:All
        },{
          path:'02',
          component:Miniprograms
        },{
          path:'03',
          component:Interpretation
        },{
          path:'04',
          component:Lightapp
        }]
      }]
    },
    {
      path: '/special',
      name: 'Special',
      component: Special
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path:'/appdetail/:id',
      name:'Appdetail',
      component:Appdetail
    },
    {
      path:'/morefresh',
      component:Morefresh
    },
    {
      path:'/commentdetail/:id',
      name:'Commentdetail',
      component:Commentdetail
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    }

  ]
})

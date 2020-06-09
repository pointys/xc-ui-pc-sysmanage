import Home from '@/module/home/page/home.vue';
import page_list from '@/module/cms/page/page_list.vue';
import page_add from '@/module/cms/page/page_add.vue';
import page_edit from '@/module/cms/page/page_edit.vue'

export default [{
    path: '/cms',
    component: Home,
    name: 'CMS',
    hidden: false,
  children: [
    { path: '/cms/page/list', name:'页面列表',component: page_list,hidden:false},//前面请求的路径跳转到后面的组件
    { path: '/cms/page/add', name:'新增页面',component: page_add,hidden:true},
    {path: '/cms/page/edit/:pageId', name: '修改页面', component: page_edit, hidden: true}
            ]
  }]

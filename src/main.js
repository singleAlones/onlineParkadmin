import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Container,Aside,Header,Dropdown,Main,Table,TableColumn,DropdownMenu,DropdownItem,Submenu,Menu,Pagination,Input,Button} from "element-ui"
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css'
 
Vue.component(Container.name,Container);
Vue.component(Aside.name,Aside)
Vue.component(Header.name,Header)
Vue.component(Dropdown.name,Dropdown)
Vue.component(Main.name,Main)

Vue.component(Table.name,Table)
Vue.component(TableColumn.name,TableColumn)
Vue.component(DropdownMenu.name,DropdownMenu)
Vue.component(DropdownItem.name,DropdownItem)
Vue.component(Submenu.name,Submenu)
Vue.component(Menu.name,Menu)
Vue.component(Pagination.name,Pagination)
Vue.component(Input.name,Input)
Vue.component(Button.name,Button)
//axios
import axios from "axios";
axios.defaults.baseURL = "https://127.0.0.1:443/users/";
Vue.config.productionTip = false;
Vue.prototype.axios = axios;

  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

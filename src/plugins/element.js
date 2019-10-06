import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  menu,
  submenu,
  MenuItemGroup,
  MenuItem
} from 'element-ui'


Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(submenu)
Vue.use(menu)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.prototype.$message = Message

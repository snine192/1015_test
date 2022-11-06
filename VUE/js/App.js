import Nav from './components/Nav.js' 
import Div from './components/Nav.js';
export default {
    data(){
        return {
            title:'Hello Vue',
            qtv: 223,
            角色 : ['日', '一', '二', '三', '四', '五', '六']
        }
    },
    components:{
        'app-nav':Nav,
        'app-div':Div
    }
}
import Nav from './components/Nav.js';
export default {
    data(){
        return {
            title:'Hello Vue',
            qtv: 223,
        }
    },
    components:{
        'app-nav':Nav
    }
}
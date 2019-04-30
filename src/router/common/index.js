import home from "@/views/Home"
import order from "@/views/Order"
import my from "@/views/My"
export default[
    {
        path:"/",
        name:"home",
        component:home
    },
    {
        path:"/order",
        name:"order",
        component:order
    },
    {
        path:"/my",
        name:"my",
        component:my
    }
]
import { Phone } from "lucide-react";
import icon from '/src/assets/icon.jpg'

function Nav(){
const list=[
    {name:'Home',href:'#Home'},
    {name:'Menu',href:'#Menu'},
    {name:'Gallery',href:'#Gallery'},
    {name:'About Us',href:'#About'},
    {name:'Contact',href:'#Contact'}
]
    return(
        <>
        <nav className="flex p-3 z-10 right-0 shadow-xl bg-white fixed top-0 left-0">
            <div className="flex justify-between w-full px-3">
                <div className="flex gap-2">
                    <img src={icon} alt="" className="h-12 w-12"/>
                    <div>
                        <h1 className="text-amber-500 uppercase text-2xl font-bold">Merry world</h1>
                        <p className="text-center">Eat Good Feel Good</p>
                    </div>
                </div>
                <div className="md:flex gap-6 items-center hidden font-bold">
                    {list.map((i)=>(
                        <a href={i.href}>{i.name}</a>
                    ))}
                </div>
                <div className="lg:flex items-center gap-2 hidden">
                    <Phone className="w-5 h-5"/>
                    <p> 9361122418</p>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Nav;
import { List } from "lucide-react";

function Home(){
    const List=[
        {
            id:0,
            name:"King Burger Combo",
            dec:'Our signature king burger with cheese fries & a refreshing mojito',
            badge:"Best Seller",
            price:222
        },
        {
            id:2,
            name:"King Burger Combo",
            dec:'Our signature king burger with cheese fries & a refreshing mojito',
            badge:"Best Seller",
            price:111
        },
        {
            id:3,
            name:"King Burger Combo",
            dec:'Our signature king burger with cheese fries & a refreshing mojito',
            badge:"Best Seller",
            price:333
        }
    ]
    return(
        <section id="Home" className="max-h-screen py-20 flex justify-center bg-white w-full">
            <div className="flex flex-col gap-4 px-6">
                <div className="flex flex-col items-center gap-4 text-center w-full">
                    <p className="py-2 px-5 bg-amber-200 rounded-4xl">Today's Special</p>
                    <h1 className="text-3xl font-bold ">Chef's <span className="text-amber-500">Recommendations</span></h1>
                    <p>Don't miss out on our handpicked favorites at special prices!</p>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 py-10 px-4">
                    {
                        List.map((i)=>(
                            <div className="relative  bg-white text-center rounded-2xl shadow-2xl ">
                                <span className="left-4 top-4 absolute font-bold text-white text-center bg-amber-300 rounded-full py-1 px-4">{i.badge}</span>
                                <img src="" alt="" className="w-full h-42 object-cover"  />
                                <div className="m-3 text-start flex flex-col gap-3">
                                    <p></p>
                                <p className="text-xl font-bold">{i.name}</p>
                                <p className=" text-gray-400">{i.dec}</p>
                                <div className="flex w-full justify-between">
                                    <p>{i.price}</p>
                                    <button className="px-3 py-1 bg-amber-500 rounded-full text-white font-bold hover:scale-103">Order Now</button>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
export default Home;
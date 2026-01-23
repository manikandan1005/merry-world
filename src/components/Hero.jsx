import icon from '/src/assets/icon.jpg'

function Hero(){
    return(
        <section  className="min-h-screen flex items-center justify-center py-40  md:py-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className='flex h-full items-center justify-center'>
                    <div className='flex flex-col gap-4 items-center mx-4 justify-center'>
                        <h1 className='text-5xl font-bold text-center text-black'>Welcome to <span className='text-amber-400'>Merry world</span></h1>
                        <p className='text-xl text-center font-semibold'>Eat Good Fell Good -- Delicious food crafted with love!</p>
                        <div className='flex items-center gap-8 mx-3 text-xl font-bold justify-evenly w-full'>
                            <a className='flex w-full items-center justify-center text-center py-5 bg-amber-400 rounded-4xl text-white shadow-xl' href="">View Menu</a>
                            <a className='flex w-full items-center justify-center text-center py-5 bg-white rounded-4xl shadow-xl text-amber-500   border-2 border-amber-300' href="">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center my-4'>
                    <img src={icon} alt="" className='h-54 w-54 shadow-xl lg:h-66 lg:w-66  p-3 object-center' />
                </div>

            </div>
        </section>
    );
}
export default Hero;
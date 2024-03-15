import React from 'react'
import Hero from '../assets/Heros.svg'
import PCparts from '../assets/subHero/pcparts.png'
import NetEuip from '../assets/subHero/netequip.png'
import Cctv from '../assets/subHero/cctv.png'
import Arrow from '../assets/Arrow.svg'

const Home = () => {

    const subHeroData = [
        {
            img: PCparts,
            title: 'High Quality PC Parts',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
            img: NetEuip,
            title: 'Network Equipments',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
            img: Cctv,
            title: 'High Definition CCTV Cameras',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        }
    ]
  return (
    
    <>
        <main className='px-20'>

            {/* Heroes section */}
            <section className='flex items-center justify-center h-screen px-20'>
                <div className='w-1/2 flex flex-col gap-10'>
                    <h1 className='text-5xl font-medium'>Techtester Infotech</h1>
                    <p>
                        Welcome to <strong>Techtester Infotech</strong>, your IT heroes! We specialize in CCTV maintenance (IP & normal cameras), network and router configuration, desktop and laptop repairs, printer servicing, and server maintenance. Count on us for swift, reliable solutions to keep your technology running seamlessly. 
                    </p>
                    <a className='bg-black w-max text-[#F9C869] rounded-xl font-medium px-12 py-2' href='#home'>Contact Us</a>
                </div>
                <div className='w-1/2 flex items-baseline justify-end'>

                    <img src={Hero} className='w-[80%] mt-32' alt="" />

                </div>

            </section>

            {/* Sales section */}
            <section className='h-screen bg-black px-20 py-10 flex flex-col gap-10'>

                <h2 className='text-2xl text-[#F9C869] font-medium'>What we sell ?</h2>

                <div className='grid grid-cols-3 h-full w-full gap-5'>

                    {
                        subHeroData.map((data,index)=>{
                            return(
                                <div key={index} className='w-full h-full flex flex-col justify-around p-5 bg-black custom-shadow rounded-xl'>
                                    <img src={data.img} className='w-full object-contain' />
                                    <h2 className='text-xl text-[#F9C869] font-medium'>{data.title}</h2>
                                    <p className='text-white'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita fugit modi quos ea omnis illum quod explicabo vel dolores possimus, delectus a nam sapiente incidunt tempora unde facilis autem?
                                    </p>
                                    <a href="#contact" className='w-max flex items-center justify-around gap-2 px-10 py-2 rounded-lg outline outline-2 outline-[#F9C869] text-[#F9C869] hover:text-black hover:outline-black hover:bg-[#F9C869]'>
                                        <div className='text-xl font-medium w-max'>Contuct Us</div>
                                        <img src={Arrow} className='w-5' />
                                    </a>
                                </div>
                            )
                        })
                    }

                </div>

            </section>

            {/* Service section */}
            <section className='h-full px-20 py-20 flex flex-col gap-10'>

                <h2 className='text-4xl text-black font-bold text-center font-medium'>Our Services</h2>

                <div className='grid grid-cols-3 grid-rows-3 h-full w-full gap-10'>
                    
                    <div className='min-h-[100px] px-3 py-3 rounded-3xl shadow-2xl'>
                    <h2 className='text-xl font-medium'>CCTV Maintenance(IP Camera & Normal Camera)</h2>
                    <p className='py-3 text-xs'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    </div>

                    <div className='min-h-[100px] rounded-3xl px-3 py-2 shadow-2xl'>
                    <h2 className='text-xl font-medium'>Network Configuration</h2>
                    <p className='py-3 text-xs'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    </div>

                    <div className='min-h-[100px] rounded-3xl px-3 py-2 shadow-2xl'>
                    <h2 className='text-xl font-medium'>Router Configuration</h2>
                    <p className='py-3 text-xs'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    </div>

                    <div className='min-h-[100px] rounded-3xl px-3 py-2 shadow-2xl'>
                    <h2 className='text-xl font-medium'>Desktop Repairing</h2>
                    <p className='py-3 text-xs'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    </div>

                    <div className='min-h-[100px] rounded-3xl px-3 py-2 shadow-2xl'>
                    <h2 className='text-xl font-medium'>Laptop Repairing</h2>
                    <p className='py-3 text-xs'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    </div>

                    <div className='min-h-[100px] rounded-3xl px-3 py-2 shadow-2xl'>
                    <h2 className='text-xl font-medium'>Printer Repairing</h2>
                    <p className='py-3 text-xs'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    </div>

                    <div className='min-h-[100px] rounded-3xl px-3 py-2 '></div>

                    <div className='min-h-[100px] rounded-3xl px-3 py-3 shadow-2xl'>
                    <h2 className='text-xl font-medium'>Server Maintenance</h2>
                    <p className='py-3 text-xs'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    </div>

                </div>

            </section>


        </main>
    </>
  )
}

export default Home
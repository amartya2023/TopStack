import React from 'react'
import Hero from '../assets/Heros.svg'
import PCparts from '../assets/subHero/pcparts.png'
import NetEuip from '../assets/subHero/netequip.png'
import Cctv from '../assets/subHero/cctv.png'
import Arrow from '../assets/Arrow.svg'
import PlaceIcon from '@mui/icons-material/Place';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EastIcon from '@mui/icons-material/East';

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
    const serviceData = [
        {
            title: 'CCTV Maintenance (IP Camera & Normal Camera)',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            title: 'Network Configuration',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            title: 'Router Configuration',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            title: 'Desktop Repairing',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            title: 'Laptop Repairing',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            title: 'Printer Repairing',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            title: 'Server Maintenance',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
    ]
    const contactDetails = [
        {
            icon: PlaceIcon,
            title: '561,Street,City,Disctrict,State, Pin-000000'
        },
        {
            icon: PhoneIcon,
            title: "+91 0000000000"
        },
        {
            icon: WhatsAppIcon,
            title: '+91 0000000000'
        }
    ]
  return (
    
    <>
        <main>

            {/* Heroes section */}
            <section id='home' className='flex items-center justify-center h-screen px-20'>
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
            <section id='sales' className='h-screen bg-black px-20 py-10 flex flex-col gap-10'>

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
                                    <a href="#contact" className='w-max flex items-center justify-around gap-2 px-10 py-2 rounded-lg outline outline-2 outline-[#F9C869] text-[#F9C869] hover:text-black hover:outline-black hover:bg-[#F9C869] transition-all ease-in-out duration-300'>

                                            <div className='text-xl font-medium w-max'>Contact Us</div>

                                            <EastIcon />

                                        </a>
                                </div>
                            )
                        })
                    }

                </div>

            </section>

            {/* Service section */}
            <section id='services' className='h-full py-20 flex flex-col gap-10'>

                <h2 className='text-4xl text-black text-center font-medium'>Our Services</h2>

                <div className='flex flex-wrap h-full w-full px-28 gap-10'>

                    {
                        serviceData.map((data,index)=>{
                            return(
                                <div key={index} className='min-h-[100px] px-5 py-5 rounded-3xl service-shadow w-1/4 mx-auto'>
                                    <h2 className='text-xl font-medium'>{data.title}</h2>
                                    <p className='py-3 text-xs'>
                                        {data.description}
                                    </p>
                                </div>
                            )
                        })
                    }
                    

                </div>

            </section>

            {/* contact section */}
            <section id='contact' className='bg-black px-20 py-10 flex justify-between'>
            <div className='flex flex-col gap-10 w-[20%]'>

                <h2 className='text-2xl font-medium text-white'>Contact Us</h2>

                <div className='flex flex-col gap-5'>

                    {
                        contactDetails?.map((data, index) => {
                            return (
                                <div key={index} className='flex items-center gap-5'>
                                    <data.icon fontSize='large' className='text-white' />
                                    <p className='text-white text-lg'>{data.title}</p>
                                </div>
                            )
                        })
                    }

                </div>

            </div>

                {/* contact form */}
                <form className='flex flex-col gap-2 w-[30%]'>
                    <p className='text-white text-lg mb-5'>Submit your contact number our team will contact you soon</p>

                    <input className='outline-none border-none px-4 py-3 bg-[#D9D9D9] font-medium rounded-xl text-lg' type="text" placeholder='Name' />

                    <input className='outline-none border-none px-4 py-3 bg-[#D9D9D9] font-medium rounded-xl text-lg' type="email" placeholder='Email' />

                    <input className='outline-none border-none px-4 py-3 bg-[#D9D9D9] font-medium rounded-xl text-lg' type="text" pattern="^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$" placeholder="Contact No." />

                    <button className='bg-[#F9C869] text-black text-lg rounded-xl font-medium w-[40%] py-2'>
                        Submit
                    </button>
                </form>

            </section>


        </main>
    </>
  )
}

export default Home
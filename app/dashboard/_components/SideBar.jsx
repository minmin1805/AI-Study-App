"use client"
import { CourseCountContext } from '@/app/_context/CourseCountContext'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { LayoutDashboard, Shield, UserCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext } from 'react'
import webLogo from "../../../public/synapse_hub_logo.svg"
// import { useNavigate } from 'react-router'

function SideBar() {

    // const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const path = usePathname();

    const MenuList = [
        {
            name: 'Dashboard',
            icon: LayoutDashboard,
            path: '/dashboard'
        },
        {
            name: 'Upgrade',
            icon: Shield,
            path: '/dashboard/upgrade'
        },
        {
            name: 'Profile',
            icon: UserCircle,
            path: '/dashboard/profile'
        }
    ]

    const { totalCourse, setTotalCourse } = useContext(CourseCountContext);

    return (
        <div className='h-screen shadow-md p-4'>
            <div className='flex gap-2 items-center'>
                <Image src={webLogo} alt='logo' width={60} height={60} />
                <h2 className='font-bold text-2xl'>Synapse Hub</h2>
            </div>

            <div className='mt-10'>
                <Link href={'/create'} className='w-full'>
                    <button className='w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-all duration-300'>+ Create New</button></Link>

                <div className='mt-5'>
                    {MenuList.map((menu, index) => (
                        <Link href={menu.path} key={index}>
                        <div  className={`flex gap-5 items-center p-3 hover:bg-slate-200 rounded-lg cursor-pointer mt-3
                    ${path == menu.path && 'bg-slate-200'} `}>
                            <menu.icon 
                            onClick={() => handleNavigation(menu.path)}
                            />
                            <h2>{menu.name}</h2>
                        </div></Link>
                    ))}
                </div>
            </div>

            <div className='border p-3 bg-slate-100 rounded-lg absolute bottom-10 w-[87%] left-4'>
                <h2 className='text-lg mb-2'>Available Credits: {(5 - totalCourse)}</h2>
                <Progress value={(totalCourse / 5) * 100} />
                <h2 className='text-sm'>{totalCourse} Out of 5 Credits Used</h2>
                <Link href={'/dashboard/upgrade'} className='text-primary text-xm mt-3'>Upgrade to create more</Link>
            </div>
        </div>
    )
}

export default SideBar
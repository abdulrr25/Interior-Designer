import Link from 'next/link'
import logo from '../public/logo.png'
import Image from 'next/image'

const Logo =()=>{
    return (
        <Link href={"/"}>
        <Image 
            src={logo}
            width ={45}
            height={10}
            alt={logo}
            priority
        />
        </Link>
    )
}

export default Logo
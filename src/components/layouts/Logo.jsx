import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href = {"/"} className='flex items-center gap-1'>
            <Image alt = "Kidz zone"
            src={"/assets/logo.png"}
            width={50}
            height={40}/>
            <h2 className='text-xl font-bold'><span className='text-primary'>KIDS</span> ZONE</h2>
            </Link>
        </div>
    );
};

export default Logo;
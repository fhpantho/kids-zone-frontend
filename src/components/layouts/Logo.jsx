import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href = {"/"} className='flex items-center gap-1'>
            <Image alt = "Kidz zone"
            src={"/assets/logo.png"}
            width={80}
            height={70}/>
            <h2 className='text-xl font-bold'>KIDZ ZONE</h2>
            </Link>
        </div>
    );
};

export default Logo;
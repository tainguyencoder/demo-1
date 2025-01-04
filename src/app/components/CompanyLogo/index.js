import React from 'react'
import Image  from 'next/image'

export default function CompanyLogo(){
    return(
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            <div className="mx-auto py-4">
              <Image src="/images/career/client/amazon.svg" width={72} height={24} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
              <Image src="/images/career/client/google.svg" width={72} height={24} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
              <Image src="/images/career/client/lenovo.svg" width={72} height={24} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
              <Image src="/images/career/client/paypal.svg" width={72} height={24} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
              <Image src="/images/career/client/spotify.svg" width={72} height={24} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
              <Image src="/images/career/client/shopify.svg" width={72} height={24} className="h-6" alt="" />
            </div>
        </div>
    )
}
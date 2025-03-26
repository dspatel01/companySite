import Wave from '@/component/Wave'
import React from 'react'

type PageProps = {
  params: {
    service_slug: string
  }
}

async function Page ({ params }: PageProps) {
  const { service_slug } = await params
  return (
    <>
      <Wave
             title1={` ${service_slug}`}
             subtitle='innovative websites, digital marketing, and design solutions—transforming ideas into digital success!'
           />
      <div className='text-center'>This is all services detail page {`${service_slug}`}</div>
    </>
  )
}

export default Page

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/utils/modal'
import HeroImage from '@/public/images/hero-image-01.jpg'

export default function Hero() {

  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false)

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Illustration behind hero content */}
        <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Welcome to February Create
            </h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
              Plug our ai into your existing integrations and software and watch the magic happen.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-start">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

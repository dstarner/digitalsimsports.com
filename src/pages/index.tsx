import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section>
          <header className='relative mb-12 flex h-screen items-center justify-center overflow-hidden'>
            <div className='layout z-30 ml-2 mr-2 flex min-h-screen flex-col items-center justify-center text-center text-white'>
              <img
                className='max-w-sm'
                alt='DSS Logo'
                src='/images/DSS_LETTERS.png'
              />
              <h1 className='ethno-font mt-4 text-4xl md:text-6xl'>
                Digital SimSports
              </h1>
              <p className='mt-6 text-sm'>
                <ArrowLink href='https://www.twitch.tv/digitalsimsports'>
                  Follow on Twitch
                </ArrowLink>
              </p>
            </div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className='absolute z-10 min-h-full w-auto min-w-full max-w-none'
            >
              <source src='/videos/bg-video.webm' type='video/webm' />
              <source src='/videos/index-bg-video.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </header>
        </section>
      </main>
    </Layout>
  );
}

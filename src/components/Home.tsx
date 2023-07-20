import { PlayIcon, ShareIcon } from './Icons'

function Home (): JSX.Element {
  return (
    <>
      {/* IMAGEN CON BLUR */}
      <div className='absolute inset-0 bg-[url("https://cdx.monstercat.com/resized/8a169d846576fcdad7a0a6e04d371eb05b2a9397/1500.webp")] bg-cover bg-center bg-no-repeat blur-[5px] brightness-50' />
      <div className='absolute inset-0 -inset-y-2 bg-gradient-to-t from-primary via-primary/30 to-primary/30' />
      {/* DEGRADADO OSCURO AL FONDO */}
      <section className='relative flex flex-col justify-center p-4 pt-20 sm:p-16 md:p-20 md:pt-0 lg:min-h-screen xl:p-52 xl:pb-0'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-20'>
          <div className='ml-2 mt-12 flex flex-col-reverse gap-16 md:mt-32 md:-rotate-90 md:flex-col md:gap-2 lg:mt-0 xl:ml-0'>
            <p className=' cursor-vertical-text whitespace-nowrap text-xs italic md:text-base'>
              <span className='text-tertiary'>Instinct</span> — Released May 22,
              2020
            </p>
            <img
              className='h-auto w-auto md:rotate-90'
              src='https://cdx.monstercat.com/resized/8a169d846576fcdad7a0a6e04d371eb05b2a9397/600.webp'
              alt='level days album cover - CONRO'
            />
          </div>
          <div className='flex flex-col'>
            <div className='my-6 flex flex-col gap-6 whitespace-nowrap md:my-12'>
              <h1 className='text-stroke 3xl:text-[3.25rem] text-2xl tracking-widest md:text-4xl '>
                LEVEL DAYS
              </h1>
              <h2 className='3xl:text-4xl text-xl md:text-2xl'>CONRO</h2>
            </div>
            <div className='flex gap-2 md:gap-6'>
              <button className='border border-tertiary bg-tertiary px-6 py-2 pr-8 tracking-widest duration-200 hover:border-white hover:bg-white hover:text-black md:py-4'>
                <span className='flex items-center gap-1 whitespace-nowrap text-xs md:text-base'>
                  <PlayIcon />
                  LISTEN NOW
                </span>
              </button>
              <button className='border px-6 pr-8 duration-200 hover:bg-white hover:text-black md:py-4'>
                <span className='text-red flex items-center gap-1 text-xs md:text-base'>
                  <ShareIcon />
                  SHARE
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

import { PlayIcon, ShareIcon } from './Icons'

function Home (): JSX.Element {
  return (
    <>
      {/* IMAGEN CON BLUR */}
      <div className='absolute inset-0 bg-cover bg-center bg-no-repeat blur-[5px] brightness-50 bg-[url("https://cdx.monstercat.com/resized/8a169d846576fcdad7a0a6e04d371eb05b2a9397/1200.webp")]' />
      {/* DEGRADADO OSCURO AL FONDO */}
      <div className='absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-primary/30' />
      <section className='relative flex flex-col justify-center px-52 xl:min-h-screen'>
        <div className='flex flex-col pt-32 md:gap-28 xl:flex-row xl:items-center '>
          <div className='flex flex-col-reverse gap-16 md:-rotate-90 md:flex-col md:gap-2'>
            <p className=' cursor-vertical-text italic'>
              <span className='text-tertiary'>Instinct</span> — Released May 22,
              2020
            </p>
            <img
              className='xs:h-[500px] h-auto w-full md:h-[666px] xl:h-[750px] md:rotate-90'
              src='https://cdx.monstercat.com/resized/8a169d846576fcdad7a0a6e04d371eb05b2a9397/600.webp'
              alt='level days album cover - CONRO'
            />
          </div>
          <div className='flex flex-col'>
            <div className='my-6 flex flex-col gap-6 whitespace-nowrap md:my-12'>
              <h1 className='text-stroke text-2xl tracking-widest md:text-[3.25rem] '>
                LEVEL DAYS
              </h1>
              <h2 className='text-2xl md:text-4xl'>CONRO</h2>
            </div>
            <div className='flex gap-6'>
              <button className='border border-tertiary bg-tertiary px-6 py-4 pr-8 tracking-widest duration-200 hover:border-white hover:bg-white hover:text-black'>
                <span className='flex items-center gap-1 text-sm md:text-base'>
                  <PlayIcon />
                  LISTEN NOW
                </span>
              </button>
              <button className='border px-6 py-4 pr-8 duration-200 hover:bg-white hover:text-black'>
                <span className='text-red flex items-center gap-1 text-sm md:text-base'>
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

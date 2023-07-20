function MusicVideo (): JSX.Element {
  return (
    <section className='relative flex flex-col items-start px-48 xl:min-h-screen bg-primary'>
      <div className='flex flex-col justify-center w-full'>
        <h1 className='text-2xl tracking-widest md:text-5xl pt-20 pb-12'>
          MUSIC VIDEO
        </h1>
        <iframe
          className='h-[550px] w-auto xl:h-[960px]'
          src='https://www.youtube.com/embed/7nObtWENgxA'
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}
export default MusicVideo

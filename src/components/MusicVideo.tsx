function MusicVideo (): JSX.Element {
  return (
    <section className='relative flex flex-col items-start bg-primary px-4 sm:px-16 md:px-20 xl:min-h-screen xl:px-48'>
      <div className='flex w-full flex-col justify-center'>
        <h1 className='pb-12 pt-20 text-xl tracking-widest md:text-5xl'>
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

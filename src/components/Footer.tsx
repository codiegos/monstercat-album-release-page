import { allIcons } from '../data/Icons'
import { ArrowIcon } from './Icons'

function Footer (): JSX.Element {
  const year = new Date().getFullYear()
  return (
    <footer className='mx-4 flex flex-col gap-12 bg-primary text-sm tracking-widest sm:mx-16 md:mx-20 xl:mx-48 xl:text-xl '>
      <div className='mt-32 flex w-full flex-col justify-between border-b border-t py-12 xl:flex-row'>
        <div className='flex flex-col gap-3'>
          <a href='#'>ABOUT MONSTERCAT</a>
          <a href='#'>CONTACT US</a>
          <a href='#'>CAREERS</a>
          <a href='#'>NEWS</a>
          <a href='#'>PRESS</a>
        </div>
        <div className='mb-12 flex flex-col gap-3 pt-3'>
          <a href='#'>TERMS OF SERVICE</a>
          <a href='#'>PRIVACY POLICY</a>
        </div>
        <div className='flex flex-col justify-between gap-3'>
          <h2 className='text-neutral-500'>MONSTERCAT NEWS</h2>
          <p className='max-w-xl text-sm leading-relaxed tracking-widest'>
            {
              "Don't miss a thing, stay up to date with the latest news from us."
            }
          </p>
          <div className='flex justify-between border-b border-neutral-700'>
            <input
              type='email'
              className='bg-transparent text-xs placeholder:text-neutral-600 focus:outline-none xl:text-lg'
              placeholder=' Enter email'
            />
            <button className='my-2 px-7 py-2 duration-200 hover:bg-white hover:text-black hover:ring-1 hover:ring-white'>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between xl:flex-row'>
        <p className='text-xs text-neutral-400 md:text-sm'>
          {`2011 - ${year} © Monstercat, All Rights Reserved`}
        </p>
        <ul className='flex flex-wrap items-center gap-4'>
          {allIcons.map((icon, i) => (
            <li key={i}>
              <a href='#'>{icon.logo}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='pb-32 pt-14'>
        <p className='font-serif mx-auto text-center text-xs italic text-neutral-300 xl:max-w-6xl'>
          We acknowledge with gratitude the traditional, ancestral and unceded
          land of the Coast Salish peoples, including the territories of the
          Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh
          (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which
          Monstercat Vancouver HQ stands.
          <br />
          <br /> We acknowledge the unceded and ancestral territories of the
          Gabrielino/Tongva peoples on which our LA team live and work
        </p>
      </div>
    </footer>
  )
}
export default Footer

import { allIcons } from '../data/Icons'
import { ArrowIcon } from './Icons'

function Footer (): JSX.Element {
  const year = new Date().getFullYear()
  return (
    <footer className='flex flex-col gap-12 mx-48 bg-primary text-xl tracking-widest '>
      <div className='flex justify-between w-full border-t border-b mt-32 py-12'>
        <div className='flex flex-col gap-3'>
          <a href='' className=''>
            ABOUT MONSTERCAT
          </a>
          <a href='' className=''>
            CONTACT US
          </a>
          <a href='' className=''>
            CAREERS
          </a>
          <a href='' className=''>
            NEWS
          </a>
          <a href='' className=''>
            PRESS
          </a>
        </div>
        <div className='flex flex-col gap-3'>
          <a href='' className=''>
            TERMS OF SERVICE
          </a>
          <a href='' className=''>
            PRIVACY POLICY
          </a>
        </div>
        <div className='flex flex-col gap-3 justify-between'>
          <h2 className='text-neutral-500'>MONSTERCAT NEWS</h2>
          <p className='text-sm max-w-xl tracking-widest leading-relaxed'>
            {
              "Don't miss a thing, stay up to date with the latest news from us."
            }
          </p>
          <div className='flex justify-between border-b border-neutral-700'>
            <input
              type='email'
              className='bg-transparent text-lg focus:outline-none placeholder:text-neutral-600'
              placeholder=' Enter email'
            />
            <button className='px-7 py-2 my-2 hover:bg-white hover:text-black hover:ring-1 hover:ring-white duration-200'>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        <p className='text-sm text-neutral-400'>
          {`2011 - ${year} © Monstercat, All Rights Reserved`}
        </p>
        <ul className='flex items-center gap-4'>
          {allIcons.map((icon, i) => (
            <li key={i} className=''>
              <a href='#' className=''>
                {icon.logo}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='pt-14 pb-32'>
        <p className='mx-auto text-center text-xs font-serif italic max-w-6xl text-neutral-300'>
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

import { useId } from 'react'
import { CloseIcon, HamburgerIcon } from './Icons'
import { socialMediaIcons } from '../data/Icons'
import { MenuItems } from '../types.d'

interface ListSocialMediasProps {
  vertical: boolean
}

const menuItems = Object.values(MenuItems)

function ListSocialMedias ({ vertical }: ListSocialMediasProps): JSX.Element {
  return (
    <ul className={`flex gap-4 ${vertical ? 'xl:flex-col' : ''}`}>
      {socialMediaIcons.map((socialMedia, index) => (
        <li key={index}>
          <a href={socialMedia.href}>{socialMedia.logo}</a>
        </li>
      ))}
    </ul>
  )
}

function Navbar (): JSX.Element {
  const menuId = useId()
  return (
    <>
      <header className='fixed z-20 w-full bg-primary px-4 sm:py-4 md:px-16 xl:bg-transparent xl:py-8'>
        <div className='relative flex items-center justify-between'>
          <nav className='flex flex-grow basis-0'>
            <img
              src='./monstercat-logo.webp'
              alt='monstercat-logo'
              className='h-14 w-auto cursor-pointer rounded-full'
            />
          </nav>
          <nav className='right-0 top-32 hidden flex-grow basis-0 justify-center sm:flex xl:absolute'>
            <ListSocialMedias vertical={true} />
          </nav>
          <nav className='flex flex-grow basis-0 justify-end'>
            <label htmlFor={menuId} className='cursor-pointer'>
              <HamburgerIcon />
            </label>
            <input className='peer' type='checkbox' id={menuId} hidden />
            <div className='fixed right-0 top-0 flex h-full w-full translate-x-full flex-col justify-between bg-black p-8 duration-500 peer-checked:translate-x-0 md:w-[26.5rem]'>
              <div className='flex items-center justify-between'>
                <img
                  className='h-10 w-auto'
                  src='https://storage.googleapis.com/monstercat/monstercat-logo-white.svg'
                  alt='monstercat-svg'
                />
                <label htmlFor={menuId} className='cursor-pointer'>
                  <CloseIcon />
                </label>
              </div>
              <ul className='flex flex-col gap-5 pb-12 text-lg'>
                {menuItems.map(menuItem => (
                  <li key={menuItem}>
                    <a href='#'>{menuItem}</a>
                  </li>
                ))}
              </ul>
              <div className='flex flex-col gap-5'>
                <ListSocialMedias vertical={false} />
                <div className='flex items-center gap-4 text-sm'>
                  <button className='border border-white p-1.5 px-4 tracking-widest duration-300 hover:bg-white hover:text-black'>
                    SIGN IN
                  </button>
                  <button>OR SIGN UP</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
export default Navbar

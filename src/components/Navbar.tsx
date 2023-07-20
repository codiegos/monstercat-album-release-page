import { useId } from 'react'
import { HamburgerIcon } from './Icons'
import ListSocialMedias from './ListSocialMedias'
import SideMenu from './SideMenu'

function Navbar (): JSX.Element {
  const menuId = useId()
  return (
    <>
      <header className='fixed z-20 h-20 w-full bg-primary xl:h-0'>
        <nav className='right-8 top-36 hidden justify-center p-8 sm:flex xl:absolute'>
          <ListSocialMedias vertical={true} />
        </nav>
        <nav>
          {/* ICONO MONSTERCAT */}
          <div className='absolute left-4 top-4 xl:left-16 xl:top-12'>
            <img
              src='./monstercat-logo.webp'
              alt='monstercat-logo'
              className='h-14 w-auto cursor-pointer rounded-full'
            />
          </div>
          {/* ICONO HAMBURGUESA y SU MENÚ DESPLEGABLE */}
          <label
            htmlFor={menuId}
            className='absolute right-4 top-7 cursor-pointer xl:right-16 xl:top-16'
          >
            <HamburgerIcon />
          </label>
          <input className='peer' type='checkbox' id={menuId} hidden />
          <SideMenu menuId={menuId} />
        </nav>
      </header>
    </>
  )
}
export default Navbar

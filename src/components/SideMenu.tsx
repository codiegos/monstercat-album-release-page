import { MenuItems } from '../types.d'
import { CloseIcon } from './Icons'
import ListSocialMedias from './ListSocialMedias'

const menuItems = Object.values(MenuItems)
interface SideMenuProps {
  menuId: string
}
function SideMenu ({ menuId }: SideMenuProps): JSX.Element {
  return (
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
  )
}
export default SideMenu

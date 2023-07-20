import { socialMediaIcons } from '../data/Icons'

interface ListSocialMediasProps {
  vertical: boolean
}

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

export default ListSocialMedias

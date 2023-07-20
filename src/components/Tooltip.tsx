interface TooltipProps {
  text: string
}
function Tooltip ({ text }: TooltipProps): JSX.Element {
  return (
    <div className='absolute bottom-10 opacity-0 rounded-sm bg-gray-100 p-2 text-xs text-primary group-hover:opacity-100 duration-300'>
      <span className='relative'>STREAM ON {text}</span>
      <svg
        className='absolute right-[44%] w-6 h-6 rotate-90 fill-gray-100 opacity-0 group-hover:opacity-100 duration-200'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <path d='M7 6v12l10-6z'></path>
      </svg>
    </div>
  )
}
export default Tooltip

interface TooltipProps {
  text: string
}
function Tooltip ({ text }: TooltipProps): JSX.Element {
  return (
    <div className='absolute bottom-10 rounded-sm bg-gray-100 p-2 text-xs text-primary opacity-0 duration-300 group-hover:opacity-100 md:block whitespace-nowrap'>
      <span className='relative'>STREAM ON {text}</span>
      <svg
        className='absolute right-[44%] h-6 w-6 rotate-90 fill-gray-100 opacity-0 duration-200 group-hover:opacity-100'
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

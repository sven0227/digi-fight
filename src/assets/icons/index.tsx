export function LeftArrow({ isRotate = false }) {
  const style = isRotate ? 'rotate-180 transition-all' : 'transition-all'
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='12'
      fill='none'
      viewBox='0 0 16 16'
      className={style}
    >
      <path fill='currentColor' d='m5.409 16 8-8-8-8-2.27 2.27L8.87 8l-5.73 5.73L5.41 16Z'></path>
    </svg>
  )
}

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

export function CloseIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'>
      <path
        fill='#fff'
        fill-rule='evenodd'
        d='M8 10.27 2.27 16 0 13.73 5.73 8 0 2.27 2.27 0 8 5.73 13.73 0 16 2.27 10.27 8 16 13.73 13.73 16 8 10.27Z'
        clip-rule='evenodd'
      ></path>
    </svg>
  )
}

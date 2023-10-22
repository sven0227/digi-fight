export const SocialIcon = ({ color = '#fff' }: { color?: string }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none' viewBox='0 0 32 32'>
      <path
        fill={color}
        fillRule='evenodd'
        d='M23.864 0a3.874 3.874 0 0 0-3.785 4.674c.124.58.378 1.113.73 1.566l-2.556 3.254a8.07 8.07 0 0 1 1.474 1.16L22.283 7.4c.483.217 1.018.34 1.581.34a3.874 3.874 0 0 0 3.87-3.87A3.874 3.874 0 0 0 23.864 0ZM7.432 9.28a3.168 3.168 0 0 0 .208-1.962 3.194 3.194 0 0 0-3.118-2.526 3.192 3.192 0 0 0-3.189 3.189 3.192 3.192 0 0 0 3.189 3.188 3.17 3.17 0 0 0 1.676-.478l1.268 1.11c.356-.518.77-.992 1.235-1.412l-1.269-1.11Zm2.61 13.975-1.835 2.44a3.856 3.856 0 0 1 .865 2.435A3.874 3.874 0 0 1 5.202 32a3.874 3.874 0 0 1-3.869-3.87 3.874 3.874 0 0 1 5.376-3.564l1.834-2.44c.453.432.955.811 1.498 1.129Zm4.032-13.064a6.146 6.146 0 0 0-6.14 6.14 6.146 6.146 0 0 0 6.14 6.139 6.146 6.146 0 0 0 6.14-6.14 6.146 6.146 0 0 0-6.14-6.139Zm8.767 10.34a5.117 5.117 0 0 1 3.828-1.72c2.828 0 5.128 2.3 5.128 5.129 0 2.827-2.3 5.128-5.128 5.128a5.137 5.137 0 0 1-5.129-5.128c0-.635.117-1.243.329-1.805l-1.47-.888c.384-.492.711-1.03.973-1.603l1.469.887Z'
        clipRule='evenodd'
      ></path>
    </svg>
  )
}

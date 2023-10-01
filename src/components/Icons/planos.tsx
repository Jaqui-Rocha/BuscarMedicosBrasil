interface iconeProps {
  fill?: string
}
function Planos({ fill }: iconeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill ? fill : 'currentColor'}
        fillRule="evenodd"
        d="M12 .25a.75.75 0 01.75.75v22a.75.75 0 01-1.5 0V1A.75.75 0 0112 .25z"
        clipRule="evenodd"
      ></path>
      <path
        fill={fill ? fill : 'currentColor'}
        fillRule="evenodd"
        d="M4.75 7.5c0-2.9 2.35-5.25 5.25-5.25h7.5v1.5H10a3.75 3.75 0 100 7.5.75.75 0 010 1.5A5.25 5.25 0 014.75 7.5zM18.25 3a.75.75 0 01-.75.75v-1.5a.75.75 0 01.75.75z"
        clipRule="evenodd"
      ></path>
      <path
        fill={fill ? fill : 'currentColor'}
        fillRule="evenodd"
        d="M9.25 12a.75.75 0 01.75-.75h4a5.25 5.25 0 110 10.5H6.5v-1.5H14a3.75 3.75 0 100-7.5h-4a.75.75 0 01-.75-.75zm-3.5 9a.75.75 0 01.75-.75v1.5a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Planos

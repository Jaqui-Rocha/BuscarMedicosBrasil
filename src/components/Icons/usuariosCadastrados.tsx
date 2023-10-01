interface iconeProps {
  fill?: string
}
function UsuariosCadastrados({ fill }: iconeProps) {
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
        d="M7 12.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM3.75 14.5a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM17 12.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zm-3.25 1.75a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM12 2.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM8.75 4.5a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill={fill ? fill : 'currentColor'}
        fillRule="evenodd"
        d="M1.25 22a5.75 5.75 0 0111.5 0 .75.75 0 01-1.5 0 4.25 4.25 0 00-8.5 0 .75.75 0 01-1.5 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill={fill ? fill : 'currentColor'}
        fillRule="evenodd"
        d="M11.25 22a5.75 5.75 0 0111.5 0 .75.75 0 01-1.5 0 4.25 4.25 0 00-8.5 0 .75.75 0 01-1.5 0zM6.25 12a5.75 5.75 0 0111.5 0 .75.75 0 01-1.5 0 4.25 4.25 0 00-8.5 0 .75.75 0 01-1.5 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default UsuariosCadastrados

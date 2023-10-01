interface iconeProps {
  fill?: string
}
function Notificacoes({ fill }: iconeProps) {
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
        d="M12 2.75A6.25 6.25 0 0118.25 9v9.25H5.75V9A6.25 6.25 0 0112 2.75zm7.75 15.5V9a7.75 7.75 0 00-15.5 0v9.25H2a.75.75 0 000 1.5h20a.75.75 0 000-1.5h-2.25z"
      ></path>
      <path
        fill={fill ? fill : 'currentColor'}
        d="M8.75 19a.75.75 0 01.75-.75h5a.75.75 0 01.75.75v.5a3.25 3.25 0 01-6.5 0V19zm1.518.75a1.75 1.75 0 003.464 0h-3.464z"
      ></path>
    </svg>
  )
}

export default Notificacoes

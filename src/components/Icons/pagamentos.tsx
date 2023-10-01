interface iconeProps {
  fill?: string
}
function Pagamentos({ fill }: iconeProps) {
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
        d="M2.25 4c0-.966.784-1.75 1.75-1.75h4a.75.75 0 010 1.5H4a.25.25 0 00-.25.25v4a.75.75 0 01-1.5 0V4zM3 15.25a.75.75 0 01.75.75v4c0 .138.112.25.25.25h4a.75.75 0 010 1.5H4A1.75 1.75 0 012.25 20v-4a.75.75 0 01.75-.75zM21 15.25a.75.75 0 01.75.75v4A1.75 1.75 0 0120 21.75h-4a.75.75 0 010-1.5h4a.25.25 0 00.25-.25v-4a.75.75 0 01.75-.75zM15.25 3a.75.75 0 01.75-.75h4c.966 0 1.75.784 1.75 1.75v4a.75.75 0 01-1.5 0V4a.25.25 0 00-.25-.25h-4a.75.75 0 01-.75-.75zM12 7.25a.75.75 0 01.75.75v8a.75.75 0 01-1.5 0V8a.75.75 0 01.75-.75zM16 7.25a.75.75 0 01.75.75v8a.75.75 0 01-1.5 0V8a.75.75 0 01.75-.75zM8 7.25a.75.75 0 01.75.75v8a.75.75 0 01-1.5 0V8A.75.75 0 018 7.25z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Pagamentos

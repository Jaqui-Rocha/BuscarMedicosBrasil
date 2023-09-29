interface iconeProps {
  fill: string
}
function Especialidades({ fill }: iconeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={fill ? fill : 'currentColor'}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill ? fill : 'currentColor'}
        fillRule="evenodd"
        d="M14.08 3.999a.75.75 0 010 1.06l-8.93 8.93c-1.4 1.4-1.387 3.733.092 5.212 1.479 1.48 3.812 1.491 5.212.091l8.93-8.93a.75.75 0 011.06 1.061l-8.93 8.93c-2.014 2.014-5.297 1.945-7.333-.09-2.036-2.037-2.105-5.32-.091-7.335l8.93-8.93a.75.75 0 011.06 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill={fill ? fill : 'currentColor'}
        fillRule="evenodd"
        d="M18.189 13.348a.75.75 0 01-.73.77l-13.072.344a.75.75 0 11-.04-1.5l13.072-.344a.75.75 0 01.77.73z"
        clipRule="evenodd"
      ></path>
      <path
        fill={fill ? fill : 'currentColor'}
        d="M14.697 10.454a1 1 0 10-1.415-1.415 1 1 0 001.415 1.415zM11.868 11.868a1 1 0 10-1.414-1.414 1 1 0 001.414 1.414z"
      ></path>
      <path
        fill={fill ? fill : 'currentColor'}
        fillRule="evenodd"
        d="M11.252 2.231a.75.75 0 011.06 0l9.9 9.9a.75.75 0 11-1.06 1.06l-9.9-9.9a.75.75 0 010-1.06z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Especialidades

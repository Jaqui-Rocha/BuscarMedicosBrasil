import styled from 'styled-components'
export const Circle = styled.div<{ color: string }>`
  border-radius: 50px;
  width: 80px;
  height: 80px;
  background: ${({ color }) => color};
  position: relative;
`
export const ImageIcon = styled.img`
  position: absolute;
  left: 1.1em;
  top: 1.1em;
`

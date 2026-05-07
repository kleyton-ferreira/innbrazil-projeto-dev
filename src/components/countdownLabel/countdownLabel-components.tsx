import { FunctionComponent } from 'react'

interface CountdownLabelProps {
  children: string
}

const CountdownLabel: FunctionComponent<CountdownLabelProps> = ({
  children
}) => {
  return (
    <>
      <span> {children} </span>
    </>
  )
}

export default CountdownLabel

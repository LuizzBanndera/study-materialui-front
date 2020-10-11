import React from 'react'
import styled from 'styled-components'

const button = styled.button`
width: 3rem;
`

interface iButton {
  label: string
}

export default function Button(props: iButton) {
  return (
    <button>{props.label}</button>
  )
}
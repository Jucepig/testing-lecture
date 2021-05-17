import React from 'react'
import { faItalic } from '@fortawesome/free-solid-svg-icons'
import { render, fireEvent } from '@testing-library/react'
import Header from '../components/Header'

it('Does not show dropdown when mounted', ()=>{
  const {queryByTestId} = render(<Header />)
  const dropdown = queryByTestId('dropdown')
  expect(dropdown).not.toBeTruthy()
})

it('Shows dropdown when hamburger is clicked', ()=>{
  const { container, queryByTestId } = render(<Header />)
  const hamburger = queryByTestId('hamburger-button')

  fireEvent.click(hamburger)

  expect(container.textContent).toContain('Dropdown menu')
})
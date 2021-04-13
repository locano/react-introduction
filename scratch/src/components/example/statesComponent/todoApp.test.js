import React from 'react';
import { screen, render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoApp from './todoApp'

describe('Todo App', () => {
  let buttonId;
  beforeAll(() => {
    render(<TodoApp />)
    buttonId = screen.getByTestId('agregar')
  })

  it('Mi button debe tener un texto', () => {
    const message = 'Agregar Tarea #1';
    const tbn1 = screen.getByText(message);
    expect(tbn1).toBeInTheDocument()
  })

  xit('Primer Valor en button', () => {
    expect(buttonId.value).toBe('Agregar Tarea #1')
    fireEvent.change(buttonId, { target: { value: 'Agregar Tarea #2' } })
  })

  afterAll(cleanup)
})

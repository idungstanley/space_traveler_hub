import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import Card from './Card'
import store from '../../App/configureStore'

let component

let cardProps = {
  img: 'http.example.png',
  reserved: false,
  title: 'Datr',
  desc: 'dk ekef ekf aefeofnv vrk',
  rocketId: '2',
}

const { img, reserved, title, desc, rocketId } = cardProps

describe(Card, () => {
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Card
          img={img}
          reserved={reserved}
          title={title}
          desc={desc}
          rocketId={rocketId}
        />
      </Provider>
    )
  })
  test('Renders appropriate data', () => {
    expect(component.getByText(desc)).toBeInTheDocument()
    expect(component.getByText(title)).toBeInTheDocument()
  })
  test('Fire event', () => {
    const btn = component.getByRole('button')
    fireEvent.click(btn)
  })
})

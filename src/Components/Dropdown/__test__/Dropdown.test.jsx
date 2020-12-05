import React from 'react'
import { render, fireEvent, cleanup, waitForElement, getByTestId } from '@testing-library/react'
import Dropdown from './../Dropdown'

afterEach(cleanup)

describe ('Test react-select component', () => {
    const products = [
        {name:'test1a', description: 'test1b', media: {source: 'test1c'}},
        {name:'test2a', description: 'test2b', media: {source: 'test2c'}}
    ]

    it('should render without errors', async () => {
        const mockedOnChange = jest.fn()
        const { getByTestId } = render(<Dropdown 
            opcoes={products}
            prompt="selecione um produto..."
            value={products[0]} 
            onChange={mockedOnChange} />)

        expect(getByTestId('display')).toHaveTextContent('test1a')
    })
})
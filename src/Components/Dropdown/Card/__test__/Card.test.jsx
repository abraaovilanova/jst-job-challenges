import React from 'react'
import ReactDom from 'react-dom'
import Card from './../Card'
import { render, cleanup } from '@testing-library/react' 
import '@testing-library/jest-dom/extend-expect'



afterEach(cleanup)
it('renders without crashing', ()=>{
    const div = document.createElement('div')
    ReactDom.render(<Card />, div)
})

it('renders card correctly', ()=>{
    const {getByTestId} = render(<Card value={{name:'test1', description: 'test2', media: {source: 'test3'}}} show={true} close={(e)=> ('')}/>)
    expect(getByTestId('name')).toHaveTextContent('test1')
    expect(getByTestId('description')).toHaveTextContent('test2')
})


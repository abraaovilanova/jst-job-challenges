import React, { useState, useRef, useEffect } from 'react'
import './styles.css'
import Card from './Card/Card'


export default ({opcoes, prompt, value, onChange}) => {

    
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [show, setShow] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        document.addEventListener('click',close)

        return () => document.removeEventListener('click',close)

    },[])

    function close(e){

        setOpen(e && e.target === ref.current)
    }

    function filter(opcoes) {
        return opcoes.filter((opcao) => 
            opcao.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
    }

    function displayValue(){

        if (query.length >= 0) return query
        if (value) return value.name
        return ''

        
    }

    const closeModalHandler = () => {
        setShow(false)
        onChange(null)
    }



    return (
        <>
            <div className="dropdown">
                <div className="control" onClick={()=> setOpen((prev) => !prev)}>
                    <div className="selected-value">
                        <input
                            id="myInput"
                            type="text" 
                            ref={ref} 
                            placeholder={value ? value.name : prompt}
                            value={displayValue()}
                            onChange={e =>{
                                setQuery(e.target.value)
                                onChange(null)
                            }}
                            onClick={() => setOpen(prev => !prev)}
                            />
                        </div>
                    <div className={`arrow ${open ? "open": null}`}/>

                </div>
                <div className={`options ${open ? "open": null}`}>
                    {
                        filter(opcoes).map((opcao) => (
                        <div 
                        data-testid="display" 
                        className={`option ${value === opcao ? 'selected' : null}`}
                        onClick={()=>{
                            setQuery('')
                            onChange(opcao)
                            setShow(true)
                            setOpen(false)
                        }}
                        key={opcao.Code}>{opcao.name}</div> 
                                        ))}

                </div>
            </div>
            
            <Card value={value} show={show} close={closeModalHandler}/>
        </>
    )
}
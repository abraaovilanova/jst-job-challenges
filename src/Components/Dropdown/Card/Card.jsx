import React from 'react'
import './styles.css'

export default ({value, show, close}) => {  
    if (value){
        return (
            <div className="modal-wrapper" 
                style={{
                    opacity: show ? '1' : '0'
                }}>
    
                <div className="modal-header">
                    <p>Produto selecionado!</p>
                    <span className="close-modal-btn" onClick={close}>&#10005;</span>
                </div>
                <div className="modal-content">
                    <div className="modal-img">
                        <img data-testid="media" src={value.media.source} alt="imagem do produto"/>
                    </div>
                    <div className="modal-body">
                        <h4 data-testid="name">{`${value.name}`}</h4>
                        <p data-testid="description" dangerouslySetInnerHTML={{ __html: value.description }}></p>
                    </div>
                </div>
                <div className="modal-footer">
                        <button className="btn-cancel" onClick={close}>Fechar</button>
                </div>
            </div>
        )
        
    }else {
        return <></>
    }
}
import React, {useState} from 'react';
import { paletas } from '../mocks/paletas.js';
import './PaletaLista.css';


function PaletaLista() {

    const [paletaSelecionada, setPaletaSelecionada] = useState({});

    const adicionarItem = (paletaIndex)=> {
        const paleta = {[paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) +1}
        setPaletaSelecionada({...paletaSelecionada,...paleta});
    }

    return <div className="PaletaLista">
        {paletas.map((paletas,index)=>(
                <div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
                   <span className='PaletaListaItem__badge'>{paletaSelecionada[index]|| 0}</span>
                    <div>
                        <div className='PaletaListaItem__titulo'>{paletas.titulo}</div>
                        <div className='PaletaListaItem__preco'>{paletas.preco.toFixed(2)}</div>
                        <div className='PaletaListaItem__descricao'>{paletas.descricao}</div>
                        <div className='PaletaListaItem__acoes Acoes'>
                        <button className="Acoes__adicionar Acoes__adicionar--preencher" onClick={() => adicionarItem(index)}>adicionar</button>
                       </div>
                    </div>
                    <img className='PaletaListaItem__foto' src={paletas.foto} alt={`Paleta de ${paletas.sabor}`} />
                </div>
                ))}
            </div>;
  }
  
  export default PaletaLista;
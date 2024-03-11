import {useState} from 'react'
import imgRestaurante from './assets/imgRestaurante.webp'
import './App.css'
import {Navegacao} from './Navegacao'
import {ItemCardapio} from './ItemCardapio'
import {pratosPrincipais, sobremesas, bebidas} from './cardapio.js'

export function App() {
  const paginasMenu       = [pratosPrincipais, sobremesas, bebidas]; 
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return <>
        <img src={imgRestaurante} alt='Cardápio Digital' title='Cardápio Digital' className='capa' />
        <h1>Projeto Cardápio Digital criado com Vite e React</h1>
        <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} />
        <div className="menu">
          {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />)}
        </div>
        
      </>
}
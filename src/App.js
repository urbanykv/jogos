import { useState } from 'react';
import { ItemJogo } from './components/itemjogo/script';
import './App.css'



function App() {

  let jogosExclusivos = [
    { id: 1, nome: "Contraband", plataforma: "xbox" },
    { id: 2, nome: "Avowed", plataforma: "xbox" },
    { id: 3, nome: "Starfield", plataforma: "xbox" },
    { id: 4, nome: "Fable", plataforma: "xbox" },
    { id: 5, nome: "Ghost of Tsushima 2", plataforma: "playstation" },
    { id: 6, nome: "Marvel's Spider-Man 2", plataforma: "playstation" },
    { id: 7, nome: "Death Stranding 2", plataforma: "playstation" },
    { id: 8, nome: "Final Fantasy XVI", plataforma: "playstation" },
    { id: 9, nome: "Mario Odissey", plataforma: "nintendo" },
    { id: 10, nome: "Zelda: Tears of Kingdom", plataforma: "nintendo" },
    { id: 11, nome: "Xenoblade Chronicles 3", plataforma: "nintendo" },
    { id: 12, nome: "Pokemon Scarlet & Violet", plataforma: "nintendo" }
  ];

  const [listaJogos, setListaJogos] = useState(jogosExclusivos);
  const [textoBusca, setTextoBusca] = useState("");

  const filtrarJogoPerPlataforma = plataforma => {
    setListaJogos(
        jogosExclusivos.filter((jogo) => jogo.plataforma === plataforma));
        setTextoBusca("");
  }

  const limparFiltro = () => {
    setListaJogos(jogosExclusivos);
    setTextoBusca("");
  }

  const buscarJogo = (text) => {
    setTextoBusca(text);
    setListaJogos(jogosExclusivos.filter((jogo) =>
      jogo.nome.toLowerCase().includes(text.toLowerCase()) ||
      jogo.plataforma.toLowerCase().includes(text.toLowerCase()))
  );
  }

  return (
    <div className="App">
        <div className='container-principal'>
            <h1>Lista de Jogos Exclusivos.</h1>
            <div className='buscar'>
                <button className='filtrar'  id="xbox" onClick={() => filtrarJogoPerPlataforma("xbox")}>XBOX</button>
                <button className='filtrar'  id="ps" onClick={() => filtrarJogoPerPlataforma("playstation")}>Playstation</button>
                <button className='filtrar'  id="nintendo" onClick={() => filtrarJogoPerPlataforma("nintendo")}>Nintendo</button>
                <button className='limparFiltro' onClick={limparFiltro}>Limpar Filtro</button>
            </div>

            <input type='text' name='busca' id='busca' placeholder='Pesquise um jogo ou uma plataforma' value={textoBusca} onChange={(event) => buscarJogo(event.target.value)} />

            <div className='container-jogos'>
                {
                    listaJogos.map(jogo => {
                      return(
                      <ItemJogo
                       key={jogo.id}
                       nome={jogo.nome}
                       plataforma={jogo.plataforma} />
                      )
                    })
                }
            </div>
        </div>
    </div>
  );
}


export default App;

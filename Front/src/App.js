import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './formulario';
import Tabela from './tabela';

function App() {

  // Objeto produto
  const produto = {
    codigo: 0,
    nome: '',
    marca:''
  }

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProduto] = useState([]);
  const [objProduto, setObjProduto] = useState(produto)

  // UseEffect
  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProduto(retorno_convertido))
  }, []);

  // Obtendo dados do formulário
  const aoDigitar = (e) => {
    setObjProduto({...objProduto, [e.target.name]:e.target.value})
  }

  // Cadastrar produto
  const cadastrar = () => {
    fetch("http://localhost:8080/cadastrar", {method:'post', body:JSON.stringify(objProduto), headers:{'Content-type': 'application/json', 'Accept':'application/json'}})
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setProduto([...produtos, retorno_convertido]);
        alert('Produto Cadastrado com Sucesso')
        limparformulario();
      }
    })
  }

  // Alterar produto
  const alterar = () => {
    fetch("http://localhost:8080/alterar", {method:'put', body:JSON.stringify(objProduto), headers:{'Content-type': 'application/json', 'Accept':'application/json'}})
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        alert('Produto Alterado com Sucesso')

         // Copia Vetor de Produtos
         let vetorTemp = [...produtos];

         // Indice
         let indice = vetorTemp.findIndex((p)=> {
           return p.codigo === objProduto.codigo;
         });
 
         // Alterar produto do vetorTemp
         vetorTemp[indice] = objProduto;
 
         // Atualizar vetor de produtos
         setProduto(vetorTemp);
 
        limparformulario();
      }
    })
  }

    // Deletar produto
    const remover = () => {
      fetch("http://localhost:8080/remover/"+ objProduto.codigo, {method:'delete', headers:{'Content-type': 'application/json', 'Accept':'application/json'}})
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        
        // Mensagem
        alert(retorno_convertido.mensagem);

        // Copia Vetor de Produtos
        let vetorTemp = [...produtos];

        // Indice
        let indice = vetorTemp.findIndex((p)=> {
          return p.codigo === objProduto.codigo;
        });

        // Remover produto do vetorTemp
        vetorTemp.splice(indice, 1);

        // Atualizar vetor de produtos
        setProduto(vetorTemp);

        limparformulario();
      })
    }


  // Limpar Formulário
  const limparformulario = () =>{
    setObjProduto(produto);
    setBtnCadastrar(true);
  }

  // Selecionar Produto
  const selecionarProduto = (indice) => {
    setObjProduto(produtos[indice]);
    setBtnCadastrar(false)
  }

  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProduto} cancelar={limparformulario} remover={remover} alterar={alterar} />
      <Tabela vetor={produtos} selecionar={selecionarProduto}/>

    </div>
  );
}

export default App;

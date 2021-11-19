import { StyledComponent } from '@mui/styled-engine';
import React, {useEffect} from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {Carro} from '../../../src/icones/carro';
import {Caminhao} from '../../../src/icones/caminhao';
import {Moto} from '../../../src/icones/moto';

function modelos(id){

  const APIModelos = fetch(`https://parallelum.com.br/fipe/api/v1/motos/marcas/${id}/modelos`)
    .then((respostaDoServer) => {
      return respostaDoServer.json();
    })

    return APIModelos;
}


function anos(idMarca, idModelo){

  const APIAnos = fetch(`https://parallelum.com.br/fipe/api/v1/motos/marcas/${idMarca}/modelos/${idModelo}/anos`)
    .then((respostaDoServer) => {
      return respostaDoServer.json();
    })

    return APIAnos;
}

function buscaDadosVeiculo(idMarca, idModelo, idAno){

  const dados = fetch(`https://parallelum.com.br/fipe/api/v1/motos/marcas/${idMarca}/modelos/${idModelo}/anos/${idAno}`)
  .then((respostaDoServer) => {
    return respostaDoServer.json();
  })

  return dados;

}

export default function HomeVeiculos({dadosAPI}) {

  const [marcaSelecionada, alteraMarcaSelecionada] = React.useState('');

  const [nomesModelos, alteraNomesModelos]= React.useState([]);
  const [modeloSelecionado, alteraModeloSelecionado] = React.useState('');

  const [anosModelos, alteraAnosModelos] = React.useState([]);
  const [AnoSelecionado, alteraAnoSelecionado] = React.useState('');

  const [dadosVeiculo, alteraDadosVeiculos] = React.useState({});


  const trocaMarcas = (event) => {
      alteraMarcaSelecionada(event.target.value);
    };

  const trocaModelos = (event) => {
    alteraModeloSelecionado(event.target.value);
  }

  const trocaAno = (event) => {
    alteraAnoSelecionado(event.target.value);
  }

  useEffect(()=>{
    modelos(marcaSelecionada)
      .then(({modelos})=>{
        alteraNomesModelos(modelos);
      })
  },[marcaSelecionada])

  useEffect(()=>{
    anos(marcaSelecionada, modeloSelecionado)
      .then((anos)=>{
        alteraAnosModelos(anos);
      })
  },[modeloSelecionado])


  useEffect(()=>{
    buscaDadosVeiculo(marcaSelecionada, modeloSelecionado, AnoSelecionado)
      .then((dados)=>{
        alteraDadosVeiculos(dados);
      })
  },[AnoSelecionado])

  return (
    <div class="container">
              
    <div class="box">

      <h1>Tabela Fipe</h1>
      <a href="https://tabela-fipe-lime.vercel.app/veiculos/carro" ><Carro class="icones" /></a>
      <a href="https://tabela-fipe-lime.vercel.app/veiculos/caminhao"><Caminhao class="icones" /></a>
      <a href="https://tabela-fipe-lime.vercel.app/veiculos/moto"><Moto class="icones" /></a>
      
      <br></br>
      <Select 
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={marcaSelecionada}
        onChange={trocaMarcas}

        label="modelo"
      >
          <MenuItem value=""><em>Selecione</em></MenuItem>
        {dadosAPI.map(({nome, codigo})=>(
          <MenuItem key={codigo} value={codigo}>{nome}</MenuItem>
  
        ))}
        </Select>

        <Select 
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={modeloSelecionado}
        onChange={trocaModelos}

        label="modelo"
      >
          <MenuItem value=""><em>Selecione</em></MenuItem>
        {nomesModelos.map(({nome, codigo})=>(
          <MenuItem key={codigo} value={codigo}>{nome}</MenuItem>
  
        ))}
        </Select>

        <Select 
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={AnoSelecionado}
        onChange={trocaAno}

        label="modelo"
      >
          <MenuItem value=""><em>Selecione</em></MenuItem>
        {anosModelos.map(({nome, codigo})=>(
          <MenuItem key={codigo} value={codigo}>{nome}</MenuItem>
  
        ))}
        </Select>
  
        {Object.keys(dadosVeiculo).length > 0 && (

          <p>{JSON.stringify(dadosVeiculo)}</p>

        )}
      </div>
    </div>      
  )
}

export async function getStaticProps(){

  const API = await fetch('https://parallelum.com.br/fipe/api/v1/motos/marcas')
    .then((respostaDoServer) => {
      return respostaDoServer.json();
    });

  return {
    props: {
      dadosAPI: API
    },
  }
}

import React from "react"
import { Carro } from "../src/icones/carro"
import { Caminhao } from "../src/icones/caminhao"
import { Moto } from "../src/icones/moto"

export default function Home() {
  
  return (
    <div class="container">
              
      <div class="box">
      <h1>Tabela Fipe</h1>
        <a href="http://localhost:3000/veiculos/carro" ><Carro class="icones" /></a>
        <a href="http://localhost:3000/veiculos/caminhao"><Caminhao class="icones" /></a>
        <a href="http://localhost:3000/veiculos/moto"><Moto class="icones" /></a>
      </div>
    </div>
  )
}

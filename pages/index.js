import React from "react"
import { Carro } from "../src/icones/carro"
import { Caminhao } from "../src/icones/caminhao"
import { Moto } from "../src/icones/moto"

export default function Home() {
  
  return (
    <div class="container">
              
      <div class="box">
      <h1>Tabela Fipe</h1>
        <a href="https://tabela-fipe-lime.vercel.app/veiculos/carro" ><Carro class="icones" /></a>
        <a href="https://tabela-fipe-lime.vercel.app/veiculos/caminhao"><Caminhao class="icones" /></a>
        <a href="https://tabela-fipe-lime.vercel.app/veiculos/moto"><Moto class="icones" /></a>
      </div>
    </div>
  )
}

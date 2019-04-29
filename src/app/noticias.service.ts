import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  autores = ["Paulo Sérgio", "Rodrigo", "Carlos", "Lucas"];
  salvo = [];
  publicado = false;
  visualizar = {};

  listaAutores(){
    return this.autores
  };

  salvar(autor, noticia){
    let a = {
      'id': Math.random(),
      'autor': autor,
      'noticia': noticia,
      'publicado': false,
      'views': 0
    }
    this.salvo.push(a);
  }

  listaSalva(){
    return this.salvo;
  }

  publicarNoticia(valor){
    for(let x of this.salvo){
      if (x.id === valor.id){
        x.publicado = true;
      }
    }
  }

  verNoticiaPublicada(valor){
    for(let x of this.salvo){
      if (x.id === valor.id){
        x.views++
        this.visualizar = {
          'autor': x.autor,
          'noticia': x.noticia
        }
      }
    }
  }

  noticasPorAutor(){
    let estatisticas = [];
    let aux = {};
    for (let x of this.autores){
      aux[x] = estatisticas.length;
      estatisticas.push({autor: x, valor: 0})
    }
    for (let z of this.salvo){
      if( z.publicado === true){
        estatisticas[aux[z.autor]].valor++;
      }
    }
    return estatisticas
  }

  AutorMaisPublicou(){
    let nome = '';
    let quant = 0;
    for(let x of this.noticasPorAutor()){
      if (x.valor > quant){
        nome = x.autor;
        quant = x.valor;
      }
    }
    return nome
  }

  quantidadeDeViws(){
    return this.salvo.sort(function(a,b){return b.views-a.views})
  }

  constructor() { }
}

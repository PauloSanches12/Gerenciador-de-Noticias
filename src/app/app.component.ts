import { Component } from '@angular/core';
import { NoticiasService } from './noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tela = "inicial";
  autor = null;
  noticia = null;

  avancarPublicacao(){
    this.tela = "publicar";
  }

  avancarCadastro(){
    this.tela = "cadastro";
    this.autor = null,
    this.noticia = null
  }

  avancarEstatisticas(){
    this.tela = "estatisticas";
  }

  salvarNoticia(){
    this.tela = "publicar";
    this.service.salvar(this.autor, this.noticia);
  }

  verNoticiaPublicada(valor){
    this.service.verNoticiaPublicada(valor)
    this.tela = "visualizar";
  }


  constructor(private service: NoticiasService){

  }


}

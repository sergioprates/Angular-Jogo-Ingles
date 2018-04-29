import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  
  @Input() public tentativas: number;

  public Coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  constructor() { }

private atualizaCoracoes() {  
  if (this.tentativas != this.Coracoes.length) {
    console.log(this.tentativas);
    let indice = this.Coracoes.length - this.tentativas;
    this.Coracoes[indice - 1].cheio = false;
  }
}

  ngOnChanges(): void {
    this.atualizaCoracoes();
    
  }
  ngOnInit() {
  }

}

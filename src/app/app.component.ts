import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';
  
  public tipoEncerramento: string;
  /**
   * encerrarJogo
tipo: string : void  */
  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    this.tipoEncerramento = tipo;
    console.log("O jogador: " + tipo);
  }

  public jogoEmAndamento: boolean = true;

  public reiniciarJogo(): void{
    this.jogoEmAndamento = true;
    this.tipoEncerramento = undefined;
  }
}

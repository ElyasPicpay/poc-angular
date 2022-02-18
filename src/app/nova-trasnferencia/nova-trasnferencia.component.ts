import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';

import { TranferenciaService } from '../services/tranferencia.service';

@Component({
  selector: 'app-nova-trasnferencia',
  templateUrl: './nova-trasnferencia.component.html',
  styleUrls: ['./nova-trasnferencia.component.scss'],
})
export class NovaTrasnferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  constructor(private service: TranferenciaService) {}

  ngOnInit(): void {}

  transferir() {
    console.log('Solicitada nova transferência');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adcionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  @Input() titulo = 'Hola';
  @Input() color = 'rojo';

  private loading = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cd.detach();
    // 100 propiedades
    this.titulo = 'jkljk';
    this.color = 'verde';
    //....
    this.cd.reattach();
  }
}

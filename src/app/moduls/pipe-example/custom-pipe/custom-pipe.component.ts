import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {
  cars: any[] = ['BMV', 'Nissan', 'KIA', 'CHEVROLET']
  public phones = ["iPhone 7", "LG G 5", "Honor 9", "Idol S4", "Nexus 6P"];
  phone: Observable<string> | undefined;
  constructor() {
    this.showPhones();
  }
  async ngOnInit(): Promise<void> {
    //this.phone?.toPromise().then(a => { })
    const result = await this.showResult()
    console.log(result)
  }
  async showResult() {
    return this.phone;
  }
  showPhones() {
    this.phone = interval(1000).pipe(map((i: number) => this.phones[i]));

  }

}

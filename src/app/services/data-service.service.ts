import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {
  private data: string[] = ['Apple IPhone XR', 'Samsung Galaxy S9', 'Nokia S9'];
  constructor(private logService: LogService) { }
  getData(): string[] {
    this.logService.information('malumotlar olindi...')
    return this.data;
  }
  addData(name: string) {
    this.logService.information('Yangi malumot qushildi...')
    this.data.push(name)
  }
}

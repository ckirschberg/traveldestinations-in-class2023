import { Injectable } from '@nestjs/common';

@Injectable() // Makes DI work
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

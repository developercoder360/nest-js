import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }



  getHello2(): string {
    return 'lorem ipsum dolor sit amet';
  }


}

import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {

    getCats() : string {
        return "We are the cats";
    }

}

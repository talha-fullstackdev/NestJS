/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
      getCategory(){
        return {
            categories:{
                one:"mob-dev",
                two:"frontend-dev",
                three:"backend-dev",
                four:"fullstack-dev",
                five:"AI engineer",
                six:"project manager",
                seven :"human resource"
            }
        }
    }
}

/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()

export class AddressService {
  
    getAddress(){
        const addressDetails = {
        id:1001,
        name:"Talha Nawaz",
        age:25,
        gender:"male",
        contact:"03480951759",
        address:{
            current_residence :"House #2 street 7 madina colony islamnagr walton road opposite toyota cant motors",
            permanent:"house # 878 toheed colony jhani ,near PC hotel abbottabad"
        }

    }
        return addressDetails
    }
}

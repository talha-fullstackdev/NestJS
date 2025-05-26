/* eslint-disable prettier/prettier */
import { Controller ,Get} from '@nestjs/common';

@Controller('address')
export class AddressController {
    @Get()
    getResponse(){
        return "address page"
    }
}

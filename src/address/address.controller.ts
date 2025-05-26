/* eslint-disable prettier/prettier */
import { Controller ,Get} from '@nestjs/common';
import { AddressService } from './address.service';
@Controller('address')
export class AddressController {
    constructor(private readonly addressService :AddressService){} //automatically inject AddressService dependancy here . we also have to provide empty brackets like these in the constructor
    @Get()
    getAddress(){
        return this.addressService.getAddress()
    }
}

/* eslint-disable prettier/prettier */
//// in service we like actual bussiness logic of http request
import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';

@Injectable()
export class CustomerService {
    private customers:Customer[] = []
}

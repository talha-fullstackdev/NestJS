/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';

@Module({
  controllers: [AddressController],
  providers: [AddressService]
})
export class AddressModule {}

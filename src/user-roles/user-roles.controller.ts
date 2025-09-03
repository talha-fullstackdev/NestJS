/* eslint-disable prettier/prettier */
import { Controller,UseGuards,Get} from '@nestjs/common';
import { Roles } from 'src/guards/roles/roles.decorator';
import { Role } from 'src/guards/roles/roles.enums';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {
    @Get("admin-data")
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAdminData(){
        return {msg:"only admin can access"}
    }
    @Get("user-data")
    getUserData(){
          return {msg:"any one can access data"}
    }
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database.module';
import { OrganizationModule } from './organization/organization.module';
import { SimulatedModule } from './simulated/simulated.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    DatabaseModule,
    SimulatedModule,
    OrganizationModule
  ],
})
export class AppModule {}

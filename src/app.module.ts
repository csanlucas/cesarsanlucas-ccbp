import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database.module';
import { OrganizationModule } from './organization/organization.module';
import { SimulatedModule } from './simulated/simulated.module';
import { RepositoryModule } from './repository/repository.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    DatabaseModule,
    SimulatedModule,
    OrganizationModule,
    RepositoryModule
  ],
})
export class AppModule {}

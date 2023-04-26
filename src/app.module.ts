import { Module } from '@nestjs/common';

import { SimulatedModule } from './simulated/simulated.module';

@Module({
  imports: [SimulatedModule],
})
export class AppModule {}

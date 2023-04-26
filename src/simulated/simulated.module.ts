import { Module } from '@nestjs/common';

import { SimulatedController } from './simulated.controller';
import { SimulatedService } from './simulated.service';

@Module({
    controllers: [SimulatedController],
    providers: [SimulatedService]
})
export class SimulatedModule {}

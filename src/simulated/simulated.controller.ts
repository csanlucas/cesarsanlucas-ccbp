import { Controller, Get } from '@nestjs/common';

import {SimulatedService} from './simulated.service';

@Controller('exercise1')
export class SimulatedController {
    constructor(private readonly simulatedService: SimulatedService) {}

    @Get()
    getRepositories() {
        return this.simulatedService.getRepositories();
    }
}

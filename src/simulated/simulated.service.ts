import { Injectable } from '@nestjs/common';

import {repositories} from './constants';
import { Repository } from './types';

@Injectable()
export class SimulatedService {
    private repositories: Repository[] = repositories
    getRepositories() {
        return this.repositories;
    }
}

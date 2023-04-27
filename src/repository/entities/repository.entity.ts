import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';

import Tribe from './tribe.entity';
import Metric from './metric.entity';
import { NAME_ATTR_MAX_LENGTH, REPO_STATE_TYPE, REPO_STATUS_TYPE } from './constants';


@Entity()
class Repository {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({type: 'varchar', length: NAME_ATTR_MAX_LENGTH})
    public name: string;

    @Column({type: 'enum', enum: REPO_STATE_TYPE})
    public state: REPO_STATE_TYPE;

    @Column({type: 'enum', enum: REPO_STATUS_TYPE})
    public status: REPO_STATUS_TYPE;

    @Column({type: 'timestamptz', default: () => 'NOW()'})
    public createTime: Date;

    @ManyToOne(() => Tribe)
    public tribe: Tribe

    @OneToOne(() => Metric, (metric) => metric.repository)
    public metric: Metric
}

export default Repository;

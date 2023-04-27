import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import Organization from '../../organization/entities/organization.entity';
import { NAME_ATTR_MAX_LENGTH } from './constants';

@Entity()
class Tribe {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({type: 'varchar', length: NAME_ATTR_MAX_LENGTH})
    public name: string;

    @Column({type: 'int'})
    public status: number;

    @ManyToOne(() => Organization)
    public organization: Organization
}
export default Tribe;

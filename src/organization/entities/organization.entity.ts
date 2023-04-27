import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { NAME_ATTR_MAX_LENGTH } from './constants';

@Entity()
class Organization {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({type: 'varchar', length: NAME_ATTR_MAX_LENGTH})
    public name: string;

    @Column({type: 'int'})
    public status: number

}
export default Organization

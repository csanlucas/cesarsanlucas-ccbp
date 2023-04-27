import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Organization {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({type: 'varchar', length: 50})
    public name: string;

    @Column({type: 'int'})
    public status: number

}
export default Organization

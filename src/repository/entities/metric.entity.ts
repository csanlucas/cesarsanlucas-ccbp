import { Column, Entity, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';

import Repository from './repository.entity';


@Entity()
class Metric {
    @PrimaryColumn()
    public id: number;

    @OneToOne(() => Repository)
    @JoinColumn({name: 'id'})
    public repository: Repository

    @Column({type: 'decimal', precision: 5, scale: 2, default: 0.0})
    public coverage: number;

    @Column({type: 'int'})
    public bugs: number;

    @Column({type: 'int'})
    public vulnerabilities: number;

    @Column({type: 'int'})
    public hotspot: number;

    @Column({type: 'int'})
    public codeSmells: number;
}

export default Metric;

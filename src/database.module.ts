import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'cockroachdb',
        host: configService.get('COCKROACH_HOST'),
        port: configService.get('COCKROACH_PORT'),
        username: configService.get('COCKROACH_USER'),
        password: configService.get('COCKROACH_PASSWORD'),
        database: configService.get('COCKROACH_DB'),
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        ssl: true,
        synchronize: true, //Por simplicidad, en prod debe set a false
      }),
    }),
  ],
})

export class DatabaseModule {}

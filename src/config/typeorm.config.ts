import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5000,
  username: 'postgres',
  password: 'Naba@2001',
  database: 'nodecrud',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};

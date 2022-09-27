import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'wartegaril24',
  database: 'books_api',
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: true,
};

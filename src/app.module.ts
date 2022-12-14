import { TypeOrmConfig } from './config/typeorm.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';

@Module({
  imports: [BooksModule, TypeOrmModule.forRoot(TypeOrmConfig)],
})
export class AppModule {}

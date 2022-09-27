import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ) {}
  create(createBookDto: CreateBookDto) {
    const newBook = this.booksRepository.create(createBookDto);
    return this.booksRepository.save(newBook);
  }

  findAll() {
    return this.booksRepository.find();
  }

  // findOne(id: string) {
  //   return this.booksRepository.findOne({ where: { id } });
  // }

  findByTitle(title: string) {
    return this.booksRepository.findOne({ where: { title } });
  }

  async update(title: string, updateBookDto: UpdateBookDto) {
    const book = await this.findByTitle(title);
    book.title = updateBookDto.title;
    book.author = updateBookDto.author;
    book.year = updateBookDto.year;

    return this.booksRepository.save(book);
  }

  async remove(title: string) {
    const book = await this.findByTitle(title);
    return this.booksRepository.remove(book);
  }
}

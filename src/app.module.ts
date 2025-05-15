import { Module } from '@nestjs/common';

import { BooksModule } from './books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}

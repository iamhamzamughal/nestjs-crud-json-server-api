import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/books';
@Injectable()
export class BooksService {

  async create(createBook: CreateBookDto):Promise<Book> {
   const res= await axios.post(BASE_URL,createBook)
   return res.data;
  }

  async findAll():Promise<Book[]> {
   const res= await axios.get(BASE_URL)
   return res.data;
  }

  async findOne(id: string):Promise<Book> {
   const res= await axios.get(`${BASE_URL}/${id}`)
   return res.data;
  }

  async update(id: string, updateBook: UpdateBookDto): Promise<Book> {
    const res= await axios.patch(`${BASE_URL}/${id}`,updateBook)
    return res.data;
  }

  async remove(id: string):Promise<Book> {
     const res= await axios.delete(`${BASE_URL}/${id}`)
   return res.data;
  }
}

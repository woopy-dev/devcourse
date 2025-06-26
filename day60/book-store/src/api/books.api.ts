import { Book } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface FetchBooksParams {
  category_id?: number;
  news?: boolean;
  currentPage?: number;
  limit: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
  try {
    // const response = await httpClient.get<FetchBooksResponse>("/books", { params });
    // return response.data;
    const mockBooks: Book[] = [
      { id: 1, title: "책 제목 1", img: 1, category_id: 1, form: "종이책", isbn: "123-456-789", summary: "요약 1", detail: "상세 1", author: "저자 1", pages: 100, contents: "내용 1", price: 10000, likes: 10, pubDate: "2023-01-01" },
      { id: 2, title: "책 제목 2", img: 2, category_id: 1, form: "종이책", isbn: "123-456-790", summary: "요약 2", detail: "상세 2", author: "저자 2", pages: 200, contents: "내용 2", price: 20000, likes: 20, pubDate: "2023-01-02" },
      { id: 3, title: "책 제목 3", img: 3, category_id: 1, form: "종이책", isbn: "123-456-791", summary: "요약 3", detail: "상세 3", author: "저자 3", pages: 300, contents: "내용 3", price: 30000, likes: 30, pubDate: "2023-01-03" },
      { id: 4, title: "책 제목 4", img: 4, category_id: 1, form: "종이책", isbn: "123-456-792", summary: "요약 4", detail: "상세 4", author: "저자 4", pages: 400, contents: "내용 4", price: 40000, likes: 40, pubDate: "2023-01-04" },
      { id: 5, title: "책 제목 5", img: 5, category_id: 1, form: "종이책", isbn: "123-456-793", summary: "요약 5", detail: "상세 5", author: "저자 5", pages: 500, contents: "내용 5", price: 50000, likes: 50, pubDate: "2023-01-05" },
      { id: 6, title: "책 제목 6", img: 6, category_id: 1, form: "종이책", isbn: "123-456-794", summary: "요약 6", detail: "상세 6", author: "저자 6", pages: 600, contents: "내용 6", price: 60000, likes: 60, pubDate: "2023-01-06" },
      { id: 7, title: "책 제목 7", img: 7, category_id: 1, form: "종이책", isbn: "123-456-795", summary: "요약 7", detail: "상세 7", author: "저자 7", pages: 700, contents: "내용 7", price: 70000, likes: 70, pubDate: "2023-01-07" },
      { id: 8, title: "책 제목 8", img: 8, category_id: 1, form: "종이책", isbn: "123-456-796", summary: "요약 8", detail: "상세 8", author: "저자 8", pages: 800, contents: "내용 8", price: 80000, likes: 80, pubDate: "2023-01-08" },
    ];
    const mockPagination = {
      totalCount: 20,
      currentPage: params.currentPage || 1,
    };
    return { books: mockBooks, pagination: mockPagination };
  } catch (error) {
    return {
      books: [],
      pagination: {
        totalCount: 0,
        currentPage: 1
      }
    }
  }
}
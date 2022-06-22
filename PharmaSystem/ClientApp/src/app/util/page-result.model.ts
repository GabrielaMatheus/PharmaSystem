export default class PageResult<T> {
    constructor(
      public results: T[] = []
    ) {}
  
    // get offset(): number {
    //   return (this.curPage - 1) * this.pageSize;
    // }
  
    update(response: PageResult<T>) {
        
      this.results = response.results;
      
    }
  }
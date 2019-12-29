export default class Book{
    
    constructor(googleBook){
        let listPrice = googleBook.saleInfo.listPrice;
        let volumeInfo = googleBook.volumeInfo;

        this.id = googleBook.id || null;
        this.title = volumeInfo.title || '';
        this.subtitle = volumeInfo.subtitle || '';
        this.authors = volumeInfo.authors || [];
        this.publishedDate = volumeInfo.publishedDate || null;
        this.description = volumeInfo.description || '';
        this.pageCount = volumeInfo.pageCount || null;
        this.categories = volumeInfo.categories || [];
        this.thumbnail = volumeInfo.imageLinks ? (volumeInfo.imageLinks.thumbnail || volumeInfo.imageLinks.smallThumbnail || null) : null;
        this.language = volumeInfo.language || '';
        this.listPrice = listPrice ? {amount: listPrice.amount,currencyCode:listPrice.currencyCode,isOnSale:true} : {isOnSale:false}
    }
}

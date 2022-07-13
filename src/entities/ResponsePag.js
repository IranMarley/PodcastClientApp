class ResponsePag {
    constructor(pagApi) {
        this.pageNumber = pagApi.pageNumber;
        this.pageSize = pagApi.pageSize;
        this.totalPages = pagApi.totalPages;
        this.totalRecords = pagApi.totalRecords;
        this.data = pagApi.data;
    }
}

export { ResponsePag };
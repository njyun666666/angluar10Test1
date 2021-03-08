export class ResponseModel<T> {
    code: number;
    message: string;
    timestamp: number;
    data?: T | any;
}

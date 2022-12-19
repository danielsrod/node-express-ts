export class DefaultAppSuccess {
    public readonly status: boolean;
    public readonly message: string;
    public readonly data: any;

    constructor(message: string, data: any = []) {
        this.status = true;
        this.message = message;
        this.data = data;
    }
}

export class DefaultAppError {
    public readonly status: boolean;
    public readonly message: string;
    public readonly data: any;

    constructor(message: string, data: any = []) {
        this.status = false;
        this.message = message;
        this.data = data;
    }
}

import Status from "../model/Status.js";

export class StatusService {
    constructor() {
        this.status = Status;
    }

    getStatus = async (info) => {
        const status = await this.status.findOne(info);
        return status;
    }
}
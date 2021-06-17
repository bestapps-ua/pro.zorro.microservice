'use strict';

class ApiModel {

    private _broker: any;
    private _serviceName: string;


    constructor(data: any){
      this.broker = data.broker;
      this.serviceName = data.serviceName;

    }

    get broker(): any {
        return this._broker;
    }

    set broker(value: any) {
        this._broker = value;
    }


    get serviceName(): string {
        return this._serviceName;
    }

    set serviceName(value: string) {
        this._serviceName = value;
    }

}

export default ApiModel;

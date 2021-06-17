'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class ApiModel {
    constructor(data) {
        this.broker = data.broker;
        this.serviceName = data.serviceName;
    }
    get broker() {
        return this._broker;
    }
    set broker(value) {
        this._broker = value;
    }
    get serviceName() {
        return this._serviceName;
    }
    set serviceName(value) {
        this._serviceName = value;
    }
}
exports.default = ApiModel;
//# sourceMappingURL=api_model.js.map
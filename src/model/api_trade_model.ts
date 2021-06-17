'use strict';
import ApiModel from './api_model';

class ApiTradeModel extends ApiModel {


    constructor(data: any){
      super(data);
    }

    async scanPage(edrpou: string, page: string): Promise<any> {
        let data;
        try {
            data = await this.broker.call(this.serviceName+".scanPage", {
                edrpou,
                page,
            });

        } catch (err) {
            console.log('[err scanPage]', edrpou, page, err);
        }
        return data;
    }

}

export default ApiTradeModel;

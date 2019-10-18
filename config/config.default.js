'use strict';

/**
 * egg-wow-response default config
 * @author Ajuan <979703986@qq.com>
 * @member Config#validate
 * @property {String} SOME_KEY - some description
 */
exports.response = {
    callbackSuccess: ({ code, data, msg }) => ({ code, data, msg }),
    callbackError: ({ code, data, msg }) => ({ code, data, msg }),
    successCode: 'S00000',
    errorCode: 'F99999',
    errorMsgHock: (data) => data.msg || data.message || JSON.stringify(data),
    codes: {
        S00000: '操作成功',
        F99999: '操作失败',
        F401: 'token失效',
    },
};

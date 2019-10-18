'use strict';

module.exports = {
    respSuccess(options, config = {}) {
        let {
            app,
            logger,
        } = this;
        const {
            callbackSuccess,
            successCode,
            codes,
        } = Object.assign(config, app.config.response);
        const isObjectOptions = Object.prototype.toString.apply(options) === '[object Object]';
        let {
            code = successCode,
            data = options,
            msg = codes[successCode],
            status,
        } = isObjectOptions
            ? options
            : {};
        status && (this.status = status);
        this.body = callbackSuccess({
            data,
            code,
            msg,
        });
    },
    respError(options, config = {}) {
        let {
            app,
            logger,
        } = this;
        const {
            codes,
            errorCode,
            callbackError,
            errorMsgHock,
        } = Object.assign(config, app.config.response);
        const stringOptions = Object.prototype.toString.apply(options);
        const isObjectOptions = stringOptions === '[object Object]';
        const isErrorOptions = stringOptions === '[object Error]';
        let {
            code = codes[options] ? options : errorCode,
            data = null,
            status,
        } = isObjectOptions
            ? options
            : {};
        let msg = isObjectOptions
            ? errorMsgHock(options)
            : isErrorOptions
                ? options.toString()
                : codes[options]
                    ? codes[code]
                    : options;
        status && (this.status = status);
        this.body = callbackError({
            code,
            data,
            msg,
        });
    },
};

export default class Validator {

    private _validator: any;

    public constructor(validate: any) {
        this._validator = validate;
        return this._validator;
    }
}

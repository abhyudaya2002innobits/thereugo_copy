import { check, param } from 'express-validator'
import { GlobalValidator } from '../../../common/validator/validator'

export class PrefValidator extends GlobalValidator {
    constructor() {
        super({
            create: [
                check('entityKey').trim().
                    notEmpty().withMessage(`Entity Key is required.`),

                check('entityValue').trim().
                    notEmpty().withMessage("Entity value is required")
            ],
            getById:
                [
                    param('preferenceId').trim().isUUID().withMessage("Preference Id has Invalid Format."),
                ],

            delete:
                [
                    param('preferenceId').trim().isUUID().withMessage("Preference Id has Invalid Format."),
                ],
        })
    }
}

export default new PrefValidator() 
import { check, param } from 'express-validator'
import { GlobalValidator } from '../../../common/validator/validator'

export class Authvalidate extends GlobalValidator {
    constructor() {
        super({
            login: [
                check('email').trim().
                    notEmpty().withMessage(`e-mail is required.`).
                    isEmail().withMessage(`Enter valid email address.`),

                check('password').trim().
                    notEmpty().withMessage("Password is required").
                    not().isIn(['123', 'password', 'god']).withMessage('Do not use a common word as the password.').
                    isLength({ min: 8, max: 20 }).withMessage('Password should be minimum of 8 digits.').
                    matches(/\d/).withMessage('Must contain a number, Special character.'),
            ],
            checkEmail: [
                check('email').trim().
                    notEmpty().withMessage(`e-mail is required.`).
                    isEmail().withMessage(`Enter valid email address.`),
            ]
        })
    }
}

export default new Authvalidate() 
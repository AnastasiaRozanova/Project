import React, { Component } from 'react'
import './Contacts.scss'

import me from '../../assets/me.jpg'

const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const phoneRegex = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    })

    Object.values(rest).forEach(val => {
        val === null && (valid = false)
    })

    return valid;
}


class Contacts extends Component {
    state = {
        firstName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        visable: false,
        disabled: true,
        formErrors: {
            firstName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        if (formValid(this.state)) {
            const serviceID = 'mail_ru';
            const templateId = 'anastasiatest'
            const userId = 'user_tcXHoeYmYYl30DxZGzDbZ'
            this.sendFeedback(serviceID, templateId, { message_html: this.state.message, subject_html: this.state.subject, phone_html: this.state.phone, from_name: this.state.firstName, from_email: this.state.email, to_name: 'Anastasia' }, userId)
            this.setState({
                firstName: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                visable: true
            })
        }
    }

    sendFeedback(serviceID, templateId, variables, userId) {
        window.emailjs.send(
            serviceID, templateId,
            variables, userId
        ).then(res => {
            console.log(res.data, 'Данные успешно отправлены!')
        })
            .catch(err => {
                console.error(err, 'Данные не удалось отправить!')
            })
    }

    handleChange = e => {
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 3 && value.length > 0
                    ? 'Необходимо ввести минимум 3 символа'
                    : '';
                break;
            case 'email':
                formErrors.email = emailRegex.test(value) && value.length > 0
                    ? ''
                    : 'Некорректный email';
                break;
            case 'phone':
                formErrors.phone = phoneRegex.test(value) && value.length > 0
                    ? ''
                    : 'Некорректный телефон';
                break;
            case 'subject':
                formErrors.subject = value === '0'
                    ? 'Выберите тему'
                    : '';
                break;
            case 'message':
                formErrors.message = value.length < 12 && value.length > 0
                    ? 'Необходимо ввести минимум 12 символов'
                    : '';
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value })

        this.btnHandler(this.state.formErrors)

    }

    btnHandler = (errors) => {
        let disabled = this.state.disabled
        console.log(this.state.disabled)
        if (errors.firstName === '' && errors.email === '' && errors.phone === '' && errors.subject === '' && errors.message === '') {
            disabled = false
            this.setState({ disabled })
        }
    }

    render() {

        const { formErrors } = this.state;

        return (
            <div className="wrapper__contacts">
                <div className="container__left">
                    <div className='foto'>
                        <img src={me} alt='foto' />
                    </div>
                    <div className='info'>
                        <p><strong>Вы можете связаться <span>со мной:</span></strong></p>
                        <ul>
                            <li><strong>Контактный номер:</strong>&nbsp;<span>8-960-102-40-58</span></li>
                            <li><strong>Почтовый адрес:</strong>&nbsp;<span>abv789@inbox.ru</span> </li>
                        </ul>
                    </div>
                </div>

                <form className="container__right" onSubmit={this.handleSubmit}>

                    <div className="form__group">
                        <label htmlFor="input">Ваше имя:</label>
                        <input
                            name="firstName"
                            type="text"
                            id="input"
                            className={formErrors.firstName.length > 0 ? 'form__control error' : 'form__control'}
                            placeholder="Как вас зовут?"
                            onChange={this.handleChange}
                            value={this.state.firstName}
                        />
                        {formErrors.firstName.length > 0 && (
                            <span className="errorMessage">{formErrors.firstName}</span>
                        )}
                    </div>
                    <div className="form__group">
                        <label htmlFor="input-1">Ваш email:</label>
                        <input
                            name="email"
                            type="email"
                            id="input-1"
                            className={formErrors.email.length > 0 ? 'form__control error' : 'form__control'}
                            placeholder="Введите ваш email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                        {formErrors.email.length > 0 && (
                            <span className="errorMessage">{formErrors.email}</span>
                        )}
                    </div>

                    <div className="form__group">
                        <label htmlFor="input-2">Телефон для связи:</label>
                        <input
                            name="phone"
                            type="number"
                            className={formErrors.phone.length > 0 ? 'form__control error' : 'form__control'}
                            placeholder="Введите ваш номер"
                            onChange={this.handleChange}
                            value={this.state.phone}
                        />
                        {formErrors.phone.length > 0 && (
                            <span className="errorMessage">{formErrors.phone}</span>
                        )}
                    </div>

                    <div className="form__group">
                        <label htmlFor="input-3">Тема обращения:</label>
                        <select
                            name="subject"
                            className={formErrors.subject.length > 0 ? 'form__control error' : 'form__control'}
                            onChange={this.handleChange}
                            value={this.state.subject}
                        >
                            <option value="0">Выберите тему</option>
                            <option value="Вопросы делового сотрудничества">Вопросы делового сотрудничества</option>
                            <option value="Личное обращение">Личное обращение</option>
                            <option value="Оставить отзыв">Оставить отзыв</option>
                        </select>
                        {formErrors.subject.length > 0 && (
                            <span className="errorMessage">{formErrors.subject}</span>
                        )}
                    </div>

                    <div className="form__group">
                        <label htmlFor="input-4">Ваше обращение:</label>
                        <textarea
                            name="message"
                            className={formErrors.message.length > 0 ? 'form__control error' : 'form__control'}
                            rows="3"
                            placeholder="Введите сообщение"
                            onChange={this.handleChange}
                            value={this.state.message}
                        />
                        {formErrors.message.length > 0 && (
                            <span className="errorMessage">{formErrors.message}</span>
                        )}
                    </div>

                    <div className='button__group'>
                        <button className='button' disabled={this.state.disabled}>Отправить</button>
                    </div>

                </form>

                {this.state.visable && (
                    <div className='popup'>
                        <div className='popup__wrapper'>
                            <div className='popup__container'>
                                <i onClick={() => this.setState({ visable: false })} className='popup__icon'>&#5742;</i>
                                <p><b>Рада видеть Вас на этом сайте!</b></p>
                                <p><b>В ближайшее время</b> обращение будет рассмотрено и <b>Вы получите обратную связь.</b></p>
                            </div>
                        </div>
                    </div>
                )}

            </div >
        )

    }

}

export default Contacts
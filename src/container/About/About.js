import React from 'react'
import './About.scss'
import foto from '../../assets/foto.jpeg'

class About extends React.Component {
    render() {
        return (
            <div className='wrap'>
                <div className='wrapper__left'>
                    <img src={foto} alt='foto' />
                </div>

                <div className='wrapper__right'>
                    <div className='wrapper__info'>
                        <p className="pre-title">Розанова Анастасия Владимировна</p>
                        <p className="par">Всем привет! Рада вас видеть на своей странице и хотела в нескольких словах рассказать о себе. Обучалась в 2008-2014 в Воронежском государственном архитектурно-строительном университете. Более 5 лет работала графическим дизайнером, хорошо владею знаниями пакета Adobe. Сменила сферу деятельности на вэб-разработку. Уровень знания английского - upper-intermediate.</p>
                    </div>
                    <div className='wrapper__table'>
                        <p className="pre-title">My SuperPowers:</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Essentials:</td>
                                    <td>HTML5, CSS3, JavaScript</td>
                                </tr>
                                <tr>
                                    <td>CSS preprocessors:</td>
                                    <td>Sass</td>
                                </tr>
                                <tr>
                                    <td>JavaScript frameworks and JavaScript libraries:</td>
                                    <td>React</td>
                                </tr>
                                <tr>
                                    <td>CSS frameworks and responsive design:</td>
                                    <td>Bootstrap</td>
                                </tr>
                                <tr>
                                    <td>Module builder:</td>
                                    <td>Webpack</td>
                                </tr>
                                <tr>
                                    <td>Soft skills:</td>
                                    <td>Good communication, teamwork, willingness to learn, problem-solving</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
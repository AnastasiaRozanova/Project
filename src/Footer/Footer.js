import React from 'react'
import './Footer.scss'

class Footer extends React.Component {
    render() {
        return (
            <footer className='wrapper-footer'>
                <div className='footer-container'>
                    <div className='footer'>
                        <p>&copy; Все права защищены.</p>
                        <p>Made by Anastasia Rozanova</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './styles.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

export default function Menu(){
    return(
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={logo} alt='FugitaFlix'></img>
            </Link>

            <Button as={Link} className='ButtonLink' to='/cadastro/video'>
                Novo vídeo
            </Button>
        </nav>
    )
}
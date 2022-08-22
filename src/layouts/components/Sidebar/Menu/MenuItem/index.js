import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './MenuItem.module.scss'


const cs = classNames.bind(styles);
const MenuItem = ({ title, to, icon, activeIcon }) => {
    return (
        <NavLink to={to} className={(nav) => cs('menu-items', { active: nav.isActive })}>
            <span className={cs('icon')}>{icon}</span>
            <span className={cs('active-icon')}>{activeIcon}</span>
            <span className={cs('title')}>{title}</span>
        </NavLink>
    )
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired
}
export default MenuItem
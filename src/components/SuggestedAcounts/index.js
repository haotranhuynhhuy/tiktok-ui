import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem'
const cs = classNames.bind(styles)
const SuggestedAccount = ({ label }) => {
    return (
        <div className={cs('wrapper')} >
            <p className={cs('label')}>{label}</p>
            <AccountItem />
            <p className={cs('seeall')}>See all</p>
        </div >
    )
}

SuggestedAccount.propTypes = {
    label: PropTypes.string
}

export default SuggestedAccount
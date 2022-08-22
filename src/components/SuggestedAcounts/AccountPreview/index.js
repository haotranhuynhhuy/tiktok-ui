import React from 'react'

import classNames from 'classnames/bind'
import styles from './AccountPreview.module.scss'
import Button from '../../Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const cs = classNames.bind(styles)
const AccountPreview = () => {
    return (
        <div className={cs('wrapper')}>
            <header className={cs('header')}>
                <img
                    className={cs('avatar')}
                    src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1661310000&x-signature=VirC7XGqm0kg5w%2B%2FX3Y2mbahPdM%3D'
                    alt='' />
                <Button className={cs('follow')} primary>Follow</Button>
            </header>
            <div className={cs('body')}>
                <div>
                    <strong className={cs('nickname')}>haotran</strong>
                    <FontAwesomeIcon className={cs('icon')} icon={faCheckCircle} />
                </div>
                <p className={cs('name')}>Hao Tran</p>
                <p className={cs('analyst')}>
                    <strong className={cs('value')}>8.2M </strong>
                    <span className={cs('label')}>Followers</span>
                    <strong className={cs('value')}>8.2M </strong>
                    <span className={cs('label')}>Likes</span>
                </p>
            </div>
        </div>
    )
}

export default AccountPreview
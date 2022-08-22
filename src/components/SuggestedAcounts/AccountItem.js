
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Tippy from "@tippyjs/react/headless";
import classNames from 'classnames/bind'
import styles from './SuggestedAccounts.module.scss'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Wrapper as PopperWrapper } from '../Popper'
import AccountPreview from './AccountPreview';
const cs = classNames.bind(styles)
const AccountItem = () => {
    const renderReview = (props) => {
        return (
            <div className={cs('preview')} tabIndex='-1' {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                placement='bottom'
                render={renderReview}
                offset={[-20, 0]}
            >
                <div className={cs('account-item')}>
                    <img src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1661310000&x-signature=VirC7XGqm0kg5w%2B%2FX3Y2mbahPdM%3D'
                        alt=''
                    />
                    <div className={cs('account-info')}>
                        <div>
                            <strong className={cs('account-nickname')}>haotran</strong>
                            <FontAwesomeIcon className={cs('account-icon')} icon={faCheckCircle} />
                        </div>
                        <p className={cs('account-name')}>Hao Tran</p>
                    </div>
                </div>
            </Tippy>
        </div>

    )
}

export default AccountItem
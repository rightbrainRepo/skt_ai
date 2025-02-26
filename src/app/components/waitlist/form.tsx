import styles from "@/assets/scss/pages/combined.module.scss";
import React, {FormEvent, useRef, useState} from "react";
import { submitEmail } from '@/app/api/waitlist';
import { isValidEmail } from '@/app/lib/validation';


export default function WaitlistForm() {

    const [email, setEmail] = useState('');

    // modal
    const modalSuccess = useRef<HTMLDialogElement>(null);
    const modalFail = useRef<HTMLDialogElement>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            modalFail.current!.showModal()
            return;
        }

        const isSuccess = await submitEmail(email);

        if (isSuccess) {
            modalSuccess.current!.showModal()
            setEmail('');
        } else {
            alert('Registration failed. Please try again.');
        }
    }


    return <>
        <form className={styles['input-group']} onSubmit={handleSubmit}>
            <div className={styles['input-desc']}>
                <span>Join the waitlist for updates</span> <span>on getting early access to Aster</span>
            </div>
            <div className={styles['input-box']}>
                <input value={email} className={styles['ui-input']} title={'email'}
                       placeholder={'Your Email'} onChange={(e) => setEmail(e.target.value)}/>
                <button type={"submit"} className={styles['btn-input']}>
                    <span className={styles['text']}>Join waitlist</span>
                </button>
            </div>
        </form>
        {/* dialog-wrapper */}
        <dialog className={styles['dialog-wrapper']} ref={modalSuccess} id={'dialogSuccess'}>
            <button className={styles['btn-close']} onClick={() => {
                if (modalSuccess.current === null) return;
                modalSuccess.current.close()
            }}>
                <span className='offscreen'>close alert</span>
            </button>
            <div className={styles['dialog-inner']}>
                <div className={styles['info-guide-wrap']}>
                    <span className={styles['ico-alert-success']}></span>
                    <p className={styles['info-desc']}>Thank you!<br />We’ll send you an email.</p>
                    <p className={styles['sub-desc']}>We will use the collected email addresses solely for advance reservations.</p>

                </div>
            </div>
        </dialog>
        {/* // dialog-wrapper */}

        {/* dialog-wrapper */}
        <dialog className={styles['dialog-wrapper']} ref={modalFail} id={'dialogFail'}>
            <button className={styles['btn-close']} onClick={() => {
                if (modalFail.current === null) return;
                modalFail.current.close()
            }}>
                <span className='offscreen'>close alert</span>
            </button>
            <div className={styles['dialog-inner']}>
                <div className={styles['info-guide-wrap']}>
                    <span className={styles['ico-alert-fail']}></span>
                    <p className={styles['info-desc']}>The email address you entered is invalid.<br />Please try again.
                    </p>
                </div>
            </div>
        </dialog>
        {/* // dialog-wrapper */}
    </>
}
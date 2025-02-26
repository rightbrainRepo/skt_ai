'use client';

import React, {useEffect, useRef, useState} from "react";
import styles from "@/assets/scss/pages/combined.module.scss";

export default function Terms() {
	// rightbrain
	const assetPath = process.env.NEXT_PUBLIC_ASSET_PATH ? process.env.NEXT_PUBLIC_ASSET_PATH : '';
	return (
		<>
			<div className={styles['wrapper']}>
        <header className={`${styles['header-wrapper-term']}`}>
            <h1 className={styles['logo-box']}>
              <a href={`${assetPath}`}>
                <img src={`${assetPath}/images/header_logo_black.svg`} alt="aster logo" className={styles['logo-black']} />
              </a>
            </h1>
        </header>
				{/* // header-wrapper */}

				{/* container-wrapper */}
        <main className={styles['container-wrapper-definition']}>
            <h2 className={styles['definition-title']}>Terms of Use</h2>
            <ol className={styles['definition-list']}>
              <li>
                <div className={styles['definition-list-group']}>
                  <span className={styles['definition-list-num']}>1.</span>
                  <span>Subscription and Payment</span>
                </div>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span className={styles['definition-list-num']}>2.</span>
                  <span>Auto-renewal and Cancellation</span>
                </div>
                <ul>
                  <li>Subscriptions automatically renew for the period specified on the subscription page (monthly if not specified).</li>
                  <li>Renewal charges are made at the current rate.</li>
                  <li>To avoid future charges, cancel your subscription before the renewal date through your account settings or via email.</li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span className={styles['definition-list-num']}>3.</span>
                  <span>Refund Policy</span>
                </div>
                <ul>
                  <li>Payments for service subscriptions are non-refundable unless explicitly stated otherwise.</li>
                  <li>No credits are provided for partial periods of use.</li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span className={styles['definition-list-num']}>4.</span>
                  <span>Privacy</span>
                </div>
                <ul>
                  <li>The Privacy Policy can be found at <a href="#">Perplexity Privacy Policy</a></li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span className={styles['definition-list-num']}>5.</span>
                  <span>Other Key Points</span>
                </div>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span className={styles['definition-list-num']}>6.</span>
                  <span>These Terms were last revised on June 4, 2024.</span>
                </div>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span className={styles['definition-list-num']}>7.</span>
                  <span>Intellectual Property</span>
                </div>
                <ul>
                  <li>Perplexity AI and/or its licensors own the intellectual property rights for all material on the website.</li>
                  <li>Users must not republish, sell, rent, sub-license, reproduce, duplicate, copy, or redistribute content from Perplexity AI Pro without permission.</li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span className={styles['definition-list-num']}>8.</span>
                  <span>User Comments</span>
                </div>
                <ul>
                  <li>Perplexity AI reserves the right to monitor and remove inappropriate comments.</li>
                  <li>Users warrant that they have the right to post comments and that the comments do not infringe on any intellectual property rights or contain unlawful material.</li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span className={styles['definition-list-num']}>9.</span>
                  <span>Hyperlinking and Content Liability</span>
                </div>
                <ul>
                  <li>Certain organizations may link to the website without prior approval.</li>
                  <li>Perplexity AI is not responsible for content appearing on other websites linking to it.</li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span className={styles['definition-list-num']}>10.</span>
                  <span>These Terms of Service govern the use of Perplexity AI's websites, search engine, mobile application, and related services.</span>
                </div>
              </li>
            </ol>
            

        </main>
				{/* // container-wrapper */}

				{/* footer-wrapper */}
				<footer className={styles['footer-wrapper']}>
					<div className={styles['footer-inner']}>
						<div className={styles['footer-left']}>
							<address className={styles['address-info']}>
								<span className={styles['group']}>
									<a href={`${assetPath}/termsofuse`}>Terms of Use</a>
									<a href={`${assetPath}/privacypolicy`}>Privacy Policy</a>
								</span>
								<span className={styles['group']}>
									<span>Contact us</span>
									<a href="mailto:ask@asterapp.ai" type="email">ask@asterapp.ai</a>
								</span>
							</address>
							<p className={styles['copyright-info']}>© 2025 SK TELECOM CO., LTD. ALL RIGHTS RESERVED.</p>
						</div>
						<div className={styles['footer-right']}>
							<div className={styles['logo-box']}>
								<img src={`${assetPath}/images/footer_logo_white.svg`} alt="aster logo" className={styles['logo-white']} />
							</div>
						</div>
					</div>
				</footer>
				{/* // footer-wrapper */}

			</div>
		</>
	);
}

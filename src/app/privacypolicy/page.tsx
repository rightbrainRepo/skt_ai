'use client';

import React, {useEffect, useRef, useState} from "react";
import styles from "@/assets/scss/pages/combined.module.scss";

export default function Terms() {
	// 김재성 : 최종 산출물은 제거 & 이미지 경로도 다 수정해야됨
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
          <h2 className={styles['definition-title']}>Privacy Policy</h2>
          <ol className={styles['definition-list']}>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>1.</span>
                <span>Data Collection and Use</span>
              </div>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>2.</span>
                <span>Perplexity AI collects various types of information, including:</span>
              </div>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>3.</span>
                <span>Contact Information: This includes name, email address, and other contact details. We use this information to provide our services and communicate with users.</span>
              </div>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>4.</span>
                <span>Account Information: This comprises name, username, email, and password. We use this to maintain and secure user accounts.</span>
              </div>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>5.</span>
                <span>Payment Information: Credit or debit card information and billing address are collected through a third-party payment processor to process payments for services</span>
              </div>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>6.</span>
                <span>Usage Data: Information on how users access and use our services, including IP addresses and browser types.</span>
              </div>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>7.</span>
                <span>Data Handling and Security</span>
              </div>
              <ul>
                <li>All sensitive data is encrypted both in transit and at rest.</li>
                <li>Access to personal data is restricted to authorized personnel only.</li>
                <li>Regular audits are conducted to ensure compliance with privacy policies and regulations.</li>
              </ul>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>8.</span>
                <span>User Rights</span>
              </div>
              
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>9.</span>
                <span>Users have the right to:</span>
              </div>
              <ul>
                <li>Access their personal data</li>
                <li>Request corrections to inaccurate or incomplete data</li>
                <li>Request deletion of their personal data (subject to certain exceptions)</li>
              </ul>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>10.</span>
                <span>Data Retention and Deletion</span>
              </div>
              <ul>
                <li>Personal data is retained only as long as necessary for the purposes outlined in the privacy policy.</li>
                <li>Users can request account deletion through the settings page or by contacting support@perplexity.ai.</li>
                <li>Upon account deletion, personal information is typically deleted from servers within 30 days.</li>
              </ul>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>11.</span>
                <span>GDPR Compliance</span>
              </div>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>12.</span>
                <span>For users in the European Union:</span>
              </div>
              <ul>
                <li>Personal data is processed based on user consent, contractual necessity, or legitimate interests.</li>
                <li>Data transfers outside the EU comply with GDPR requirements.</li>
              </ul>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>13.</span>
                <span>Cookies and Tracking</span>
              </div>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>14.</span>
                <span>Cookies and similar technologies are used to track user activity and store certain information.</span>
              </div>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>15.</span>
                <span>Third-Party Services</span>
              </div>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>16.</span>
                <span>No warranties are provided for third-party products or services.</span>
              </div>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>17.</span>
                <span>Changes to Privacy Policy</span>
              </div>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>18.</span>
                <span>Users are encouraged to review the privacy policy regularly for any updates or changes.</span>
              </div>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span className={styles['definition-list-num']}>19.</span>
                <span>For more detailed information or specific inquiries, users can contact Perplexity AI at <a href="mailto:support@perplexity.ai.">support@perplexity.ai.</a></span>
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

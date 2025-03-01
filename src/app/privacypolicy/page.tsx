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
          <h2 className={styles['definition-title']}>Privacy Policy</h2>
          <div className={styles['definition-description']}>
          <p>Global AI Platform Corporation (<span className={styles['underline']}>“we”</span> and its equivalents) respects your privacy and is committed to keeping any information we obtain from you or about you secure. This Privacy Policy describes our practices with respect to Personal Information we collect from or about you when you use our website, applications, and services (collectively, <span className={styles['underline']}>“Services”</span>). (This Privacy Policy does not apply to content that we process on behalf of our enterprise customers)</p>
          <p>Our Services are not intended for, children under 13. We do not knowingly collect Personal Information from children under 13. If you believe that a child under 13 has provided Personal Information to us through our Services, please email us at <a href="mailto:privacy@asterapp.ai">privacy@asterapp.ai</a> Users under 18 must have permission from their parent or guardian to use our Services.</p>
          </div>
          <ul className={styles['definition-list']}>
            <li>
              <div className={styles['definition-list-group']}>
                <span>PERSONAL INFORMATION WE COLLECT</span>
              </div>
              <ul>
                <li>We collect personal information relating to you (<span className={styles['underline']}>“Personal Information”</span>) as follows:</li>
              </ul>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span>Personal information you provide: </span>
              </div>
              <ul>
                <li>We collect Personal Information if you create an account to use our Services or communicate with us as follows:</li>
              </ul>
              <ul className={styles['definition-list-dot']}>
                <li>•	Account Information: When you create an account with us, we will collect information associated with your account, including your name, contact information, account credentials, payment card information, and transaction history (collectively, <span className={styles['underline']}></span>“Account Information”).</li>
                <li>•	Basic contact information such as your name, address, phone number, and email. We use this information to provide services and communicate with you, including sending you information about products or services that may be of interest to you.</li>
                <li>•	User Content: When you use our Services, we collect Personal Information that is included in the your input, file uploads, or feedback that you provide to our Services (<span className={styles['underline']}>“Content”</span>). </li>
                <li>•	Communication Information: If you communicate with us, we collect your name, contact information, and the content of any messages you send (<span className={styles['underline']}>“Communication Information”</span>).</li>
                <li>•	Social Media Information: We sometimes maintain pages on social media sites such as Instagram, Facebook, Medium, Twitter, YouTube and LinkedIn. When you interact with our social media pages, we will collect Personal Information that you elect to provide to us, such as your contact details (collectively, <span className={styles['underline']}>“Social Information”</span>). In addition, the companies that host our social media pages may provide us with aggregate information and analytics about our social media activity.</li>
                <li>•	Other Information You Provide: We collect other information that you may provide to us, such as when you participate in our events or surveys or provide us with information to establish your identity (collectively, <span className={styles['underline']}>“Other Information You Provide”</span>)</li>
              </ul>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span>Personal information we receive automatically from your use of the Services: </span>
              </div>
              <ul>
                <li>When you interact with the Services, we receive the following information about your interactions (<span className={styles['underline']}>“Technical Information”</span>):</li>
              </ul>
              <ul className={styles['definition-list-dot']}>
                <li>•	Log Data: Information that your browser or device automatically sends when you use our Services. Log data includes your Internet Protocol address, browser type and settings, the date and time of your request, and how you interact with our Services.</li>
                <li>•	Usage Data: We may automatically collect information about your use of the Services, such as the types of content that you view or engage with, the features you use and the actions you take, as well as your time zone, country, the dates and times of access, user agent and version, type of computer or mobile device, and your computer connection.</li>
                <li>•	Device Information: Includes name of the device, operating system, device identifiers, and browser you are using. Information collected may depend on the type of device you use and its settings.</li>
                <li>•	Cookies: We use cookies to operate and administer our Services, and improve your experience. A “cookie” is a piece of data sent to your browser by a website you visit and saved on your device. You can set your browser to accept all cookies, to reject all cookies, or to notify you whenever a cookie is offered so that you can decide each time whether to accept it. However, refusing a cookie may in some cases prevent you from using, or negatively affect your access or use of, certain features of our Services. </li>
                <li>•	Analytics: We may use a variety of online analytics products that use cookies to help us analyze how users use our Services and enhance your experience when you use the Services.</li>
              </ul>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span>INFORMATION COLLECTED FROM OTHER SOURCES</span>
              </div>
              <ul>
                <li>We may obtain information about you from external sources, including information we collect directly from third parties and information collected from third parties who choose to share it with us. This information may include:</li>
              </ul>
              <ul className={styles['definition-list-dot']}>
                <li>•	Analytics data received from analytics providers such as Google Analytics.</li>
                <li>•	Information from consumer marketing databases or other data companies to better tailor our advertising and marketing to you.</li>
                <li>•	Information received when you connect your account with a third-party platform, such as Google or Apple, to maintain your account and provide login information.</li>
              </ul>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span>HOW WE USE PERSONAL INFORMATION</span>
              </div>
              <ul>
                <li>We may use Personal Information for the following purposes:</li>
              </ul>
              <ul className={styles['definition-list-dot']}>
                <li>•	To provide, administer, and maintain our Services;</li>
                <li>•	To improve our Services and conduct research;</li>
                <li>•	To communicate with you, including to send you information about our Services and events;</li>
                <li>•	To develop new programs and services;</li>
                <li>•	To prevent fraud, criminal activity, or misuses of our Services, and to protect the security of our IT systems;</li>
                <li>•	To carry out business transfers; and</li>
                <li>•	To comply with legal obligations and legal process and to protect our rights, privacy, safety, or property, and/or that of our affiliates, you, or other third parties.</li>
              </ul>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span>DISCLOSURE OF PERSONAL INFORMATION</span>
              </div>
              <ul>
                <li>In certain circumstances we may provide your Personal Information to third parties without further notice to you, unless required by law:</li>
              </ul>
              <ul className={styles['definition-list-dot']}>
                <li>•	Vendors and Service Providers: To assist us in meeting business operations needs and to perform certain services and functions, we may provide Personal Information to vendors and service providers, including providers of hosting services, customer service vendors, cloud services, email communication software, web analytics services, and other information technology providers, among others. Pursuant to our instructions, these parties will access, process, or store Personal Information only in the course of performing their duties to us.</li>
                <li>•	Business Transfers: If we are involved in strategic transactions, reorganization, bankruptcy, receivership, or transition of service to another provider (collectively, a “Business Transaction”), your Personal Information and other information may be disclosed in the diligence process with counterparties and others assisting with the Business Transaction and transferred to a successor or affiliate as part of that Business Transaction along with other assets.</li>
                <li>•	Legal Requirements: We may share your Personal Information, including information about your interaction with our Services, with government authorities, industry peers, or other third parties (i) if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, (ii) to protect and defend our rights or property, (iii) if we determine, in our sole discretion, that there is a violation of our terms, policies, or the law; (iv) to detect or prevent fraud or other illegal activity; (v) to protect the safety, security, and integrity of our products, employees, or users, or the public, or (vi) to protect against legal liability.</li>
                <li>•	Affiliates: We may disclose Personal Information to our affiliates, meaning an entity that controls, is controlled by, or is under common control with us. Our affiliates may use Personal Information we share in a manner consistent with this Privacy Policy.</li>
                <li>•	Other Users and Third Parties You Share Information With: Certain features allow you to display or share information with other users or third parties. For example, you may share in-Services conversations with other users of our Services via shared links or send information to third-party applications.</li>
              </ul>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span>LINKS TO OTHER WEBSITES</span>
              </div>
              <ul>
                <li>The Services may contain links to other websites not operated or controlled by us, including social media services (<span className={styles['underline']}>“Third Party Sites”</span>). The information that you share with Third Party Sites will be governed by the specific privacy policies and terms of service of the Third Party Sites and not by this Privacy Policy. By providing these links we do not imply that we endorse or have reviewed these sites. Please contact the Third Party Sites directly for information on their privacy practices and policies.</li>
              </ul>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span>SECURITY AND RETENTION</span>
              </div>
              <ul>
                <li>We implement commercially reasonable technical, administrative, and organizational measures to protect Personal Information both online and offline from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no Internet or email transmission is ever fully secure or error free. In particular, email sent to or from us may not be secure. Therefore, you should take special care in deciding what information you send to us via the Service or email. In addition, we are not responsible for circumvention of any privacy settings or security measures contained on the Service, or Third Party Sites.</li>
                <li>We retain your Personal Information for only as long as we need in order to provide our Services to you, or for other legitimate business purposes such as resolving disputes, safety and security reasons, or complying with our legal obligations. How long we retain Personal Information will depend on a number of factors, such as (i) Our purpose for processing the data (such as whether we need to retain the data to provide our Services); (ii) The amount, nature, and sensitivity of the information; (iii) The potential risk of harm from unauthorized use or disclosure; or (iv) Any legal requirements that we are subject to.</li>
                <li>In some cases, the length of time we retain data depends on your account settings.</li>
              </ul>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span>YOUR RIGHTS</span>
              </div>
              <ul>
                <li>Depending on where you live, you may have certain statutory rights in relation to your Personal Information. For example, you may have the right to:</li>
              </ul>
              <ul className={styles['definition-list-dot']}>
                <li>•	Access your Personal Information and information relating to how it is processed.</li>
                <li>•	Delete your Personal Information from our records.</li>
                <li>•	Update or correct your Personal Information.</li>
                <li>•	Transfer your Personal Information to a third party (right to data portability).</li>
                <li>•	Restrict how we process your Personal Information.</li>
                <li>•	Withdraw your consent (where we rely on consent as the legal basis for processing at any time). </li>
                <li>•	Object to how we process your Personal Information.</li>
                <li>•	Lodge a complaint with your local data protection authority.</li>
              </ul>
              <ul>
                <li>You can exercise some of these rights through your Services account. If you are unable to exercise your rights through your account, please submit your request through <a href="mailto:privacy@asterapp.ai">privacy@asterapp.ai</a> You can contact our data protection officer at  <a href="mailto:privacy@asterapp.ai">privacy@asterapp.ai</a></li>
                <li>We process your Personal Information for the purposes described in this Privacy Policy on servers located in various jurisdictions, including processing and storing your Personal Information in our facilities and servers in the United States. While data protection law varies by country, we apply the protections described in this policy to your Personal Information regardless of where it is processed, and only transfer that data pursuant to legally valid transfer mechanisms.</li>
              </ul>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span>ADDITIONAL U.S. STATE DISCLOSURES</span>
              </div>
              <ul>
                <li>Some U.S. State privacy laws require specific disclosures. The following table provides additional information about the categories of Personal Information we collect and how we use and disclose that information. You can read more about the Personal Information we collect and where we collect it from in “<strong>PERSONAL INFORMATION WE COLLECT</strong>” above, how we use Personal Information in “<strong>HOW WE USE PERSONAL INFORMATION</strong>” above, and how we retain Personal Information in “<strong>SECURITY AND RETENTION</strong>” above.</li>
              </ul>
              <ul>
                <li><span className={styles['spot']}>Category of Personal Information</span></li>
                <li>We collect the following information, as described above:</li>
              </ul>
              <ul className={styles['definition-list-dot']}>
                <li>•	Identifiers, such as your name, contact details, IP address, and other device identifiers</li>
                <li>•	Social Information and Other Information You Provide</li>
                <li>•	Commercial information, such as your transaction history</li>
                <li>•	Network activity information, such as your Content and how you interact with our Services</li>
                <li>•	Communication Information, such as your contact information when you send us email</li>
                <li>•	Geolocation data, such as the general area from which your device accesses our Services based on information like its IP address, or precise location information you choose to provide</li>
                <li>•	Your account credentials and payment information such as your Account Information</li>
              </ul>
              <ul>
                <li><span className={styles['spot']}>Use of Personal Information</span></li>
                <li>We use this information for the following purposes, as described above:</li>
              </ul>
              <ul className={styles['definition-list-dot']}>
                <li>•	Provide, analyze, and maintain our Services</li>
                <li>•	Improve and develop our Services and conduct research</li>
                <li>•	Communicate with you, including to send you information about our Services and events</li>
                <li>•	Prevent fraud, illegal activity, or misuses of our Services, and to protect the security of our systems and Services</li>
                <li>•	Comply with legal obligations and protect the rights, privacy, safety, or property of our users, us, or third parties</li>
              </ul>
              <ul>
                <li><span className={styles['spot']}>Disclosure of Personal Information</span></li>
                <li>We may disclose this information in the following circumstances, as described above:</li>
              </ul>
              <ul className={styles['definition-list-dot']}>
                <li>•	Vendors, service providers, and affiliates to process in accordance with our instructions</li>
                <li>•	Government authorities or other third parties for the legal reasons described above</li>
                <li>•	Parties involved in Business Transactions</li>
                <li>•	Business account administrators for the reasons described above</li>
                <li>•	Other users and third parties you interact or share information with</li>
              </ul>
              <ul>
                <li>Depending on where you live and subject to applicable exceptions, you may have the following privacy rights in relation to your Personal Information:</li>
              </ul>
              <ul className={styles['definition-list-dot']}>
                <li>•	The right to know information about our processing of your Personal Information, including the right to access your Personal Information, often in a portable format;</li>
                <li>•	The right to request deletion of your Personal Information;</li>
                <li>•	The right to correct your Personal Information; and</li>
                <li>•	The right to be free from discrimination relating to the exercise of any of your privacy rights.</li>
              </ul>
              <ul>
                <li>We do not “sell” Personal Information or “share” Personal Information for cross-contextual behavioral advertising, and we do not process Personal Information for “targeted advertising” purposes (as those terms are defined under state privacy laws). We also do not process sensitive Personal Information for the purposes of inferring characteristics about a consumer.</li>
              </ul>
              <ul>
                <li><strong>Exercising Your Rights.</strong> You can exercise privacy rights described in this section by submitting a request through <a href="mailto:privacy@asterapp.ai">privacy@asterapp.ai</a></li>
                <li><strong>Verification.</strong> In order to protect your Personal Information from unauthorized access, change, or deletion, we may require you to verify your credentials before you can submit a request to know, correct, or delete Personal Information. If we cannot verify your identity, we will not be able to honor your request.</li>
                <li><strong>Authorized Agents.</strong> You may also submit a rights request through an authorized agent. If you do so, the agent must present signed written permission to act on your behalf and you may also be required to independently verify your identity with us. Authorized agent requests can be submitted to <a href="mailto:privacy@asterapp.ai">privacy@asterapp.ai</a></li>
                <li><strong>Appeals.</strong> Depending on where you live, you may have the right to appeal a decision we make relating to requests to exercise your rights. To appeal a decision, please send your request to  <a href="mailto:privacy@asterapp.ai">privacy@asterapp.ai</a></li>
              </ul>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span>CHANGES TO THE PRIVACY POLICY</span>
              </div>
              <ul>
                <li>We may update this Privacy Policy from time to time. When we do, we will post an updated version on this page, unless another type of notice is required by applicable law.</li>
              </ul>
            </li>
            <li>
              <div className={styles['definition-list-group']}>
                <span>HOW TO CONTACT US</span>
              </div>
              <ul>
                <li>Please contact us at <a href="mailto:privacy@asterapp.ai">privacy@asterapp.ai</a> if you have any questions or concerns not already addressed in this Privacy Policy. </li>
              </ul>
            </li>
          </ul>
        </main>
				{/* // container-wrapper */}
				{/* footer-wrapper */}
				<footer className={styles['footer-wrapper']}>
					<div className={styles['footer-inner']}>
						<div className={styles['footer-left']}>
							<address className={styles['address-info']}>
								<span className={styles['group']}>
									<a href={`${assetPath}/termsofuse`}>Terms of Service</a>
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

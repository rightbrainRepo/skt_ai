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
            <h2 className={styles['definition-title']}>Terms of Service</h2>
            <div className={styles['definition-description']}>
              <p>THE ASTER AI PERSONAL ASSISTANT IS PROVIDED TO YOU (the <span className={styles['underline']}>“Customer”</span>) BY GLOBAL AI PLATFORM CORPORATION (<span className={styles['underline']}>“we”</span> and its equivalents) BY USING ASTER, YOU IRREVOCABLY ACCEPT THESE TERMS AND CONDITIONS (this <span className={styles['underline']}>“Agreement”</span>). IF YOU DO NOT ACCEPT THIS AGREEMENT, YOU MUST NOT USE ASTER.</p>
              <p>In order to enter into this Agreement, you must have reached the legal age of majority in your jurisdiction of residence. By accepting this Agreement, you represent that you have the capacity to be bound by it.</p>
              <p>By accepting this Agreement, you agree to be bound by the terms and conditions of this Agreement, as well as Aster’s Privacy Policy located at <a href="mailto:privacy@asterapp.ai">privacy@asterapp.ai</a> (the <span className={styles['underline']}>“Privacy Policy”</span>), as amended from time to time. We may amend any part of this Agreement from time to time in our discretion. We will provide you with in-service notice of the proposed amendments, and the amendments will take effect 30 days after the date on which the amended version is provided to you.</p>
              <p>If you disagree with any amendments, you may terminate this Agreement by ceasing to use Aster at any time within the 30-day period before the amendments take effect. If you continue using Aster during that time, then by your continued use, you are considered to have accepted the proposed amendments.</p>
            </div>
            <ol className={styles['definition-list']}>
              <li>
                <div className={styles['definition-list-group']}>
                  <span>1. DEFINITIONS</span>
                  <span className={styles['definition-list-suffix']}>As used in this Agreement:</span>
                </div>
                <ul>
                  <li><span className={styles['underline']}>“Customer Data”</span> means any data, information or information contained in any database, template or other similar document submitted by Customer to Aster.</li>
                  <li><span className={styles['underline']}>“Documentation”</span> means the applicable manuals, online materials, or specifications we make available to Customer that describe the features and functionality of Aster.</li>
                  <li><span className={styles['underline']}>“Personal Information”</span> means information about or relating to an identified or identifiable individual that is subject to applicable state and federal laws and regulations governing the collection, use, and disclosure of Personal Information in the jurisdictions where Customer has subscribed to use Aster.</li>
                  <li><span className={styles['underline']}>“Aster”</span> means our proprietary mobile AI personal assistant application, which is provided as a mobile application.</li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span>2. ASTER PERSONAL AI ASSISTANT.</span>
                </div>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>2.1 Subscription to Aster.</span>
                </div>
                <ul>
                  <li>Provided that Customer: (i) complies with the provisions of this Agreement, including but not limited to paying applicable Fees; and (ii) provides Aster with access to Customer’s internal systems and any third party systems (and making all required third party disclosures and obtaining all required third party consents in respect of such access) from which Customer wishes Aster to access Customer Data, we grant to Customer a personal, non-sublicensable, non-transferable, non-exclusive subscription to: (i) access and use Aster in accordance with this Agreement solely for Customer’s personal use and not for resale, and (ii) download, install and use one object code copy of our mobile application associated with Aster from a legitimate marketplace on a mobile device that Customer owns or controls.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>2.2	System Updates</span>
                </div>
                <ul>
                  <li>We may update any aspect of Aster any time in our discretion. We may schedule downtime for maintenance and upgrades to Aster, including the technology, hardware, software and systems we use to provide Aster to Customer in accordance with this Agreement (collectively, the <span className={styles['underline']}>“System”</span>).</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>2.3	Privacy Policy.</span>
                </div>
                <ul>
                  <li>To the extent any Customer Data contains Personal Information, it will be used, collected, stored and disclosed for the purposes contemplated under this Agreement and in accordance with our Privacy Policy.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>2.4	Access to Aster. </span>
                </div>
                <ul>
                  <li>We may suspend, terminate or limit Customer’s use of Aster, or any part thereof, without notice in order to: (i) prevent damage to, or degradation of the integrity of our System; (ii) comply with any law, regulation, court order or other governmental request or order; or (iii) protect us from harm to our reputation or business. We will use commercially reasonable efforts to notify Customer of a limitation, suspension or termination action as soon as reasonably practicable. In the event of a limitation or suspension, we will restore Customer’s access to Aster when we determine the event has been resolved. Nothing in this Agreement will limit out right to take any action or invoke remedies, or will act as a waiver of our rights in any way with respect to any of the foregoing activities. We will not be responsible for any loss or damages of any kind incurred by Customer as a result of any limitation, termination or suspension of Aster under this Section. Customer further agrees that we exercise no control over, and accepts no responsibility for, any content passing through the Internet or for Internet connectivity outside of our control.</li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span>3. USING ASTER.</span>
                </div>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>3.1	 Access and Security. </span>
                </div>
                <ul>
                  <li>Customer is required to establish an account with us and pay the applicable Fees to use Aster. When signing up for an account, Customer will create a unique user ID and create a password (<span className={styles['underline']}>“UID”</span>). A Customer may only access and use Aster with Customer’s specific UID. Customer is responsible for ensuring that Customer’s UID is confidential and not shared with anyone. Customer is responsible for any and all activity occurring under Customer’s UID. Customer will promptly notify us of any actual or suspected unauthorized use of Aster.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>3.2	Customer Responsibilities and Restrictions. </span>
                </div>
                <ul>
                  <li>Customer will comply with all applicable local, state, federal and foreign laws in using Aster. Without limiting the generality of this Section, Customer agrees that Customer will not, and will not permit any person, to: (i) use Aster other than as permitted by this Agreement and consistent with its intended functionality; (ii) use Aster to violate, infringe or appropriate any person’s privacy rights, publicity rights, defamation rights, intellectual property rights, proprietary rights, contractual rights or any other legal right; (iii) sublicense or transfer any of Customer’s rights under this Agreement, except as otherwise provided in this Agreement, or otherwise use Aster for the benefit of a third party or to operate a service bureau; (iv) copy, modify, alter, change, translate, decrypt, obtain or extract the source code of, create derivative works from, reverse engineer, reverse assemble, decompile, disassemble or reverse compile any part of Aster; (v) use or launch any automated system, including without limitation any “robot” or “spider” that accesses Aster; or (vi) interfere with, or attempt to interfere with, Aster, the System, or any other networks or services connected to Aster, whether through the use of viruses, bots, worms or any other computer code, file or program that interrupts, destroys or limits the functionality of any computer software or hardware.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>3.3	Customer Data.</span>
                </div>
                <ul>
                  <li>Customer is solely responsible for the Customer Data and will not provide or transmit any Customer Data or any other information, data or material that: (i) infringes or violates any intellectual property rights, publicity/privacy rights, law or regulation; or (ii) contains any viruses or programming routines intended to damage, surreptitiously intercept or expropriate any system, data or personal information. We may take remedial action if Customer Data violates this Section. However, we are under no obligation to review Customer Data for accuracy or liability</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>3.4	Reliance on Outputs. </span>
                </div>
                <ul>
                  <li>Artificial intelligence and large language models are frontier technologies that are still improving in accuracy, reliability and safety. Customer acknowledges and agrees that: (i) responses to Customer’s prompts generated by Aster (“Outputs”) may not always be accurate and may contain material inaccuracies even if they appear accurate because of their level of detail or specificity; (ii) Customer will not rely on any Outputs without independently confirming their accuracy; (iii) Outputs may not reflect correct, current, or complete information; and (iv) Outputs may contain content that is inconsistent with our views. We do not endorse or guarantee the accuracy of any Outputs.</li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span>4. Fees, Payment and Suspension.</span>
                </div>
                <ul>
                  <li>As consideration for Customer’s subscription to Aster, Customer will pay the applicable fees presented to Customer at the time of purchase (<span className={styles['underline']}>“Fees”</span>). All Fees will be billed in advance on a monthly basis and are due on the first day of each monthly subscription period. All Fees owed by Customer in connection with this Agreement are exclusive of, and Customer shall pay, all sales, use, excise and other taxes that may be levied upon Customer in connection with this Agreement. We reserve the right (in addition to any other rights or remedies we have) to discontinue Aster and suspend all UIDs and Customer’s access to Aster if any Fees are overdue until such amounts are paid in full. Customer shall maintain complete, accurate Customer billing and contact information at all times.</li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span>5. PROPRIETARY RIGHTS.</span>
                </div>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>5.1	System and Technology. </span>
                </div>
                <ul>
                  <li>Customer acknowledges that we and our licensors retain all right, title and interest in and to Aster, the System and all software, materials, formats, interfaces, information, data, content we use or provide to Customer in connection with Aster (collectively, the <span className={styles['underline']}>“Aster Technology”</span>), and that the Aster Technology is protected by intellectual property rights owned by or licensed to us. Other than as expressly set forth in this Agreement, no license or other rights in the Aster Technology are granted to the Customer, and all such rights are hereby expressly reserved by us. We will have a royalty-free, worldwide, transferable, sublicensable, irrevocable, perpetual license to use or incorporate into Aster any suggestions, enhancement requests, recommendations or other feedback provided by Customer relating to Aster.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>5.2	Customer Data. </span>
                </div>
                <ul>
                  <li>Customer retains all right, title and interest in and to the Customer Data. Except as set out in <span className={styles['underline']}>Section 5.3</span>, we will only use Customer Data to provide Aster under this Agreement. Customer will be solely responsible for providing all Customer Data required for the proper operation of Aster. Customer grants to us all necessary licenses in and to such Customer Data solely as necessary for us to provide Aster to Customer.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>5.3	Aggregated Data. </span>
                </div>
                <ul>
                  <li>Customer grants to us a perpetual, worldwide, royalty-free, non-exclusive, irrevocable license to use reproduce, process and display the Customer Data in an aggregated and anonymized format for our internal business purposes, including without limitation to develop and improve Aster, the System and our other products and services.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>5.4	Third Party Services. </span>
                </div>
                <ul>
                  <li>Some features and services of Aster are provided by third parties (<span className={styles['underline']}>"Third-Party Offerings"</span>). We do not provide any warranties with respect to such Third-Party Offerings. You agree that we are not responsible for any aspect of Third-Party Offerings, including their performance and in respect of any materials that may be provided to Customer by them.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>5.5	Third Party Websites. </span>
                </div>
                <ul>
                  <li>Aster may contain links to third-party websites or resources. We provide these links only as a convenience and are not responsible for the content, products or services on or available from those websites or resources or links displayed on such websites. Customer acknowledges sole responsibility for and assumes all risk arising from, Customer’s use of such third-party websites or resources.</li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span>6. TERM AND TERMINATION. </span>
                </div>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>6.1	Term.</span>
                </div>
                <ul>
                  <li>The term of this Agreement will commence on the date Customer agrees to this Agreement and shall continue until the end of Customer’s subscription period or when otherwise terminated pursuant to this Agreement (the <span className={styles['underline']}>“Term”</span>).</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>6.2	Termination for Default. </span>
                </div>
                <ul>
                  <li>We may terminate this Agreement immediately upon written notice if Customer breaches this Agreement.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>6.3	Effect of Termination.</span>
                </div>
                <ul>
                  <li>Upon the termination of this Agreement for any reason: (i) any amounts owed to us under this Agreement before such termination will become immediately due and payable; and (ii) Customer’s access to and use of Aster and the System will be immediately suspended. Thereafter, we may remove all Customer Data from the System. The rights and duties of the parties under Sections 3.3, and 5 through 11 will survive the termination or expiration of this Agreement.</li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span>7. Disclaimer.</span>
                </div>
                <ul>
                  <li>(i) ASTER AND ANY OTHER PRODUCTS AND SERVICES (INCLUDING ANY THIRD PARTY SOFTWARE INCORPORATED THEREIN) PROVIDED BY US TO CUSTOMER ARE PROVIDED “AS IS”, “AS AVAILABLE”, WITH ALL FAULTS AND WITHOUT ANY WARRANTIES, REPRESENTATIONS OR CONDITIONS OF ANY KIND; (ii) WE HEREBY DISCLAIM ALL EXPRESS, IMPLIED, COLLATERAL OR STATUTORY WARRANTIES, REPRESENTATIONS OR CONDITIONS, WHETHER WRITTEN OR ORAL, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, TITLE, NON-INFRINGEMENT, SECURITY, RELIABILITY, COMPLETENESS, QUIET ENJOYMENT, ACCURACY, QUALITY, INTEGRATION OR FITNESS FOR A PARTICULAR PURPOSE; (iii) WE DO NOT WARRANT THAT ASTER WILL OPERATE WITHOUT INTERRUPTION OR BE ERROR FREE; AND (iv) WITHOUT LIMITING THE GENERALITY OF ANY OF THE FOREGOING, WE EXPRESSLY DISCLAIM ANY REPRESENTATION OR WARRANTY THAT ANY DATA OR INFORMATION PROVIDED TO CUSTOMER IN CONNECTION WITH CUSTOMER’S USE OF ASTER IS ACCURATE, OR CAN OR SHOULD BE RELIED UPON BY CUSTOMER FOR ANY PURPOSE WHATSOEVER.</li>
                  <li>WE ARE NOT RESPONSIBLE FOR THE ACTS OR OMISSIONS OF, OR FOR THE FAILINGS OF, ANY THIRD PARTY OF ANY SERVICE, NETWORK, SOFTWARE OR HARDWARE, INCLUDING BUT NOT LIMITED TO INTERNET SERVICE PROVIDERS, HOSTING SERVICES UTILIZED BY US, TELECOM PROVIDERS, OR ANY SOFTWARE OR HARDWARE NOT PROVIDED BY US.</li>
                  <li>ASTER IS OFFERED AND CONTROLLED BY US FROM ITS FACILITIES IN THE UNITED STATES. WE MAKE NO REPRESENTATIONS THAT ASTER IS APPROPRIATE OR AVAILABLE FOR USE IN OTHER JURISDICTIONS. THOSE WHO ACCESS OR USE ASTER FROM OTHER JURISDICTIONS DO SO AT THEIR OWN VOLITION ARE RESPONSIBLE FOR COMPLIANCE WITH LOCAL LAW.</li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span>8. INDEMNITY.</span>
                </div>
                <ul>
                  <li>If any action is instituted by a third party against us arising out of or relating to: (i) Customer’s use of Aster or the System; (ii) Customer’s breach of any of Customer’s obligations, representations or warranties under this Agreement; or (iii) an allegation that the Customer Data, or the use of Customer Data by us pursuant to this Agreement, infringes any third party intellectual property rights or other rights of a third party, or otherwise causes harm to a third party, Customer will defend such action at its own expense on our behalf and shall pay all damages attributable to such claim which are finally awarded against us or paid in settlement of such claim.</li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span>9. LIMITATION OF LIABILITY. </span>
                </div>
                <ul>
                  <li>OUR TOTAL AGGREGATE LIABILITY FROM ANY AND ALL CLAIMS IN CONNECTION WITH OR UNDER THIS AGREEMENT IS LIMITED TO THE TOTAL AMOUNT OF FEES PAID BY CUSTOMER TO US UNDER THIS AGREEMENT IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE DATE THE CAUSE OF ACTION FIRST AROSE. THE EXISTENCE OF ONE OR MORE CLAIMS UNDER THIS AGREEMENT WILL NOT INCREASE THIS MAXIMUM LIABILITY AMOUNT. IN NO EVENT SHALL OUR SUPPLIERS OR LICENSORS HAVE ANY LIABILITY ARISING OUT OF OR IN ANY WAY CONNECTED TO THIS AGREEMENT.</li>
                  <li>IN NO EVENT WILL WE BE LIABLE TO CUSTOMER FOR ANY (i) SPECIAL, INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES, (ii) LOST SAVINGS, PROFIT, DATA, USE OR GOODWILL, (iii) BUSINESS INTERRUPTION, EVEN IF NOTIFIED IN ADVANCE OF SUCH POSSIBILITY, OR (iv) PERSONAL OR PROPERTY DAMAGE ARISING OUT OF OR IN ANY WAY CONNECTED TO THIS AGREEMENT, REGARDLESS OF CAUSE OF ACTION OR THE THEORY OF LIABILITY, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE, GROSS NEGLIGENCE, FUNDAMENTAL BREACH, BREACH OF A FUNDAMENTAL TERM) OR OTHERWISE. </li>
                  <li>CUSTOMER IRREVOCABLY AND UNCONDITIONALLY WAIVES ANY RIGHT CUSTOMER MAY HAVE TO A TRIAL BY JURY IN RESPECT OF ANY LEGAL ACTION ARISING OUT OF OR RELATING TO THIS AGREEMENT. CUSTOMER AGREES THAT, WITH RESPECT TO ANY DISPUTE ARISING OUT OF OR RELATING TO THIS AGREEMENT, CUSTOMER HEREBY GIVES UP ITS RIGHT TO PARTICIPATE AS A MEMBER OF A CLASS OF CLAIMANTS IN ANY LAWSUIT INCLUDING BUT NOT LIMITED TO CLASS ACTION LAWSUITS INVOLVING ANY SUCH DISPUTE.</li>
                  <li>Customer agrees that it will not bring a claim under or related to this Agreement more than twelve (12) months from when such claim first arose.</li>
                  <li>This Section shall survive and continue in full force and effect despite any failure of consideration or of an exclusive remedy:</li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span>10.	DISPUTE RESOLUTION. </span>
                </div>
                <ul>
                  <li>CUSTOMER AGREES TO THE FOLLOWING MANDATORY ARBITRATION AND CLASS ACTION WAIVER PROVISIONS:</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>10.1 Mandatory Arbitration.</span>
                </div>
                <ul>
                  <li>Customer agrees to resolve any claims arising out of or relating to this Agreement or the use of Aster (a <span className={styles['underline']}>“Dispute”</span>) through final and binding arbitration. Customer may opt out of arbitration within thirty (30) days of creating an account with us (i.e. creating a UID) or of any updates to our Dispute Resolution procedures within thirty (30) days after the update has taken effect by emailing us at <a href="mailto:privacy@asterapp.ai">privacy@asterapp.ai</a> specifying that Customer wishes to opt out of arbitration. If Customer opts out of an update to the Dispute Resolution provisions, the last set of agreed-upon Dispute Resolution procedures will continue to apply.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>10.2 Informal Dispute Resolution. </span>
                </div>
                <ul>
                  <li>Before Customer files a claim against us, Customer agrees to try to resolve the Dispute informally. Customer agrees to do so by sending us an email to <a href="mailto:privacy@asterapp.ai">privacy@asterapp.ai</a>. If we are unable to resolve a Dispute within sixty (60) days, Customer may initiate arbitration as specified in this <span className={styles['underline']}>Section 10.</span></li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>10.3 Arbitration Forum.</span>
                </div>
                <ul>
                  <li>If we are unable to resolve a Dispute, the Dispute will be submitted to arbitration with the National Arbitration and Mediation (<span className={styles['underline']}>“NAM”</span>) under its Comprehensive Dispute Resolution Rules and Procedures and/or Supplemental Rules for Mass Arbitration Filings, as applicable. We will not seek attorneys’ fees and costs in arbitration unless the arbitrator determines that Customer’s claim is frivolous. The activities described in this Agreement involve interstate commerce, and the Federal Arbitration Act will govern the interpretation and enforcement of these arbitration terms and any arbitration.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>10.4 Arbitration Procedures.</span>
                </div>
                <ul>
                  <li>Arbitration will be conducted by videoconference if possible, but if the arbitrator determines a hearing should be conducted in person, the location will be mutually agreed upon, in the county where Customer resides, or as determined by the arbitrator, unless the batch arbitration process applies. The arbitration will be conducted by a sole arbitrator. The arbitrator will be either a retired judge or an attorney licensed to practice law in the State of California. The arbitrator will have exclusive authority to resolve any Dispute, except the state or federal courts sitting in Santa Clara County, California will have the authority to determine any Dispute about enforceability, validity of the class action waiver, or requests for public injunctive relief, as set out below. Any settlement offer amounts will not be disclosed to the arbitrator by either party until after the arbitrator determines the final award, if any. The arbitrator has the authority to grant motions dispositive of all or part of any Dispute.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>10.5 Exceptions.</span>
                </div>
                <ul>
                  <li>This section does not require informal dispute resolution or arbitration of the following claims: (i) Individual claims brought in small claims court; and (ii) injunctive or other equitable relief to stop unauthorized use or abuse of Aster, the System, or intellectual property infringement or misappropriation. Customer waives any opposition to such injunctive or equitable relief, as well as any demand that we prove actual damage or post a bond or other security in connection with such injunctive or equitable relief.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>10.6 Class and Jury Trial Waivers. </span>
                </div>
                <ul>
                  <li>Customer agrees that Disputes must be brought on an individual basis only, and may not be brought as a plaintiff or class member in any purported class, consolidated, or representative proceeding. Class arbitrations, class actions, and representative actions are prohibited. Only individual relief is available. The parties agree to sever and litigate in court any request for public injunctive relief after completing arbitration for the underlying claim and all other claims. This does not prevent either party from participating in a class-wide settlement. Customer and we knowingly and irrevocably waives any right to trial by jury in any action, proceeding, or counterclaim.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>10.7 Batch Arbitration. </span>
                </div>
                <ul>
                  <li>If 25 or more claimants represented by the same or similar counsel file demands for arbitration raising substantially similar Disputes within 90 days of each other, then Customer agrees that NAM will administer them in batches of up to 50 claimants each (“Batch”), unless there are less than 50 claimants in total or after batching, which will comprise a single Batch. NAM will administer each Batch as a single consolidated arbitration with one arbitrator, one set of arbitration fees, and one hearing held by videoconference or in a location decided by the arbitrator for each Batch. If any part of this Section is found to be invalid or unenforceable as to a particular claimant or Batch, it will be severed and arbitrated in individual proceedings.</li>
                </ul>
              </li>
              <li>
                <div className={styles['definition-list-group']}>
                  <span>11.	GENERAL </span>
                </div>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>11.1 Assignment.  </span>
                </div>
                <ul>
                  <li>Customer may not assign this Agreement to a third party without our prior written consent. We may assign this Agreement or any rights hereunder to any third party without Customer’s consent. Any assignment in violation of this Section shall be void.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>11.2 Governing Law. </span>
                </div>
                <ul>
                  <li>This Agreement and any action related thereto shall be governed by and construed in accordance with the laws of the State of California, without regard to conflicts of law principles. The U.N. Convention on Contracts for the International Sale of Goods will not apply to this Agreement.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>11.3 Notices. </span>
                </div>
                <ul>
                  <li>Any notice or other communication required or permitted under this Agreement and intended to have legal effect must be given in writing: (i) to us, by email at <a href="mailto:privacy@asterapp.ai">privacy@asterapp.ai</a> or by certified mail at 4151 Burton Dr, Santa Clara, CA 95054; and (ii) to Customer, by email or by certified mail at the addresses provided to us upon account registration. Notwithstanding the foregoing, each party may change its address from time to time upon written notice to the other party of the new address. Notices will be deemed to have been given upon receipt, or when delivery is refused.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>11.4 Entire Agreement. </span>
                </div>
                <ul>
                  <li>This Agreement is the entire understanding and agreement of the parties, and supersedes any and all previous and contemporaneous understandings, agreements, proposals or representations, written or oral, between the parties, as to the subject matter hereof. This Agreement may only be modified in writing signed by both parties.</li>
                </ul>
              </li>
              <li className={styles['babysteps']}>
                <div className={styles['definition-list-group']}>
                  <span>11.5 Severability and Waiver. </span>
                </div>
                <ul>
                  <li>In the event that any provision of this Agreement is held to be invalid or unenforceable, the valid or enforceable portion thereof and the remaining provisions of this Agreement will remain in full force and effect. Any waiver or failure to enforce any provision of this Agreement on one occasion will not be deemed a waiver of any other provision or of such provision on any other occasion. All waivers must be in writing. Other than as expressly stated herein, the remedies provided herein are in addition to, and not exclusive of, any other remedies of a party at law or in equity.</li>
                </ul>
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

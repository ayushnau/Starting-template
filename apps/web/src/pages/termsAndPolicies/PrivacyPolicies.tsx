import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicies: FC<{}> = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="bg-white h-full rounded-t-3xl shadow-style-chooser">
				<div className="p-6">
					<div
						className=""
						onClick={() => {
							navigate(-1);
						}}
					>
						<img src="https://wiredup-staging.imgix.net/32f292cd-9815-44bd-b5ec-4b8635e761ed?auto=compress,format" />
					</div>
					<div className="text-black mt-6 text-2xl font-bold">
						Privacy Policy
					</div>
					<div className="text-gray-600 font-normal text-sm mt-1">
						<p className="mb-10">
							At UnoRoof Fintech Solutions Private Limited, we take online
							privacy seriously and we respect the concerns of our community of
							users. In this policy (the ‘Privacy Policy ’) we describe our
							privacy practices with regard to information we collect through
							www.wiredup.in (the ‘ Site/App ’) and the App “WiredUp”, to help
							you make informed decisions about how you share information when
							you visit or use the Site/App, as well as your rights in
							determining what we do with the information that we collect or
							hold about you.
						</p>
						<div>
							<p className="mb-5 font-bold">
								Understanding How Information Is Collected
							</p>

							<div>
								<p className="mb-5">
									Information You May Choose to Provide to Us
								</p>

								<p className="mb-5">
									We may collect information, including personal data, directly
									from you if you choose to provide that information. For
									example, you may provide us with your name and contact
									information (such as an email address, mobile number), date of
									birth or other details of that nature, when you sign up on the
									Site/App.
								</p>

								<p className="mb-5">
									You also may choose to provide personally identifiable
									information about yourself when you participate in forums or
									discussions on the Site/App. Please be aware that information
									you post in these forums may be viewed or captured by anyone
									who visits the Site/App, therefore you should avoid posting
									sensitive personal data that you would not want to be
									available to the public.
								</p>
							</div>

							<div>
								<p className="mb-5">Information You Provide to Us</p>

								<p className="mb-5">
									<b>Account information</b>. When you create a WiredUp account,
									you can come up with a username and password, and provide a
									way of contacting you (such as an email address and/or phone
									number). To access features of the application, you will need
									to verify your account or add other information (like a
									verified phone number) to your account.
								</p>

								<p className="mb-5">
									<b>Purchase information</b>. If you buy any paid services
									through WiredUp, you may need to submit a valid payment method
									and associated billing information, including your full name
									and billing address. Our payment processors, like Stripe and
									RazorPay, receive and process your payment information.
									Depending on the processor, we may also receive and store
									certain billing information, including the last four digits of
									the credit card number associated with the transaction.
								</p>

								<p className="mb-5">
									<b>Information from actions you take</b>. We collect
									information about your use of and activities on the services.
									This includes the contacts you add or other groups you join.
								</p>

								<p className="mb-5">
									<b>Information used to enable optional features</b>. Certain
									features, like contact syncing, may require that you grant us
									access to such information to make them work.
									<p className="mb-3 ml-2">
										1. Contact Syncing is an optional feature that allows the
										user to make contact groups for easier communication within
										groups as Teams, Customers, Buyers, Sellers and
										Bankers/Partners. We care about your privacy and we do not
										share your contact list with any other Company for their own
										use.
									</p>
									<p className="mb-3 ml-2">
										2. When you use contact Syncing and grant WiredUp access to
										your device address book, wiredUp will access and upload the
										phone numbers and associated contact names in your address
										book.
									</p>
									<p className="mb-3 ml-2">
										3. If any of your contacts aren’t yet using WiredUp, then
										they can be asked to Join by invitation from you. We protect
										their privacy by managing the phone number in a way that is
										designed to prevent those contacts from being identified by
										WiredUp.
									</p>
									<p className="mb-3 ml-2">
										4. You can control the contact syncing feature from your
										AddressBook. If you choose not to use Contact sync you can
										still communicate with people who have WiredUp but certain
										functionalities will get limited.
									</p>
								</p>
								<p className="mb-5">
									<b>The content you upload to the App/Website</b>. The content
									you upload to the App/Website, whether from your own device or
									from a cloud-based hosting service, including any data, text,
									graphic,Images,Photos audio and audio-visual files, may
									include personally identifiable information. The content that
									you upload and designate as public, will be accessible to
									others. Please use caution when uploading the content and
									avoid any involuntary disclosure of your personally
									identifiable information or disclosure of sensitive personally
									identifiable information or disclosure of others’ personally
									identifiable information without their consent.
								</p>
							</div>

							<div>
								<p className="mb-5">
									Information That Is Automatically Collected When You Visit the
									Site/App
								</p>

								<p className="mb-5">
									When you access the Site/App, we and our third-party partners
									and/or vendors may automatically collect certain information
									about your visit using tools such as cookies, web beacons, and
									other similar technologies. The information collected
									automatically when you visit the Site/App may include your IP
									address, characteristics of your operating system, information
									about your browser and system settings, data about the
									computer or mobile device you use to access the Site/App,
									unique device identifiers, clickstream data (which shows the
									page-by-page path you take as you browse the Site/App). We or
									our third-party partners may combine information that each of
									us collects automatically with other information about you,
									including information you choose to provide.
								</p>

								<p className="mb-5">
									Cookies are small files that webSite/Apps and other online
									services use to store information about users on the users’
									own computers. This Site/App may use cookies (such as HTTP and
									HTML5 cookies and Flash cookies), as well as other types of
									local storage. For more information about cookies, you may
									visit http://www.allaboutcookies.org. If you choose to disable
									cookies, that could affect certain features of the Site/App
									that use cookies to enhance their functionality. To manage our
									automatic data collection, we may place tags (often referred
									to as “web beacons”) on pages on the Site/App or in emails we
									send to you. Web beacons are small files that link web pages
									to particular web servers and their cookies, and they may be
									used for a variety of purposes, such as counting the number of
									visitors to the Site/App, analyzing how users navigate around
									the Site/App, assessing how many emails that we send are
									actually opened and which articles or links are viewed by
									visitors.
								</p>

								<p className="mb-5">
									We also use/ may use third-party web analytics services, such
									as Google Analytics, on the Site/App, to provide us with
									statistics and other information about visitors to the
									Site/App. <b>“Do Not Track” Signals</b>. Your browser settings
									may allow you to automatically transmit a “do not track”
									signal to webSite/Apps and online services you visit. Like
									many other webSite/Apps, please note that Wiredup.in is not
									configured to respond to “do not track” signals from
									browsers. 
								</p>
								<p className="mb-5">
									Finally, companies that provide certain third-party apps,
									tools, widgets, and plug-ins that may appear on the Site/App
									(for example, Facebook “Like” buttons), also may use automated
									means to collect information regarding your interactions with
									these features. This information collection is subject to the
									privacy policies or notices of those providers as well.
								</p>
							</div>
						</div>
					</div>
					<div className="text-black mt-6 text-2xl font-bold">
						How We May Use Information We Collect
					</div>
					<div className="text-gray-600 font-normal text-sm mt-1">
						<div>
							<p className="mb-5">
								We may use the information gathered through this webSite/App for
								various purposes, including the purposes listed below. For
								example, if you were to contact us with a question and provide
								your email address, we would use the email address you provided
								to respond to your inquiry. In addition, we use information we
								collect from you and through the Site/App to:
							</p>

							<p className="mb-5">
								1. Provide products and services you request
							</p>

							<p className="mb-5">
								2. Respond to requests, questions, and comments, and provide
								other types of user support;
							</p>

							<p className="mb-5">
								3. Offer you products and services, or direct you to portions of
								this Site/App or other webSite/Apps, that we believe may
								interest you;
							</p>

							<p className="mb-5">
								4. To serve advertising, content and offers to you based on your
								interests and online activities, from us or third parties;
							</p>

							<p className="mb-5">
								5. Communicate about, and administer your participation in,
								events, programs, contests, and other offers or promotions;
							</p>

							<p className="mb-5">
								6. Carry out, evaluate, and improve our business (which may
								include developing new features for the Site/App; analysing and
								enhancing the user experience on the Site/App; assessing the
								effectiveness of our marketing and advertising; and managing our
								communications);
							</p>

							<p className="mb-5">
								7. Perform data analytics regarding usage of the Site/App
								(including market and customer research, trend analysis,
								financial analysis, and anonymization of personal data);
							</p>

							<p className="mb-5">
								8. Guard against, identify, and prevent fraud and other criminal
								activity, claims, and other liabilities; and
							</p>

							<p className="mb-5">
								9. Comply with applicable legal requirements, law enforcement
								requests, and our company policies.
							</p>
						</div>
						<div className="text-black mt-6 text-2xl font-bold">
							How We May Share Information
						</div>
						<div className="text-gray-600 font-normal text-sm mt-1">
							{" "}
							<div>
								<p className="mb-5">
									Our agents, vendors, consultants, and other service providers
									may have access to information we collect through the Site/App
									to carry out work on our behalf. Those parties are subject to
									confidentiality obligations and are restricted from using
									personal data collected through the Site/App for purposes
									other than to provide the requested assistance. In addition,
									we may share information:
								</p>

								<p className="mb-5">
									1. With our affiliates for internal business purposes;
								</p>

								<p className="mb-5">
									2. With third parties for marketing purposes, including social
									media networks, data management platforms, and other
									advertising technology providers; for example, we may match
									your email address with third parties with whom you have also
									consented to share your email address and use such match to
									deliver custom offers or emails to you on the Site/Apps and
									elsewhere online;
								</p>

								<p className="mb-5">
									3. If we are required to do so by law, regulation, or legal
									process;
								</p>

								<p className="mb-5">
									4. In response to requests from government agencies, such as
									law enforcement authorities, including to meet national
									security requirements;
								</p>

								<p className="mb-5">
									5. If we believe disclosure is necessary or appropriate to
									prevent physical harm or financial loss, or in connection with
									an investigation of suspected or actual illegal activity;
								</p>

								<p className="mb-5">
									6. With respect to analytics and statistical information, to
									inform advertisers about the nature of our user base;
								</p>

								<p className="mb-5">
									7. In the event we sell or transfer all or a portion of our
									business or assets (including a reorganization, dissolution,
									or liquidation).
								</p>
							</div>
						</div>
					</div>
					<div className="text-black mt-6 text-2xl font-bold">
						Data Retention and Access
					</div>
					<div className="text-gray-600 font-normal text-sm mt-1">
						{" "}
						<div>
							<p className="mb-5">
								We will retain your personal data only for as long as necessary
								for the purposes it was retained, such as to enable you to use
								the Website and your products or to provide services to you. In
								some instances, we may retain data for longer periods in order
								to comply with applicable laws (including those regarding
								document retention), resolve disputes with any parties, and
								otherwise as necessary to allow us to conduct our business. All
								personal data we retain will be subject to this Privacy Policy
								and our internal retention guidelines. We respect your control
								over your information and, upon request, we will seek to confirm
								your identity and whether we hold or are processing information
								that we have collected from you. Please note that this activity
								will take around 7 working days. You also have the right to
								amend or update inaccurate or incomplete personal information,
								request deletion of your personal information if you so choose
								to delete your account, or request that we no longer use it.
								Under certain circumstances we will not be able to fulfill your
								request, such as if it interferes with our regulatory
								obligations, affects legal matters, we cannot verify your
								identity, or it involves disproportionate cost or effort, but in
								any event we will respond to your request within a reasonable
								timeframe and provide you an explanation. In order to make such
								a request of us, please email us at
								support@unoroof.com;support@wiredup.in
							</p>

							<p className="mb-5">
								<b>Blocking cookies</b>. Certain browsers may be configured to
								notify you when you receive cookies, or allow you to restrict or
								disable certain cookies. If you choose to disable cookies,
								however, that could affect certain features of the Site/App that
								use cookies to enhance their functionality.
							</p>

							<p className="mb-5">
								<b>Disabling local shared objects (“Flash cookies”)</b>
								. We may use other kinds of local storage that function
								similarly, but are stored in different parts of your computer
								from ordinary browser cookies. Your browser may allow you to
								disable its HTML5 local storage or delete information contained
								in its HTML5 local storage.
							</p>

							<p className="mb-5">
								<b>Options concerning third-party ad networks.</b>
								 As described in this Privacy Policy, we and third parties may
								use cookies and similar tracking technologies to collect
								information and infer your interests for interest-based
								advertising purposes.
							</p>
						</div>
					</div>
					<div className="text-black mt-6 text-2xl font-bold">
						How We Protect Personal Data
					</div>
					<div className="text-gray-600 font-normal text-sm mt-1">
						{" "}
						<div>
							<p className="mb-5">
								We maintain appropriate administrative, technical, and physical
								safeguards designed to protect the personal data you provide
								against accidental, unlawful, or unauthorized destruction, loss,
								alteration, access, disclosure, or use. That said, it is not
								possible to guarantee the security of information transmitted
								online, and you assume some risk with regard to the security of
								information you provide through any webSite/App, including this
								Site/App. support@unoroof.iLinks from UnoRoof to Other Site/App
							</p>

							<p className="mb-5">
								On this Site/App we may provide links to other Website/Apps that
								are controlled by third parties. Linked webSite/Apps may have
								their own privacy notices or policies, which we strongly suggest
								you review. We are not responsible for the content, usage terms,
								privacy policies of webSite/Apps that we do not own or control.
							</p>
						</div>
					</div>
					<div className="text-black mt-6 text-2xl font-bold">
						Surveys and Quizzes
					</div>
					<div className="text-gray-600 font-normal text-sm mt-1">
						{" "}
						<div>
							<p className="mb-5">
								While you are visiting Wiredup.in, you may have the opportunity
								to participate in surveys, quizzes, or other interactive
								features that request information about you and your opinions
								and preferences. Your participation in these features is
								entirely voluntary. If you do choose to participate, please be
								aware that these features may be operated by a third party that
								is not controlled by UnoRoof, and therefore the information you
								provide may be collected by the third party and subject to its
								privacy policy.
							</p>
						</div>
					</div>
					<div className="text-black mt-6 text-2xl font-bold">
						Children’s Privacy
					</div>
					<div className="text-gray-600 font-normal text-sm mt-1">
						{" "}
						<div>
							<p className="mb-5">
								This Site/App is not designed or intended for use by children,
								and we do not knowingly collect personal data from children
								under the age of 18.
							</p>
						</div>
					</div>
					<div className="text-black mt-6 text-2xl font-bold">
						Information for Users outside India
					</div>
					<div className="text-gray-600 font-normal text-sm mt-1">
						<div>
							<p className="mb-5">
								Your personal data may be stored, transferred and processed in
								India and in other countries by our affiliates and/or service
								providers. The data protection laws in these countries may
								provide a lower standard of protection for your personal data
								than your country of residence. We take great care in protecting
								your personal data and have put in place adequate mechanisms to
								protect it when it is transferred internationally. We will
								transfer your personal data in compliance with applicable data
								protection laws and will implement suitable safeguards to ensure
								that your personal data is adequately secured by any third party
								that will access your information.
							</p>

							<p className="mb-5">
								By using our Site/App and providing personal data to us, you
								consent to the terms of this Privacy Policy and the collection,
								use, maintenance, transfer to and processing of your personal
								data in India or other countries or territories, and, unless
								otherwise stated in this Privacy Policy, we use this consent as
								the legal basis for that data transfer.
							</p>

							<p className="mb-5 font-bold">
								How We’ll Inform You About Changes to This Privacy Policy
							</p>

							<p className="mb-5">
								We may update this online privacy policy periodically to reflect
								changes to our privacy practices, such as how we collect or use
								personal data. We also indicate at the top of the policy the
								date when it was most recently updated. We encourage you to
								periodically review this page for the latest information on our
								privacy practices.
							</p>

							<p className="mb-5 font-bold">How to Contact Us</p>
							<p className="mb-5">
								If you have questions about this policy or about our privacy
								practices, you may contact us by emailing 
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default PrivacyPolicies;
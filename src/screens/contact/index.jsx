import React from 'react';
import './styles.scss';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import { AiFillPhone } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';

const Contact = () => {
	return (  
		<div className="contact-container">
			<Navigation />
			<div className="contact-col-container">
				<div className="contact-image-container">
					<div className="contact-image"></div>
				</div>
				<div className="contact-info">
					<h2>Contact Us</h2>
					<div className="contact-phone-container">
						<div className="contact-phone-icon">
							<AiFillPhone style={{width: '100%', height: '100%'}}/>
						</div>
						<a href="tel:0418527194">0418 527 194</a>
					</div>
					<h6>Or</h6>
					<div className="contact-email-container">
						<div className="contact-email-icon">
							<MdMail style={{width: '100%', height: '100%'}}/>
						</div>
						<a href="mailto:simpson.plumbing@bigpond.com">simpson.plumbing@bigpond.com</a>
					</div>
					<h5>We Serve</h5>
					<p>Waverley, Malvern, Caulfield, Carnegie, Wheelers Hill, Dandenong, Ashwood, Bentleigh, Berwick, Blackburn, Clayton, Ferntree Gully, Burwood, Chadstone, Hampton Park, Rowville, Scoresby, Huntingdale, Keysborough,Knoxfield, Lysterfield, Narre Warren, Noble Park, Oakleigh, Endeavour Hills, Hallam, Wantirna, and all suburbs in between.</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
 
export default Contact;
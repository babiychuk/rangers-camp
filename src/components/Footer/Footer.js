import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IoIosCall } from "react-icons/io";
import { IoMdGlobe } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



import './Footer.css';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<Row className="footer_block">
					<Col md="3">
						<div className="copy_txt">

							<ul>
								<li>
									<IoIosCall />
									<a href="tel:+380509410496">+38 (050) 94 104 96</a>
								</li>
							</ul>

						</div>
					</Col>
					<Col md="3">
						<div className="copy_txt">

							<ul>
								<li><FaMapMarkedAlt /> Бориспільський р-н,</li>
								<li>с. Вишеньки, Котеджне містечко «Золоче»</li>
							</ul>

						</div>
					</Col>
					<Col md="3">
						<div className="copy_txt">
							<ul>
								<li><IoIosMail /> rangers.camp.park@gmail.com</li>
								<li><IoMdGlobe /> офіс м. Київ, в. Драгоманова, 1м.</li>
							</ul>
						</div>
					</Col>
					<Col md="3">
						<div className="footer_item">
							<a href="https://www.facebook.com/camprangers/" target="_blank" rel="noopener noreferrer">
								<button className="soc_btn_white">
									<FaFacebookSquare />
								</button>
							</a>
							<a href="https://www.instagram.com/rangers_camp/" target="_blank" rel="noopener noreferrer">
								<button className="soc_btn_white">
									<FaInstagram />
								</button>
							</a>
							<a href="https://www.youtube.com/channel/UC-W6faXsXGk6ebSANAGb3SA"
								target="_blank" rel="noopener noreferrer">
								<button className="soc_btn_white">
									<FaYoutube />
								</button>
							</a>
						</div>
					</Col>
				</Row>
				<div className="copyright_block">
					<div>
						<div className="copy_txt">
							Copyright 2020 © Zoloche | All Rights Reserved
						    </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;

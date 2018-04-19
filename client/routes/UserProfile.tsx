import * as React from 'react';
import authenService from '../authenService';
import Slider          from 'react-slick';

import * as defaultImge from '../assets/images/avatar.png';
import request from '../agent'

const data = [
	{
		productId: "PD0001",
		name: "Nike-001",
		imageUrl: require("../assets/images/shoes1.png"),
		price: "69$"
	},
	{
		productId: "PD0002",
		name: "Nike-002",
		imageUrl: require("../assets/images/shoes1.png"),
		price: "21$"
	},
	{
		productId: "PD0003",
		name: "Nike-003",
		imageUrl: require("../assets/images/shoes1.png"),
		price: "19$"
	},
	{
		productId: "PD0004",
		name: "Nike-004",
		imageUrl: require("../assets/images/shoes1.png"),
		price: "43$"
	},
	{
		productId: "PD0005",
		name: "Nike-005",
		imageUrl: require("../assets/images/shoes1.png"),
		price: "73$"
	},
	{
		productId: "PD0006",
		name: "Nike-006",
		imageUrl: require("../assets/images/shoes1.png"),
		price: "96$"
	},
]

const sliderSettings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,
	centerMode: true,
	arrows: false,
	centerPadding: '0px'
}

class UserProfile extends React.Component {
	render() {
		const userInfo = authenService.getUserInfo();
		return (
			<div className="user-profile">
				{userInfo.imageUrl ? <img className="user-image" src={userInfo.imageUrl} /> : <img className="user-image" src={defaultImge} />}
				<div className="username">{userInfo.name}</div>
				<p className="wishlist-title">Wish list</p>
				<Slider {...sliderSettings}>
					{data.map((item) => {
						return (
							<div className="wishlist-item">
								<span className="prod-name">{item.name}</span>
								<img src={item.imageUrl} className="prod-image" />
								<span className="prod-price">{item.price}</span>
							</div>
						)
					})}
				</Slider>
			</div>
		)
	}
}

export default UserProfile;

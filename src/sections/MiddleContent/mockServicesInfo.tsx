import { ReactComponent as ServiceIconOne } from '../../assets/svg/services-one.svg';
import { ReactComponent as ServiceIconTwo } from '../../assets/svg/services-two.svg';
import { ReactComponent as ServiceIconThree } from '../../assets/svg/services-three.svg';
import { ReactComponent as ServiceIconFour } from '../../assets/svg/services-four.svg';
import { ReactComponent as ServiceIconFive } from '../../assets/svg/services-five.svg';
import { ReactComponent as ServiceIconSix } from '../../assets/svg/services-six.svg';

export const mockServicesInfo = [
	{
		icon: <ServiceIconOne className="middlecontent__service-icon" />,
		title: 'Event Metrics',
		paragraph: 'Track your ticket sales, attendees count and more with much ease.',
	},
	{
		icon: <ServiceIconTwo className="middlecontent__service-icon" />,
		title: 'Registration & Ticketing',
		paragraph: 'Manage your Event registrations and ticket sales easier and receive payments instantly.',
	},
	{
		icon: <ServiceIconThree className="middlecontent__service-icon" />,
		title: 'Branded Badges',
		paragraph: 'Create your custom branded badges for your events and get them printed.',
	},
	{
		icon: <ServiceIconFour className="middlecontent__service-icon" />,
		title: 'Oragniser App',
		paragraph: 'Manage your events at the palm of your hand with our Oragniser App.',
	},
	{
		icon: <ServiceIconFive className="middlecontent__service-icon" />,
		title: 'Attendee Engagement',
		paragraph: 'Engage with your attendees via email, surveys and much more.',
	},
	{
		icon: <ServiceIconSix className="middlecontent__service-icon" />,
		title: 'Add to Calendar',
		paragraph: 'Effortless way to add your events to registered users calendars by 1-click.',
	},
];

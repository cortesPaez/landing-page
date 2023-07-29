import { ReactComponent as SlackIcon } from '../../assets/svg/tools-slack.svg';
import { ReactComponent as QuickBooksIcon } from '../../assets/svg/tools-quickbooks.svg';
import { ReactComponent as GoogleIcon } from '../../assets/svg/tools-google-analytics.svg';
import { ReactComponent as HubspotIcon } from '../../assets/svg/tools-hubspot.svg';
import { ReactComponent as ToolsIcon } from '../../assets/svg/tools-mailchimp.svg';
import { ReactComponent as MarketoIcon } from '../../assets/svg/tools-marketo.svg';
import { ReactComponent as ZapierIcon } from '../../assets/svg/tools-zapier.svg';
import { ReactComponent as BackgroundCircle } from '../../assets/svg/tools-background-circle.svg';
import './styles.css';

export const Tools = () => {
	const classIcon = 'tools__icon';
	const toolsIcons = [
		{
			icon: <SlackIcon className={classIcon} />,
		},
		{
			icon: <QuickBooksIcon className={classIcon} />,
		},
		{
			icon: <GoogleIcon className={classIcon} />,
		},
		{
			icon: <HubspotIcon className={classIcon} />,
		},
		{
			icon: <MarketoIcon className={classIcon} />,
		},
		{
			icon: <ZapierIcon className={classIcon} />,
		},
		{
			icon: <ToolsIcon className={classIcon} />,
		},
	];

	const firstFourIcons = toolsIcons.slice(0, 4).map((tool, index) => <div key={index}>{tool.icon}</div>);

	const lastThreeIcons = toolsIcons.slice(-3).map((tool, index) => <div key={index}>{tool.icon}</div>);

	return (
		<div className="tools">
			<div className="tools__texts">
				<h1 className="tools__title">Integrate with your favorite tools</h1>
				<p className="tools__paragraph">Connect RegiM with your most favorite sales and marketing tools</p>
			</div>
			<div className="tools__icons-container">
				{firstFourIcons}
				<div className="tools__icon--centered-row">{lastThreeIcons}</div>
			</div>
			<BackgroundCircle className="tools__background" />
		</div>
	);
};

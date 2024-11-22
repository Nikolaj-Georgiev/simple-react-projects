import {
  handleFacebookClick,
  handleLinkedinClick,
  handleTwitterClick,
} from '../utils/helpers';
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareXTwitter,
} from 'react-icons/fa6';

const footerIcons = [
  {
    icon: FaLinkedin,
    onClick: handleLinkedinClick,
  },
  {
    icon: FaSquareXTwitter,
    onClick: handleTwitterClick,
  },
  {
    icon: FaSquareFacebook,
    onClick: handleFacebookClick,
  },
];

export default footerIcons;

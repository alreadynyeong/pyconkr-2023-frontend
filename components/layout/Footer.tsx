import { styled } from 'stitches.config';
import TwitterIcon from '@/public/icons/Twitter.svg';
import YoutubeIcon from '@/public/icons/Youtube.svg';
import FacebookIcon from '@/public/icons/Facebook.svg';
import GitHubIcon from '@/public/icons/GitHub.svg';
import EmailIcon from '@/public/icons/Email.svg';
import {
  PYCONKR_FACEBOOK_URL,
  PYCONKR_TWITTER_URL,
  PYCONKR_YOUTUBE_URL,
  PYCONKR_EMAIL,
  PYCONKR_GITHUB_URL,
} from '@/constants';

const FooterLayout = styled('div', {
  backgroundColor: 'inherit',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: '-100px',
});

const FooterContainer = styled('div', {
  borderTop: '2px solid $gray500',
  padding: '15px 30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const CoCLink = styled('a', {
  textDecoration: 'underline',
});

const SNSLink = styled('a', {
  padding: '14px',
  '& svg': {
    width: '20px',
    height: '20px',
  },
});

const Footer = () => (
  <FooterLayout>
    <FooterContainer>
      <div>
        <CoCLink href="/coc">파이콘 한국 행동 강령 (CoC)</CoCLink>
      </div>
      <div>
        <SNSLink href={`mailto:${PYCONKR_EMAIL}`} title="이메일">
          <EmailIcon />
        </SNSLink>
        <SNSLink
          href={PYCONKR_TWITTER_URL}
          title="트위터"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </SNSLink>
        <SNSLink
          href={PYCONKR_FACEBOOK_URL}
          title="페이스북"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </SNSLink>
        <SNSLink
          href={PYCONKR_YOUTUBE_URL}
          title="유튜브"
          target="_blank"
          rel="noreferrer"
        >
          <YoutubeIcon />
        </SNSLink>
        <SNSLink
          href={PYCONKR_GITHUB_URL}
          title="깃헙"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </SNSLink>
      </div>
    </FooterContainer>
  </FooterLayout>
);

export default Footer;

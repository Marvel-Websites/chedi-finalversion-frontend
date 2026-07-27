import { CHEDI_LOGO } from '@/constants/media';

export default function PageLoader({ hidden = false }) {
  return (
    <div id="page-loader" className={hidden ? 'hidden' : ''} aria-hidden="true">
      <img className="loader-logo" src={CHEDI_LOGO} alt="" />
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
      <span className="loader-text">Loading Experience</span>
    </div>
  );
}

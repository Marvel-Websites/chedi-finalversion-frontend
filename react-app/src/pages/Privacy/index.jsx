import LegalPage from '@/components/cards/LegalPage';
import { PRIVACY_CONTENT } from '@/constants/legalContent';

export default function Privacy() {
  return <LegalPage id="privacy" data={PRIVACY_CONTENT} />;
}

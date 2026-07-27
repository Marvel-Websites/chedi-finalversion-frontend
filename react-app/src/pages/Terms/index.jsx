import LegalPage from '@/components/cards/LegalPage';
import { TERMS_CONTENT } from '@/constants/legalContent';

export default function Terms() {
  return <LegalPage id="terms" data={TERMS_CONTENT} />;
}

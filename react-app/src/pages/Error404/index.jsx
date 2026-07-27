import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import styles from './Error404.module.css';

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrap}>
      <div className={styles.code}>404</div>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.desc}>The page you&apos;re looking for doesn&apos;t exist or may have been moved.</p>
      <button className="btn btn-gold" onClick={() => navigate(ROUTES.HOME)}>
        Back to Home
      </button>
    </div>
  );
}

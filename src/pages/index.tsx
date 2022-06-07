import { useEffect } from 'react';
import styles from './index.less';
import { Line } from '../charts/main';

export default function IndexPage() {
  useEffect(() => {
    new Line('container');
  }, []);

  return (
    <div>
      <div id="container"></div>
    </div>
  );
}

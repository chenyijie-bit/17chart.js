import { useEffect } from 'react';
import styles from './index.less';
import chart from '../../17chart/bundle.js';

export default function IndexPage() {
  useEffect(() => {
    new chart.Line('container');
  }, []);

  return (
    <div className={styles.main}>
      <h2>1. 折线图</h2>
      <div id="container"></div>
    </div>
  );
}

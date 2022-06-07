import { Line } from '@antv/g2plot';

export default class _Line {
  line: any;
  constructor(id: string, options = {}) {
    const _options = Object.assign({}, options, {
      data: [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
      ],
      xField: 'year',
      yField: 'value',
    });
    this.line = new Line(id, _options);
    this.line.render();
  }
  update(options = {}) {
    this.line.update(options);
  }
}

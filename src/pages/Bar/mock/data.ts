export const data1 = [
  { value: 2, name: '手机' },
  { value: 3, name: '电脑' },
  { value: 4, name: 'iPad' },
]

export const data2 = [
  {
    key: '[0,145)',
    value: 0,
    rate: 0.0,
  },
  {
    key: '[145,298)',
    value: 1,
    rate: 0.11,
  },
  {
    key: '[298,451)',
    value: 0,
    rate: 0.0,
  },
  {
    key: '[451,604)',
    value: 2,
    rate: 0.22,
  },
  {
    key: '[604,757)',
    value: 3,
    rate: 0.33,
  },
  {
    key: '[757,910)',
    value: 0,
    rate: 0.0,
  },
  {
    key: '[910,1063)',
    value: 3,
    rate: 0.33,
  },
  {
    key: '[1063,1216)',
    value: 0,
    rate: 0.0,
  },
  {
    key: '[1216,1369)',
    value: 0,
    rate: 0.0,
  },
  {
    key: '[1369,1522)',
    value: 0,
    rate: 0.0,
  },
  {
    key: '[1522,+∞)',
    value: 0,
    rate: 0.0,
  },
]

export const data3 = [
  { value: 0.22, name: '手机' },
  { value: 0.33, name: '电脑' },
  { value: 0.44, name: 'iPad' },
]

export const data4 = [
  [
    { value: 201, name: '手机' },
    { value: 321, name: '电脑' },
    { value: 124, name: 'iPad' },
  ],
  [
    { value: 301, name: '手机' },
    { value: 221, name: '电脑' },
    { value: 424, name: 'iPad' },
  ],
  [
    { value: 101, name: '手机' },
    { value: 341, name: '电脑' },
    { value: 224, name: 'iPad' },
  ],
  [
    { value: 180, name: '手机' },
    { value: 321, name: '电脑' },
    { value: 174, name: 'iPad' },
  ],
]

const _data5 = []
for (let i = 0; i < 40; i++) {
  _data5.push({
    value: (Math.random() * 200).toFixed(0),
    name: `第${i + 1}实验小学`,
  })
}
export const data5 = _data5

const _data6 = []
for (let i = 0; i < 40; i++) {
  _data6.push({
    value: (Math.random() * 200).toFixed(0),
    name: `第${i + 1}实验小学(北京市xx附中望京分校)`,
  })
}
export const data6 = _data6

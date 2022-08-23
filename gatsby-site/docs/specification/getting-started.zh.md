---
title: 开始使用
order: 1
redirect_from:
  - /zh/docs/specification
---

## 如何使用17chart.js

> 当前还未发布npm，还在开发beta阶段，请勿使用!

### 1. 安装17chart.js

```
npm install 17chart.js
```

### 2. 引入17chart.js和17chart.css

```
import $17chart from '17chart.js'
import '17chart.js/17chart.css'

new $17chart.Bar('chart1', {
  renderer: 'svg',
  data: data1,
  xField: 'name',
  yField: 'value',
})
```

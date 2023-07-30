---
nav:
  title: ScrollNumber
  path: /components
---

## 滚动数字

```tsx
import React, { useState, useEffect } from 'react';
import { ScrollNumber } from 'mextend-ui';

export default () => {
  const [number, setNumber] = useState(123);
  const [symbol, setSymbol] = useState(',');
  const [itemHeight, setItemHeight] = useState(40);

  useEffect(() => {
    setTimeout(() => {
      setNumber(999999);
    }, 1000);
  }, []);

  return (
    <div className="demo-box">
      <div className="demo">
        <h3>默认</h3>
        <ScrollNumber number={number} />
      </div>
      <div className="demo">
        <h3>千位分割</h3>
        <ScrollNumber number={number} symbol={symbol} />
      </div>
      <div className="demo">
        <h3>自定义</h3>
        <ScrollNumber number={number} className="my-class" itemHeight={itemHeight} />
      </div>
    </div>
  );
};
```

## 说明

react 数字滚动组件。

## API

| 参数 | 类型 | 是否必填 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- | :-- |
| number | Number | 是 | `0` | 滚动数字，不配置报错：`Uncaught Error: 组件参数[number]是必填项，请先配置数字哦！` |
| symbol | String | 否 | `不显示` | 千位分隔符 |
| scrollTime | Number | 否 | `1000` | 数字滚动动画时间 |
| className | String | 否 | `''` | 自定义样式 class |
| initStatus | Boolean | 否 | `true` | 初始化是否滚动 |
| itemHeight | String | 否 | `20px` | 数字滚动高度 |

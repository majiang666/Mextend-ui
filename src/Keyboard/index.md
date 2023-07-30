---
nav:
  title: Keyboard
  path: /components
---

## 自定义键盘

```tsx
import React, { useState, useEffect } from 'react';
import { Keyboard } from 'mextend-ui';

export default () => {
  const [keyboardType, setKeyboardType] = useState('number');
  const [number, setNumber] = useState(0);
  const onInput = (vaule) => {
    setNumber(vaule);
  };
  const onConfirm = (value) => {
    console.log(value);
  }

  return (
    <div className="demo-box">
      <div className="demo">
        <h3>默认</h3>
        <div>选中：{number}</div>
        <Keyboard
          type={keyboardType}
          delIcon=""
          confirmText="转账"
          themeColor="#f60"
          onInput={onInput}
          onConfirm={onConfirm}
        />
      </div>
    </div>
  );
};
```

## 说明

react 自定义键盘。

## API

| 参数 | 类型 | 是否必填 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- | :-- |
| number | Number | 是 | `0` | 滚动数字，不配置报错：`Uncaught Error: 组件参数[number]是必填项，请先配置数字哦！` |
| symbol | String | 否 | `不显示` | 千位分隔符 |
| scrollTime | Number | 否 | `1000` | 数字滚动动画时间 |
| className | String | 否 | `''` | 自定义样式 class |
| initStatus | Boolean | 否 | `true` | 初始化是否滚动 |
| itemHeight | String | 否 | `20px` | 数字滚动高度 |

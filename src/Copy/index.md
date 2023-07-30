---
nav:
  title: Copy
  path: /components
---

## 复制文本

```tsx
import React from 'react';
import { Copy } from 'mextend-ui';

export default () => {
  const copyContent = '欢迎使用 Mextend-ui';
  const copyCallback = () => {
    alert('复制成功');
  };

  return (
    <div className="demo-box">
      <div className="demo">
        <h3>默认</h3>
        <Copy value={copyContent} onClick={copyCallback} />
      </div>
    </div>
  );
};
```

## 说明

移动端，实现点击复制到剪贴板，【真正】兼容所有浏览器 uc、qq、微信、手机自带等浏览器。

## API

| 参数 | 类型 | 是否必填 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- | :-- |
| value | String | 是 | `''` | 需要复制的内容，不填写报错：`Uncaught Error: Please configure the [value] of the component` |
| style | Object | 否 | `null` | 自定义内联样式，参考 react 内联样式写法 |
| btnText | String | 否 | `Copy` | 复制按钮文字 |
| className | String | 否 | `mextend-ui-copy` | 自定义 class 名，定义复制按钮的样式 |
| onClick | Function | 否 | `() => {}` | 复制成功的回调函数，常用于复制成功提示 |

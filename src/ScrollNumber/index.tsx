import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './index.css';

// 延迟，初始化是否开始滚动
export const delay = (time = 0) => new Promise((resolve) => setTimeout(resolve, time));

// 判空，不包括0
export const isEmpty = (inObj: string) => {
  if (inObj === undefined || inObj === null || inObj === '') return true;
  return false;
};

// 判断数字
export const isNumber = (number: any) =>
  Object.prototype.toString.call(number) === '[object Number]';

// 处理小数部分
export const numFormat = (num: string, symbol: string) => {
  if (isEmpty(num)) return;
  var res = num.toString().replace(/\d+/, function (n) {
    // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + symbol;
    });
  });
  return res;
};

// 分割数字
export const splitK = (num: string, symbol: string) => {
  if (isEmpty(num)) return;
  var decimal = num.toString().split('.')[1] || ''; //小数部分
  var tempArr: string[] = [];
  var revNumArr = num.toString().split('.')[0].split('').reverse(); //倒序
  revNumArr.forEach((v, i) => {
    tempArr.push(v);
    if ((i + 1) % 3 === 0 && i !== revNumArr.length - 1) {
      tempArr.push(symbol || '');
    }
  });
  var integer = tempArr.reverse().join(''); //整数部分
  return decimal ? integer + '.' + decimal : integer;
};

// 分割数字为数组
export const splitNumberArr = (num: string, symbol: string): any => {
  if (isEmpty(num)) return;
  let numberValue: any = symbol ? splitK(num, symbol) : num;
  let numberArr =
    typeof numberValue === 'number' ? numberValue.toString().split('') : numberValue.split('');
  return numberArr;
};

export default (props: any) => {
  const [styleArr = [], setStyleArr] = useState([]);
  const [numberArr = []] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.', props.symbol]);
  // 数字滚动动画
  const animate = () => {
    let { symbol, number = 0, itemHeight = 20, scrollTime = 1000 } = props;
    const itemHeightVal = itemHeight ? +itemHeight : 20;
    let numberValue = symbol ? numFormat(number, symbol) : number;
    let res = isNumber(numberValue) ? numberValue.toString().split('') : numberValue.split('');
    let styleArr: any = [];
    res.forEach((item: string) => {
      styleArr.push({
        transform: `translateY(${
          item === '.'
            ? -10 * itemHeightVal
            : item === symbol
            ? -11 * itemHeightVal
            : -item * itemHeightVal
        }px)`,
        transition: `all ${
          item === '.' || item === symbol ? 0 : +scrollTime / 1000
        }s cubic-bezier(.25,.1,.25,1)`,
      });
    });
    // 防止用户设置太快导致动画失效
    setTimeout(() => {
      setStyleArr(styleArr);
    }, 0);
  };
  useEffect(() => {
    if (isEmpty(props.number)) {
      throw '组件参数[number]是必填项，请先配置数字哦！';
    }
    const { initStatus = true } = props;
    if (initStatus) {
      delay();
    }
    animate();
  }, [props.number]);

  let { number, symbol, itemHeight, className } = props;
  let heightVal = itemHeight ? { height: `${itemHeight}px` } : {};
  let lineHeightVal = itemHeight ? { lineHeight: `${itemHeight}px` } : {};
  let numberList = splitNumberArr(number, symbol) || [];
  return (
    <div className="mextend-ui-scrollNumber" style={heightVal}>
      {numberList.map((item: string, index: number) => (
        <div
          className={className ? className : 'mextend-ui-up'}
          key={`${item}_${index}`}
          style={styleArr[index]}
        >
          {numberArr.map((number, i) => (
            <div
              className={classnames('item', number === props.symbol ? 'mextend-ui-symbol' : '')}
              key={`${number}_${i}`}
              style={{ ...lineHeightVal, ...heightVal }}
            >
              {number === '.' ? '.' : number === props.symbol ? props.symbol : number}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

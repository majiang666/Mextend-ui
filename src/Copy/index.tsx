import React from 'react';
import './index.css';

const copyFun = (value: string, onClick: any) => {
  if (!value) {
    throw new Error(`Please configure the [value] of the component.`);
  }

  const copyid = 'selector';
  const u = navigator.userAgent;
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

  if (isAndroid || (!isAndroid && !isiOS)) {
    const txt: any = document.createElement('textarea');
    txt.style = 'position:absolute;top:-9999px;left:-9999px;';
    txt.setAttribute('id', copyid);
    txt.setAttribute('readonly', 'readonly');
    txt.innerHTML = value;
    (document.querySelector('body') as HTMLElement).appendChild(txt);
    (document.querySelector(`#${copyid}`) as any).select();
    document.execCommand('copy', false, undefined);
  }

  if (isiOS) {
    let txt = document.createElement('a');
    txt.setAttribute('id', copyid);
    txt.setAttribute('style', 'position:absolute;top:-9999px;left:-9999px;');
    txt.innerHTML = value;
    (document.querySelector('body') as HTMLElement).appendChild(txt);
    let range = document.createRange();
    range.selectNode(txt);
    (window as any).getSelection().removeAllRanges();
    (window as any).getSelection().addRange(range);
    document.execCommand('copy');
  }
  if (onClick) onClick();
  (document.querySelector(`#${copyid}`) as HTMLElement).remove();
};

export default ({
  value,
  style,
  btnText,
  className,
  onClick,
}: {
  value: string;
  style: any;
  btnText: string;
  className: string;
  onClick: void;
}) => {
  return (
    <div
      style={style ? style : null}
      onClick={copyFun.bind(this, value, onClick)}
      className={className ? className : 'mextend-ui-copy'}
    >
      {btnText ? btnText : 'Copy'}
    </div>
  );
};

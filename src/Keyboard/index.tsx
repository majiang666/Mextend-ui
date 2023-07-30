import React, { useState, useEffect } from 'react';
import del from '../assets/img/del.svg';
import './index.css';

interface IkeyboardProps {
  type?: 'number' | 'province' | 'capital';
  delIcon?: string;
  confirmText?: string;
  themeColor?: string;
  onInput: (value: string) => {};
  onConfirm: (value: string) => {};
}

let getInputValue = '';
export default ({ type, delIcon, confirmText, themeColor, onInput, onConfirm }: IkeyboardProps) => {
  const [confirmState, setConfirmState] = useState(false);
  const onClickKeyboard = (e: any) => {
    const { value } = e.target.dataset || {};
    if (value === 'delete') {
      getInputValue = getInputValue.substring(0, getInputValue.length - 1);
      onInput(getInputValue);
    } else if (value === 'confirm') {
      onConfirm(getInputValue);
    } else {
      getInputValue += value;
      onInput(getInputValue);
    }
  };
  return (
    <div className="mextend-ui-keyboard">
      {type === 'number' ? (
        <div className="mextend-ui-keyboard_number" onClick={(e) => onClickKeyboard(e)}>
          <div className="mextend-ui-keyboard_number-item" data-value="1">
            1
          </div>
          <div className="mextend-ui-keyboard_number-item" data-value="2">
            2
          </div>
          <div className="mextend-ui-keyboard_number-item" data-value="3">
            3
          </div>
          <div className="mextend-ui-keyboard_number-item" data-value="delete">
            <img src={delIcon ? delIcon : del} alt="" data-value="delete" />
          </div>
          <div className="mextend-ui-keyboard_number-item" data-value="4">
            4
          </div>
          <div className="mextend-ui-keyboard_number-item" data-value="5">
            5
          </div>
          <div className="mextend-ui-keyboard_number-item" data-value="6">
            6
          </div>
          <div className="mextend-ui-keyboard_number-item"></div>
          <div className="mextend-ui-keyboard_number-item" data-value="7">
            7
          </div>
          <div className="mextend-ui-keyboard_number-item" data-value="8">
            8
          </div>
          <div className="mextend-ui-keyboard_number-item" data-value="9">
            9
          </div>
          <div className="mextend-ui-keyboard_number-item"></div>
          <div className="mextend-ui-keyboard_number-item keyboard-zero">
            <div className="keyboard-zero-box" data-value="0">
              0
            </div>
          </div>
          <div className="mextend-ui-keyboard_number-item"></div>
          <div className="mextend-ui-keyboard_number-item" data-value=".">
            .
          </div>
          <div className="mextend-ui-keyboard_number-item"></div>
          <div
            className="keyboard-confirm-box"
            style={{ background: themeColor ? themeColor : '', color: '#fff' }}
            data-value="confirm"
          >
            <div className="keyboard-confirm-text" data-value="confirm">
              {confirmText ? confirmText : '确定'}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      {type === 'province' ? <div className="mextend-ui-keyboard_province">province</div> : ''}
      {type === 'capital' ? <div className="mextend-ui-keyboard_capital">capital</div> : ''}
    </div>
  );
};

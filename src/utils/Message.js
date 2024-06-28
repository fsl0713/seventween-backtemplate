import { message } from 'antd';

message.config({
  maxCount: 1
})

export const Message = ({ type, content, duration = 3, onClose }) => {
  message[type](content, duration, onClose);
};
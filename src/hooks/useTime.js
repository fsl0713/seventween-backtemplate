import React, { useEffect, useState } from 'react';

const useDateTime = () => {
  let timer = null;
  const [year, setYear] = useState(0); // 年份
  const [month, setMonth] = useState(0); // 月
  const [week, setWeek] = useState(0); // 星期几
  const [day, setDay] = useState(0); // 天数
  const [hour, setHour] = useState(0); // 小时
  const [minute, setMinute] = useState(0); // 分钟
  const [second, setSecond] = useState(0); // 秒
  // 更新时间
  const updateTime = () => {
    const date = new Date();
    setYear(date.getFullYear());
    setMonth(date.getMonth() + 1);
    setWeek('日一二三四五六'.charAt(date.getDay()));
    setDay(date.getDate());
    setHour((date.getHours() + '')?.padStart(2, '0') ||
      new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(date.getHours()));
    setMinute((date.getMinutes() + '')?.padStart(2, '0') ||
      new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(date.getMinutes()));
    setSecond((date.getSeconds() + '')?.padStart(2, '0') ||
      new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(date.getSeconds()));
  }
  useEffect(() => {
    updateTime();
    clearInterval(timer);
    timer = setInterval(() => updateTime(), 1000);
    return () => {
      clearInterval(timer);
      timer = null;
    }
  }, [])

  return { year, month, week, day, hour, minute, second };
}

export default useDateTime;
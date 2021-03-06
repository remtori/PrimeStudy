import React from 'react'
import { useTranslation } from 'react-i18next';
import { toDateHeader } from '../../utility'
import { useSelector } from 'react-redux';

export default function Intro() {

  const { i18n } = useTranslation();
  const date = useSelector(state => state.lesson.date ? new Date(state.lesson.date) : new Date());
  const subject = useSelector(state => state.lesson.subject || null );
  const title = useSelector(state => state.lesson.title);

  return (
    <div className="text-center">
      <h3>{toDateHeader(date, i18n.language)}</h3>
      <h2><u>{subject && subject.name}</u></h2>
      <h2 style={{textTransform: "uppercase"}}>
        {title}
      </h2>
    </div>
  )
}

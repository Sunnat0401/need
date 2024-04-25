import './App.css'
import Footer from './Companents/Footer/Footer'
import Navbar from './Companents/Navbar/Navbar'
import React from "react";
import { createRoot } from 'react-dom/client';
import i18n, { changeLanguage } from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import translationUz from '../locale/translationUz';
import translationEn from '../locale/translationEn';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: {   translation:  translationUz },
      en: {translation : translationEn},
    },
    lng: "uz", 
    fallbackLng: "uz",

    interpolation: {
      escapeValue: false 
    }
  });

const  App =()  =>{
  const changeLang =(value) =>{
    changeLanguage(value)
  }
  const { t } = useTranslation();

  return (
     <>
      <Navbar changeLang={changeLang}/>
        <h1>Assalomu Alaykum jigarlar qalesizlar </h1>
      <Footer/>
     
     </>
  )
}

export default App

import React from 'react'
import HeaderPage from '../../../../Components/HeaderPage'
import { useTranslations } from 'next-intl'

function page() {
  const t =useTranslations("home.footer")
  return (
    <>
    <HeaderPage title={t("privacy")} img={"/images/privacy.png"}/>
    <section className='policy'>
    <div className='con'>
        <h3>السلامة</h3>
        <p>نتعهد بالتزامنا المستمر من خلال سياستنا الخاصة بالسلامة بإتاحة استخدام موثوق لموقع وتطبيق معاك</p>
        <ul>
            <li>نتعهد بالتزامنا المستمر من خلال سياستنا الخاصة بالسلامة بإتاحة استخدام موثوق لموقع وتطبيق معاك</li>
            <li>نتعهد بالتزامنا المستمر من خلال سياستنا الخاصة بالسلامة بإتاحة استخدام موثوق لموقع وتطبيق معاك</li>
            <li>نتعهد بالتزامنا المستمر من خلال سياستنا الخاصة بالسلامة بإتاحة استخدام موثوق لموقع وتطبيق معاك</li>
        </ul>
    </div>
    </section>
   
    </>
  )
}

export default page
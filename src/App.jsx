import './App.css'
import logo from './img/logo.png'
import g1 from './img/g1.svg'
import s1 from './img/s1.svg'
import k1 from './img/k1.png'
import k2 from './img/k2.png'
import k3 from './img/k3.png'
import k4 from './img/k4.png'
import k5 from './img/k5.png'


import UslugCard from './components/uslugCard/card'

function App() {

  let uslug = [
    {
      id: 1,
      icon: g1,
      title: 'Обслуживание  компьютеров',
    },
    {
      id: 2,
      icon: g1,
      title: 'Обслуживание компьютеров',
    },
    {
      id: 3,
      icon: g1,
      title: 'Обслуживание компьютеров',
    },
    {
      id: 4,
      icon: g1,
      title: 'Обслуживание компьютеров',
    },
    {
      id: 5,
      icon: g1,
      title: 'Обслуживание компьютеров',
    },
    {
      id: 6,
      icon: g1,
      title: 'Обслуживание компьютеров',
    }

  ]


  return (
    <div className="App">
      {/* header */}
      <div className='header_bg'>
        {/*  center block */}
        <div className=' lg:container mx-auto flex flex-col xs:p-5 lg:p-0 ' >
          {/* navbar */}
          <div className='flex justify-between  text-[#fff] pt-10  items-center ' >
            <div><img src={logo} alt="" /></div>
            <div className='w-[250px] flex justify-between text-[#fff] xs:hidden sm:flex '>
              <a href="#">О нас</a>
              <a href="#">Услуги</a>
              <a href="#">Цены</a>
            </div>
            <div className='xs:hidden sm:flex'>
              <p>+992 988 15 14 86</p>
              <p>+992 220 02 07 07</p>
            </div>
          </div>

          {/* header title */}
          <div className='font-bold mt-10 '>
            <h1 className='text-[#00FEFF] lg:text-[50px] md:text-[45px] sm:text-[40px] xs:text-[35px] pb-10'>IT-Аутсорсинг <br /> компаниям в Киеве</h1>
            <p className='text-[#00FEFF] '>Обслуживание компьютеров в Киеве</p>
            <p className='text-[#fff] pb-5 ' >От<span className='text-[#00FEFF]' >315грн</span>/мес <br />
              за 1 рабочее место</p>
            <div className='flex justify-between xs:flex-col sm:flex-row '>
              <a href="#" className='py-[14px] px-[22px] bg-[#00FEFF] text-[#002047] rounded-[10px] text-center '  >Отправить заявку</a>
              <p className='text-[#fff]'>Мы знаем как сложно найти хорошую компанию по <br /> обслуживанию компьютеров в Киеве. Исправим это!</p>
            </div>
          </div>

        </div>
      </div>

      {/* main */}
      <div className='lg:container mx-auto flex flex-col xs:p-5 lg:p-0 mt-[-150px]'>

        {/* first main block */}
        <div className='flex justify-between xs:flex-col sm:flex-row items-center ' >
          <h2 className='text-[40px] min-w-[150px]  font-bold text-[#001E42] '>О нас</h2>
          <p className='md:w-[800px] xs:w-[340px] sm:w-[640px] '>IT-SPK - сервисная компания по обслуживанию АйТи инфраструктуры для бизнеса.
            Мы небольшая команда фанатов своего дела c многолетним опытом работы. Решаем
            любые ИТ задачи в Киеве: проектирование, монтаж и поддержка ИТ инфраструктуры,
            настройка и поддержка серверов, виртуализация, обслуживание компьютеров, поддержка пользователей.</p>
        </div>


        {/* second main block component */}
        <div className='mt-20'>
          <h2 className='text-[40px] text-[#001E42] font-bold' >Услуги</h2>
          <div className='flex justify-between flex-wrap gap-20 xs:justify-center max-w-[1200px] mx-auto ' >
            {
              uslug.map((elem) => {
                return <UslugCard {...elem} />
              })
            }
          </div>
        </div>

        {/* third main block */}
        <div className='py-10'>
          <h2 className='text-[24px] text-[#001E42] font-bold ' >C IT-SPK ваш офис будет работать эффективно и безотказно</h2>
          <div className='flex justify-between gap-10 text-[#252D37] mt-5 mb-10 xs:flex-col sm:flex-row'>
            <p>За время работы мы подобрали оптимальные решения по соотношению
              цена-качество для организации офисной IT-инфраструктуры. Огромный
              опыт обслуживания объектов в Киеве от офиса на несколько рабочих мест
              до офисно-производственных комплексов на тысячи квадартных метров и
              более полутора сотен подключенных абонентов.</p>
            <p>За время работы мы подобрали оптимальные решения по соотношению
              цена-качество для организации офисной IT-инфраструктуры. Огромный
              опыт обслуживания объектов в Киеве от офиса на несколько рабочих мест
              до офисно-производственных комплексов на тысячи квадартных метров и
              более полутора сотен подключенных абонентов.</p>
          </div>
          <p><a href="#" className='bg-[#00FEFF] text-[#002047] py-[13px] px-[25px] rounded-[10px] ' >Отправить заявку</a></p>
        </div>

        {/*  fifth block */}
        <div className='py-20' >
          <div className='flex justify-between gap-10 xs:flex-col sm:flex-row' >
            <img src={s1} alt="" />
            <h3 className='text-[#001E42] text-[24px] sm:w-[551px] xs:w-[340px] self-center font-bold '>Сократить расходы на ИТ + оптимизировать работу = увеличить вашу прибыль и отрыв от конкурентов</h3>
          </div>
          <h3 className='text-[#001E42] text-[24px] font-bold py-10 ' >Подключить обслуживание компьютеров у нас очень просто</h3>
          <div className='flex  xs:flex-col sm:flex-row xs:items-center justify-between gap-10 '>
            <p className='text-[#001E42] text-[18px] font-bold w-[276px]'> Оставить заявку на сайте или просто позвонить нам</p>
            <p className='text-[#001E42] text-[18px] font-bold w-[276px]'>Оставить заявку на сайте или просто позвонить нам</p>
            <p className='text-[#001E42] text-[18px] font-bold w-[276px]'>Оставить заявку на сайте или просто позвонить нам</p>
          </div>
        </div>

        {/* fifth main block */}
        <div className='' >
          <h2 className='text-[#001E42] text-[40px] font-bold py-10'>Цены</h2>
          <div className='flex justify-between gap-10 xs:flex-col lg:flex-row xs:items-center lg: ' >
            <div>
              <p className='w-[550px] xs:w-[340px] ' >У нас нет зарплаты или фиксированной суммы в месяц,
                все рассчеты базируются только на количестве компьютеров,
                которые мы берем на обслуживание и подключенных услугах.
                Платите только за что чем пользуетесь - максимальная
                экономия и эффективность. Оставьте заявку на обслуживание
                компьютеров и мы подготовим предложение специально для вас</p>
              <div className='py-5 flex  gap-10 '  >
                <a className='py-[10px] text-[#001E42]  px-[30px] border-[1px] border-[#001E42] ' href="#">Прайс IT</a>
                <a className='py-[10px] text-[#001E42]  px-[30px] border-[1px] border-[#001E42]' href="#">Прайс монтаж</a>
              </div>
            </div>

            <div className='flex  gap-5 font-bold text-center'>
              <div className='border-[3px] border-[#001E42] p-3 text-[#001E42] '>
                <p >Тарифный план</p>
                <p className='text-[26px]'>Легкий старт</p>
                <p className='text-[36px]'>350</p>
                <p>грн/мес</p>
                <p>за 1 рабочее место</p>
              </div>
              <div className='border-[3px] border-[#001E42] p-3 text-[#001E42]'>
                <p >Тарифный план</p>
                <p className='text-[26px]'>Легкий старт</p>
                <p className='text-[36px]'>350</p>
                <p>грн/мес</p>
                <p>за 1 рабочее место</p>
              </div>
            </div>
          </div>
        </div>

        {/* sixth main block */}
        <div>
          <h2 className='text-[#001E42] text-[40px] font-bold ' >Клиенты</h2>
          <div className='flex flex-wrap justify-center '>
            <div> <img src={k1} alt="" /></div>
            <div><img src={k2} alt="" /></div>
            <div><img src={k3} alt="" /></div>
            <div><img src={k4} alt="" /></div>
            <div><img src={k5} alt="" /></div>
          </div>
        </div>


        <div>
          <h3 className='text-[#001E42] text-[30px] font-bold ' >Организация IT-инфраструктуры в Киеве</h3>
          <div className='flex gap-5 text-[#A5AAAF] xs:flex-col sm:flex-row'>
            <p>Мы имеем большой опыт организации работы IT отделов
              разных компаний из города Киев и на основе этого
              создали универсальный протокол работы, который гарантирует
              стабильно высокое качество предоставления услуг. Всегда на
              старте проводим аудит существующих апаратных и программных

              решений. Берем во внимание как проложены сети, установленное
              серверное и коммутационное оборудование, к каким провайдерам
              и на каких условиях подключено. Анализ установленных компьютеров
              и оборудования, завязанных в сеть компании. По результатам
              этого этапа работы мы даем комплексный отчет с перечнем
              найденных критических и потенциально проблемных мест в ИТ-
              инфраструктуре компании, с вариантами их устранения. В
              если идет проектирование IT-инфраструктуры с нуля, мы
              учтем все пожелания и сразу сделаем все необходимое для
              бесперебойной работы компьютерной сети компании. Спланируем
              и организуем переезд всех IT-систем офиса на новую локацию или
              удаленную работу сотрудников при необходимости.</p>

            <p>Мы имеем большой опыт организации работы IT отделов
              разных компаний из города Киев и на основе этого
              создали универсальный протокол работы, который гарантирует
              стабильно высокое качество предоставления услуг. Всегда на
              старте проводим аудит существующих апаратных и программных

              решений. Берем во внимание как проложены сети, установленное
              серверное и коммутационное оборудование, к каким провайдерам
              и на каких условиях подключено. Анализ установленных компьютеров
              и оборудования, завязанных в сеть компании. По результатам
              этого этапа работы мы даем комплексный отчет с перечнем
              найденных критических и потенциально проблемных мест в ИТ-
              инфраструктуре компании, с вариантами их устранения. В
              если идет проектирование IT-инфраструктуры с нуля, мы
              учтем все пожелания и сразу сделаем все необходимое для
              бесперебойной работы компьютерной сети компании. Спланируем
              и организуем переезд всех IT-систем офиса на новую локацию или
              удаленную работу сотрудников при необходимости.</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App

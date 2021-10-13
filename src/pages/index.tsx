import type { NextPage } from 'next'
import SafeEnvironment from '../ui/components/feedback/SafeEnviroment/SafeEnvironment';
import PageTitle from '../ui/components/datadisplay/PageTitle/PageTitle';
import UserInformation from '../ui/components/datadisplay/UserInformation/UserInformation';

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'} 
        subtitle={'Preencha seu endereço e veja todos os profissonais da sua localidade'} 
      />

      <UserInformation 
        name={'Mary'}
        picture={''}
        rating={5}
        description={'Asunción'}
      />
    </div>
  )
}

export default Home

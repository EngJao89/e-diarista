import type { NextPage } from 'next'
import SafeEnvironment from '../ui/components/feedback/SafeEnviroment/SafeEnvironment';
import PageTitle from '../ui/components/datadisplay/PageTitle/PageTitle';
import UserInformation from '../ui/components/datadisplay/UserInformation/UserInformation';
import TextFieldMask from '../ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Typography, Container } from '@mui/material';
import { 
  FormElementsContainer, 
  ProfissionaisPaper, 
  ProfissionaisContainer, 
} from '../ui/styles/pages/index.style';

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'} 
        subtitle={'Preencha seu endereço e veja todos os profissonais da sua localidade'} 
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
          />

          <Typography color={'error'}>CEP inválido</Typography>

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation 
              name={'Mary'}
              picture={''}
              rating={5}
              description={'Asunción'}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  )
}

export default Home

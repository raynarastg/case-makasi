import { SubmitHandler, useForm } from 'react-hook-form';
import { FiSearch } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input, InputContainer } from '../../components/Input';
import { H1Title } from '../../components/Titles';
import { styled } from '../../stitches.config';
import { UserSearchFormType } from '../../types';

const StyledHomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  gap: 20,
  padding: 20,
  textAlign: 'center',
});

export const Home = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSearchFormType>();

  const redirectToProfilePage: SubmitHandler<UserSearchFormType> = ({ username }) => {
    history.push(`/perfil/${username}`);
  };

  return (
    <StyledHomeContainer>
      <H1Title>Search Devs</H1Title>
      <form
        onSubmit={handleSubmit(redirectToProfilePage)}
        style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
      >
        <InputContainer>
          <Input type="text" placeholder="Type the username here..." {...register('username', { required: true })} />
          <Button type="submit">
            <FiSearch />
            Buscar
          </Button>
        </InputContainer>
        {errors.username && <p style={{ color: 'red' }}>O campo é obrigatório</p>}
      </form>
    </StyledHomeContainer>
  );
};

import { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getUserAndRepos } from '../../api';
import LeftColumn from '../../components/LeftColumn';
import RightColumn from '../../components/RightColumn';
import { UserAndReposContext } from '../../context/UserAndReposContext';
import { styled } from '../../stitches.config';
import { ProfileParamsType } from '../../types';

export const Profile = () => {
  const history = useHistory();
  const { username } = useParams<ProfileParamsType>();
  const { user, setUser } = useContext(UserAndReposContext);
  const [error, setError] = useState<string | undefined>();

  const ContainerColumns = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '@tablet': { display: 'flex', flexDirection: 'column', gap: 16 },
  });

  useEffect(() => {
    setUser(undefined);
    if (username)
      getUserAndRepos(username)
        .then(data => setUser(data))
        .catch(e => setError(String(e)));
  }, [setUser, username]);
  if (!username) {
    history.push('/');
  }
  return error ? (
    <p style={{ color: 'red' }}>
      Não foi possível carregar o usuário.
      <br />
      Retorno da API: {error}
    </p>
  ) : user ? (
    <ContainerColumns>
      <LeftColumn />
      <RightColumn />
    </ContainerColumns>
  ) : (
    <ContainerColumns>Carregando dados do usuário...</ContainerColumns>
  );
};

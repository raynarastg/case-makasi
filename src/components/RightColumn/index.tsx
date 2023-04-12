import moment from 'moment';
import { useContext } from 'react';
import { FiStar } from 'react-icons/fi';
import { UserAndReposContext } from '../../context/UserAndReposContext';
import { styled } from '../../stitches.config';
import { ContainerTextAndIcon, Link } from '../LeftColumn';
import { H4Title, H5Title, H6Title } from '../Titles';

const StyledRightColumn = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: 16,
  py: 16,
  px: 50,
  paddingLeft: 550,
  color: '$petroleo',
  '@tablet': {
    paddingLeft: 'unset',
    padding: 20,
  },
  '@mobile': { padding: '0 20px' },
});

const StyledRepositoryContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '2px solid rgba(59, 66, 82, 0.2)',
  gap: 8,
  minHeight: 90,
  py: 20,
});

export const StyledRepoDetails = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: 16,
  color: 'rgb(115, 121, 136)',
  alignItems: 'center',
});

const LittleCircle = styled('span', {
  display: 'flex',
  flexShrink: 0,
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: 'rgb(115, 121, 136)',
});

export default function RightColumn() {
  const { user } = useContext(UserAndReposContext);

  return (
    <StyledRightColumn>
      {user?.repos && user?.repos.length <= 0 && <p>O usuário não possui repositórios públicos</p>}
      {user?.repos &&
        user.repos.map((repo, index) => (
          <StyledRepositoryContainer key={`repo-${index}`}>
            <Link href={repo.html_url} target="_blank">
              <H6Title>{repo.name}</H6Title>
            </Link>
            <H5Title>{repo.description}</H5Title>
            <StyledRepoDetails>
              <ContainerTextAndIcon>
                <FiStar style={{ color: 'rgb(115, 121, 136)' }} />
                <H4Title>{repo.stargazers_count}</H4Title>
              </ContainerTextAndIcon>
              <LittleCircle />
              <H4Title>Updated {moment(repo.updated_at).fromNow()}</H4Title>
            </StyledRepoDetails>
          </StyledRepositoryContainer>
        ))}
    </StyledRightColumn>
  );
}

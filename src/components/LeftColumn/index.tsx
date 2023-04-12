import { useContext } from 'react';
import { FiHeart, FiLink, FiMapPin, FiStar, FiTwitter, FiUsers } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { RiBuilding4Line } from 'react-icons/ri';

import { useHistory } from 'react-router';
import { UserAndReposContext } from '../../context/UserAndReposContext';
import { styled } from '../../stitches.config';
import { Button } from '../Button';
import { H2Title, H3Title, H4Title, H5Title } from '../Titles/index';

const StyledLeftColumn = styled('div', {
  fontFamily: 'Rubik, sans-serif',
  color: '$white',
  display: 'inline-flex',
  flexDirection: 'column',
  gap: 30,
  backgroundColor: '$petroleo',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 500,
  maxWidth: 500,
  position: 'fixed',
  height: '100vh',
  overflowY: 'auto',
  padding: '40px 20px',

  '@tablet': {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    maxWidth: '100%',
    minWidth: 'unset',
    height: 'auto',
    position: 'unset',
  },
  '@mobile': {
    flexDirection: 'column',
    padding: 20,
    textAlign: 'center',
    gap: 10,
  },
});

const ContainerImage = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 100,
  '@tablet': {
    width: '30%',
  },
});

const StyledContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
  alignItems: 'center',
  justifyContent: 'center',
  '@tablet': {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    gap: 10,
  },
  '@mobile': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
});

const ContainerUserInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-start',
  gap: 16,
});

const ContainerDetailsUser = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  '@mobile': { alignItems: 'center' },
});

export const ContainerTextAndIcon = styled('div', {
  alignItems: 'center',
  display: 'flex',
  gap: 4,
});

const ContainerInteractionSocial = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 50,
  '@tablet': {
    gap: 20,
    rowGap: 10,
  },
  '@mobile': {
    justifyContent: 'center',
  },
});

export const Link = styled('a', {
  textDecoration: 'none',
  color: 'inherit',
});

const Image = styled('img', {
  width: 300,
  borderRadius: 8,
  '@tablet': {
    width: '100%',
  },
});

export default function LeftColumn() {
  const history = useHistory();

  const { user } = useContext(UserAndReposContext);
  return (
    <StyledLeftColumn>
      {user && (
        <>
          <ContainerImage>
            <Image src={user.avatar_url} alt="imagem do usuario" />
          </ContainerImage>
          <StyledContainer>
            <ContainerUserInfos>
              <div>
                <H2Title title="name">{user.name}</H2Title>
                <H3Title>@{user.login}</H3Title>
              </div>
              <H5Title title="bio">{user.bio}</H5Title>
              <ContainerInteractionSocial>
                <ContainerTextAndIcon>
                  <FiUsers />
                  <H5Title>{user.followers}</H5Title>followers
                </ContainerTextAndIcon>
                <ContainerTextAndIcon>
                  <FiHeart />
                  <H5Title>{user.following} </H5Title>following
                </ContainerTextAndIcon>
                <ContainerTextAndIcon>
                  <FiStar />
                  <H5Title>{user.starredUser.length}</H5Title>stars
                </ContainerTextAndIcon>
              </ContainerInteractionSocial>
              <ContainerDetailsUser>
                {user.company && (
                  <ContainerTextAndIcon>
                    <RiBuilding4Line />
                    <H4Title title="company">{user.company}</H4Title>
                  </ContainerTextAndIcon>
                )}
                {user.location && (
                  <ContainerTextAndIcon>
                    <FiMapPin />
                    <H4Title title="location">{user.location}</H4Title>
                  </ContainerTextAndIcon>
                )}
                {user.email && (
                  <ContainerTextAndIcon>
                    <GoMail />
                    <H4Title>{user.email}</H4Title>
                  </ContainerTextAndIcon>
                )}
                {user.blog && (
                  <Link
                    href={
                      user.blog.startsWith('http://') || user.blog.startsWith('https://')
                        ? user.blog
                        : `https://${user.blog}`
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ContainerTextAndIcon>
                      <FiLink />
                      <H4Title>{user.blog}</H4Title>
                    </ContainerTextAndIcon>
                  </Link>
                )}
                {user.twitter_username && (
                  <Link href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="twitter noreferrer">
                    <ContainerTextAndIcon>
                      <FiTwitter />
                      <H4Title>@{user.twitter_username}</H4Title>
                    </ContainerTextAndIcon>
                  </Link>
                )}
              </ContainerDetailsUser>
            </ContainerUserInfos>
            <Button
              fontSize="size"
              color="petroleo"
              backgroundColor="white"
              type="button"
              onClick={() => history.push('/')}
            >
              Voltar
            </Button>
          </StyledContainer>
        </>
      )}
    </StyledLeftColumn>
  );
}

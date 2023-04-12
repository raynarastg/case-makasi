/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { UserAndReposProvider } from '../context/UserAndReposContext';
import { Profile } from '../pages/Profile';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    username: 'raynarastg',
  }),
  useRouteMatch: () => ({ url: '/perfil/raynarastg' }),
}));
jest.setTimeout(30000);

describe('profile page test', () => {
  let h3Text;
  let h5Text;
  let h2Text;

  test('check if h2 contains the name of user', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/perfil/raynarastg']}>
          <UserAndReposProvider>
            <Profile />
          </UserAndReposProvider>
        </MemoryRouter>
      );
    });
    await new Promise(r => setTimeout(r, 3000));
    await waitFor(() => {
      h2Text = screen.getByRole('heading', { level: 2 });
      expect(h2Text).toHaveTextContent(/^Raynara santiago$/i);
    });
  });
  test('check if h3 contains the github username of user', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/perfil/raynarastg']}>
          <UserAndReposProvider>
            <Profile />
          </UserAndReposProvider>
        </MemoryRouter>
      );
    });
    await new Promise(r => setTimeout(r, 3000));
    await waitFor(() => {
      h3Text = screen.getByRole('heading', { level: 3 });
      expect(h3Text).toBeInTheDocument();
      expect(h3Text).toHaveTextContent(/^@raynarastg$/i);
    });
  });
  test('check if h5 is on the screen and contains the bio of user', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/perfil/raynarastg']}>
          <UserAndReposProvider>
            <Profile />
          </UserAndReposProvider>
        </MemoryRouter>
      );
    });
    await new Promise(r => setTimeout(r, 3000));
    await waitFor(() => {
      h5Text = screen.getByTitle('bio');
      expect(h5Text).toBeInTheDocument();
      expect(h5Text).toHaveTextContent(/^Front-end Developer | Trybe$/i);
    });
  });
  test('check if h4 is on the screen and contains the company of user', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/perfil/raynarastg']}>
          <UserAndReposProvider>
            <Profile />
          </UserAndReposProvider>
        </MemoryRouter>
      );
    });
    await new Promise(r => setTimeout(r, 3000));
    await waitFor(() => {
      const h4Company = screen.getByTitle('company');
      expect(h4Company).toBeInTheDocument();
      expect(h4Company).toHaveTextContent(/^Trybe$/i);
    });
  });
  test('check if h4 is on the screen and contains the location of user', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/perfil/raynarastg']}>
          <UserAndReposProvider>
            <Profile />
          </UserAndReposProvider>
        </MemoryRouter>
      );
    });
    await new Promise(r => setTimeout(r, 3000));
    await waitFor(() => {
      const h4Location = screen.getByTitle('location');
      expect(h4Location).toBeInTheDocument();
      expect(h4Location).toHaveTextContent(/^Londrina - Pr$/i);
    });
  });
  test('check if back button is on the screen', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/perfil/raynarastg']}>
          <UserAndReposProvider>
            <Profile />
          </UserAndReposProvider>
        </MemoryRouter>
      );
    });
    await new Promise(r => setTimeout(r, 3000));
    await waitFor(() => {
      const backButton = screen.getByRole('button');
      expect(backButton).toBeInTheDocument();
      expect(backButton).toHaveTextContent(/^Voltar$/i);
    });
  });
});

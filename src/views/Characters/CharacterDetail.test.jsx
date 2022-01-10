import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import CharacterDetail from './CharacterDetail';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        image: 'http://example.com/image.png',
        name: 'Rick Sanchez',
        species: 'human',
        status: 'alive',
      })
    );
  })
);

describe('Character List', () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('renders a list of characters', async () => {
    render(
      <MemoryRouter initialEntries={['/characters/1']}>
        <CharacterDetail />
      </MemoryRouter>
    );

    await screen.findByText('Rick Sanchez');
  });
});

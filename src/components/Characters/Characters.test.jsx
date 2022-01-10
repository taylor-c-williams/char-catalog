import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Characters from './Characters';
import App from '../../App';

const characters = [
  {
    id: 1,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    species: 'human',
    status: 'alive',
  },
  {
    id: 2,
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    name: 'Morty Smith',
    species: 'Human',
    status: 'Alive',
  },
];
describe('Characters', () => {
  it('renders all characters', async () => {
    const container = render(
      <MemoryRouter initialEntries={['/characters']}>
        <Characters characters={characters} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

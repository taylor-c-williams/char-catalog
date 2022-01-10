import { render } from '@testing-library/react';
import Character from './Character';

const character = {
  id: 1,
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  name: 'Rick Sanchez',
  species: 'human',
  status: 'alive',
};

describe('Character', () => {
  it('renders a single character', async () => {
    const container = render(<Character character={character} />);
    expect(container).toMatchSnapshot();
  });
});

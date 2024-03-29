import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Testing in <HomePage />', () => {

  const user = {
    id: 1,
    name: 'Pepito'
  }

  test('should show component with user', () => {
    render( 
      <UserContext.Provider value={{ user: null }}>
        <HomePage /> 
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('preTag')
    expect( preTag.innerHTML ).toBe( 'null' )
  });

  test('should show the component without user', () => {
    render( 
      <UserContext.Provider value={{ user }}>
        <HomePage /> 
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('preTag')
    expect( preTag.innerHTML ).toContain( user.id.toString() )
    expect( preTag.innerHTML ).toContain( user.name )
  });

  
});
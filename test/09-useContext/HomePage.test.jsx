import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Testing in <HomePage />', () => {
  test('should show component with the user ', () => {
    render( 
      <UserContext.Provider value={{ user: null }}>
        <HomePage /> 
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('preTag')
    expect( preTag.innerHTML ).toBe( 'null' )
  });
});
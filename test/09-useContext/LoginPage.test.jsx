import { render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Testing <LoginPage />', () => {

  const user = {
    "id": 9,
    "name": "lleros",
    "email": "lleros@mail.cot)"
  }

  test('should show component without user', () => {
    render( 
      <UserContext.Provider value={{ user: null }}>
        <LoginPage /> 
      </UserContext.Provider>
    )
    const preTag = screen.getByLabelText('preTag')
    // console.log(preTag.innerHTML)
    expect( preTag.innerHTML ).toBe( 'null' )
  });
});
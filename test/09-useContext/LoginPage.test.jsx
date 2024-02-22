import { render, screen, fireEvent } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Testing <LoginPage />', () => {

  const user = {
    "id": 9,
    "name": "lleros",
    "email": "lleros@mail.cot)"
  }

  const setUser = { 
    id: 123, 
    name: 'Pepito', 
    email: 'venitocamelas@mail.cot'
  }

  const setUserMock = jest.fn()

  beforeEach( () => jest.clearAllMocks() )

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

  test('should call the setuser when the button is clicked.', () => {
    render( 
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage /> 
      </UserContext.Provider>
    )

    const btnSetUser = screen.getByLabelText('btnSetUser')
    fireEvent.click( btnSetUser )
    expect( setUserMock ).toHaveBeenCalledWith( setUser )
  });
});
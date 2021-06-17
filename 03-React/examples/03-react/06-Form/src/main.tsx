import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

interface UserInfo {
	firstname: string;
	lastname: string;
	age: string;
}

const Form = (props: { onSumbit: (arg0: UserInfo) => void; onChange: (arg0: { firstname: string; lastname: string; age: string; }) => void; }): JSX.Element => {
	const [user, setUser] = React.useState<UserInfo>({
		firstname: "",
		lastname: "",
		age: "",
	});

	return (

        
		<form
             action="#"
             method="post"
			onSubmit={(e) => {
				e.preventDefault();
				props.onSumbit(user);
			}}
		>
            <label htmlFor="firstname">First Name:</label>
			<input
				type="text"
                id="firstname"
				value={user.firstname}
				
				onChange={(e) => {setUser({ ...user, firstname: e.target.value });
                props.onChange({
                  firstname: "",
                  lastname: "",
                  age: "",});
                }}
			/>
            <label htmlFor="lastname">Last Name:</label>
			<input
				type="text"
				id="lastname"
				value={user.lastname}
				onChange={(e) => {
                    setUser({ ...user, lastname: e.target.value });
                    props.onChange({
                      firstname: "",
                      lastname: "",
                      age: "",
                    });
                }}
			/>
            <label htmlFor="age">Age:</label>
			<input
				type="number"
				id="age"
				value={user.age}
				onChange={(e) => {setUser({ ...user, age: e.target.value });
                props.onChange({
                  firstname: "",
                  lastname: "",
                  age: "",
                });
              }}
			/>
			<input type="submit" value="Send my data" />
		</form>
	);
};
const App = (): JSX.Element => {
    const [user, setUser] = React.useState<UserInfo>({
      firstname: "",
      lastname: "",
      age: "",
    });
    return (
      <>
        <Form onSumbit={setUser} onChange={setUser} />
        <p>{`${user.firstname} ${user.lastname} ${user.age}`}</p>
      </>
    );
  };
  
  ReactDOM.render(<App />, appDiv);
  

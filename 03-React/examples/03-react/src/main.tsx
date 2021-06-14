import * as React from "react";
import * as ReactDOM from "react-dom";
const appDiv = document.getElementById("app");
if (!(appDiv instanceof HTMLDivElement)) {
    throw new Error("No div with id 'app' found");
}
function RandomTitle(App: { titles: any; }) {
    const [title, newTitle] = React.useState("Click For New Title");
    const { titles } = App;
    return (
        <main>
            <p>{title}</p>
            <button onClick={() => newTitle(titles[Math.floor(Math.random()*titles.length)])}>
                New Title
            </button>
        </main>
    );
}
ReactDOM.render(
    <RandomTitle titles={[
        "Anna Karenina",
        "To Kill a Mockingbird",
        "The Great Gatsby",
        "One Hundred Years of Solitude",
        "A Passage to India",
        "Invisible Man",
        "Don Quixote",
        "Beloved",
        "Mrs. Dalloway",
        "Things Fall Apart",
        "Jane Eyre",
        "The Color Purple",
    ]} />,
    document.getElementById('app')
);